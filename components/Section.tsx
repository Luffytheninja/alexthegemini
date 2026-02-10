import { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
    noPadding?: boolean;
    id?: string;
}

export default function Section({ children, className = '', noPadding = false, id }: SectionProps) {
    return (
        <section id={id} className={`${noPadding ? '' : 'section-padding container-padding'} ${className}`}>
            <div className="container-max">
                {children}
            </div>
        </section>
    );
}
