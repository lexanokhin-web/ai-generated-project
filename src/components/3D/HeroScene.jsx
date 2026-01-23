import React, { useRef, useState, useEffect, memo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';

// Memoisierte Partikel-Komponente zur Vermeidung unnötiger Render-Vorgänge
const Particles = memo(({ count }) => {
    const ref = useRef();

    useFrame((state) => {
        if (ref.current) {
            // Verlangsamte Animation zur Ressourceneinsparung
            ref.current.rotation.y = state.clock.getElapsedTime() * 0.03;
            ref.current.rotation.x = state.clock.getElapsedTime() * 0.01;
        }
    });

    return (
        <group ref={ref}>
            <Stars
                radius={100}
                depth={50}
                count={count}
                factor={4}
                saturation={0}
                fade
                speed={0.5} // Verlangsamte Geschwindigkeit für Laufruhe
            />
        </group>
    );
});

Particles.displayName = 'Particles';

// Hauptkomponente der Szene
const HeroScene = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const containerRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Verfolgung der Sichtbarkeit, um den Rendervorgang zu stoppen, wenn nicht sichtbar
    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0 }
        );
        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    // Auf Mobilgeräten kein 3D-Rendering — Batterie- und CPU-Einsparung
    if (isMobile) {
        return (
            <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-slate-800 to-slate-900">
                {/* Einfacher Gradient anstelle von 3D auf Mobilgeräten */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent"></div>
            </div>
        );
    }

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none">
            {isVisible && (
                <Canvas
                    camera={{ position: [0, 0, 1] }}
                    gl={{
                        antialias: false, // Anti-Aliasing für die Leistung deaktivieren
                        powerPreference: "high-performance",
                        alpha: true,
                        stencil: false,
                        depth: false,
                    }}
                    dpr={[1, 1.5]} // Limit DPR
                    frameloop="demand" // Rendering nur bei Änderungen
                    performance={{ min: 0.5 }} // Adaptive Leistung
                >
                    <ambientLight intensity={0.4} />
                    <Float
                        speed={1}
                        rotationIntensity={0.3}
                        floatIntensity={0.3}
                    >
                        <Particles count={1500} />
                    </Float>
                </Canvas>
            )}
        </div>
    );
};

export default memo(HeroScene);

