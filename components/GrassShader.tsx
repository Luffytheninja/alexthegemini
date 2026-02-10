"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GrassShader() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const isMobile = window.innerWidth < 768;

        // Scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x87CEEB); // Light sky blue

        // Camera — angled top-down for field view
        const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
        camera.position.set(0, 4, 8);
        camera.lookAt(0, 0, 0);

        // Renderer
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: !isMobile, alpha: false });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2));
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);

        // Ground plane
        const groundGeo = new THREE.PlaneGeometry(30, 30);
        const groundMat = new THREE.MeshBasicMaterial({ color: 0x4a7c2e });
        const ground = new THREE.Mesh(groundGeo, groundMat);
        ground.rotation.x = -Math.PI / 2;
        ground.position.y = -0.1;
        scene.add(ground);

        // Grass blade geometry (single blade)
        const bladeWidth = 0.04;
        const bladeHeight = 0.6;
        const bladeGeo = new THREE.BufferGeometry();
        const vertices = new Float32Array([
            -bladeWidth / 2, 0, 0,
            bladeWidth / 2, 0, 0,
            -bladeWidth / 4, bladeHeight * 0.5, 0,
            bladeWidth / 4, bladeHeight * 0.5, 0,
            0, bladeHeight, 0,
        ]);
        const indices = [0, 1, 2, 1, 3, 2, 2, 3, 4];
        bladeGeo.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
        bladeGeo.setIndex(indices);
        bladeGeo.computeVertexNormals();

        // Instanced grass
        const bladeCount = isMobile ? 8000 : 40000;
        const grassMat = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                windStrength: { value: 0.3 },
                grassColorBase: { value: new THREE.Color(0x558B2F) },
                grassColorTip: { value: new THREE.Color(0x9CCC65) },
            },
            vertexShader: `
        uniform float time;
        uniform float windStrength;
        attribute vec3 offset;
        attribute float scale;
        attribute float phase;
        varying float vHeight;
        varying float vColorMix;

        void main() {
          vHeight = position.y;
          vColorMix = scale;

          vec3 pos = position;
          pos *= scale;

          // Wind sway — more at the top of the blade
          float windX = sin(time * 1.5 + offset.x * 0.3 + phase) * windStrength * pos.y;
          float windZ = cos(time * 1.2 + offset.z * 0.4 + phase * 0.7) * windStrength * pos.y * 0.5;
          pos.x += windX;
          pos.z += windZ;

          pos += offset;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
            fragmentShader: `
        uniform vec3 grassColorBase;
        uniform vec3 grassColorTip;
        varying float vHeight;
        varying float vColorMix;

        void main() {
          // Color gradient from base to tip
          vec3 color = mix(grassColorBase, grassColorTip, vHeight * 1.5);
          // Add variation per blade
          color += (vColorMix - 0.8) * 0.1;

          // Simple fake lighting (brighter at top)
          float light = 0.6 + vHeight * 0.4;
          color *= light;

          gl_FragColor = vec4(color, 1.0);
        }
      `,
            side: THREE.DoubleSide,
        });

        const grassMesh = new THREE.InstancedMesh(bladeGeo, grassMat, bladeCount);
        const dummy = new THREE.Object3D();

        // Instance attributes
        const offsets = new Float32Array(bladeCount * 3);
        const scales = new Float32Array(bladeCount);
        const phases = new Float32Array(bladeCount);
        const fieldSize = 14;

        for (let i = 0; i < bladeCount; i++) {
            const x = (Math.random() - 0.5) * fieldSize;
            const z = (Math.random() - 0.5) * fieldSize;
            offsets[i * 3] = x;
            offsets[i * 3 + 1] = 0;
            offsets[i * 3 + 2] = z;
            scales[i] = 0.5 + Math.random() * 1.0;
            phases[i] = Math.random() * Math.PI * 2;

            dummy.position.set(0, 0, 0);
            dummy.updateMatrix();
            grassMesh.setMatrixAt(i, dummy.matrix);
        }

        bladeGeo.setAttribute("offset", new THREE.InstancedBufferAttribute(offsets, 3));
        bladeGeo.setAttribute("scale", new THREE.InstancedBufferAttribute(scales, 1));
        bladeGeo.setAttribute("phase", new THREE.InstancedBufferAttribute(phases, 1));
        scene.add(grassMesh);

        // Sky gradient (upper part of scene)
        const skyGeo = new THREE.PlaneGeometry(40, 20);
        const skyMat = new THREE.ShaderMaterial({
            uniforms: {},
            vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
            fragmentShader: `
        varying vec2 vUv;
        void main() {
          vec3 top = vec3(0.53, 0.81, 0.98);    // Light blue
          vec3 bottom = vec3(0.85, 0.93, 0.98);  // Near-white
          vec3 color = mix(bottom, top, vUv.y);
          gl_FragColor = vec4(color, 1.0);
        }
      `,
            side: THREE.DoubleSide,
        });
        const sky = new THREE.Mesh(skyGeo, skyMat);
        sky.position.set(0, 8, -12);
        scene.add(sky);

        // Animation loop
        let animId: number;
        const clock = new THREE.Clock();

        function animate() {
            animId = requestAnimationFrame(animate);
            const elapsed = clock.getElapsedTime();

            grassMat.uniforms.time.value = elapsed;
            grassMat.uniforms.windStrength.value = 0.25 + Math.sin(elapsed * 0.3) * 0.15;

            renderer.render(scene, camera);
        }
        animate();

        // Resize handler
        const handleResize = () => {
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };
        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", handleResize);
            renderer.dispose();
            bladeGeo.dispose();
            grassMat.dispose();
            groundGeo.dispose();
            groundMat.dispose();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ display: "block" }}
        />
    );
}
