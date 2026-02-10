import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Alexthegemini - Music Producer & Artist'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#1A1A1A', // Charcoal
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    color: 'white',
                    textTransform: 'uppercase',
                    letterSpacing: '-0.05em',
                }}
            >
                <div style={{ display: 'flex', fontSize: 160, fontWeight: 900, lineHeight: 0.8 }}>
                    ALEX
                </div>
                <div style={{ display: 'flex', fontSize: 160, fontWeight: 900, lineHeight: 0.8, opacity: 0.5 }}>
                    THE
                </div>
                <div style={{ display: 'flex', fontSize: 160, fontWeight: 900, lineHeight: 0.8 }}>
                    GEMINI
                </div>
                <div style={{ position: 'absolute', bottom: 40, fontSize: 24, letterSpacing: '0.2em', opacity: 0.6 }}>
                    Lagos, Nigeria • Producer
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
