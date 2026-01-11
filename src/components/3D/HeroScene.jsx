import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';

const Particles = ({ isMobile }) => {
    const ref = useRef();

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
            ref.current.rotation.x = state.clock.getElapsedTime() * 0.02;
        }
    });

    return (
        <group ref={ref}>
            <Stars
                radius={100}
                depth={50}
                count={isMobile ? 1500 : 5000}
                factor={4}
                saturation={0}
                fade
                speed={1}
            />
        </group>
    );
};

const HeroScene = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 1] }}
                gl={{
                    antialias: !isMobile,
                    powerPreference: "high-performance",
                    alpha: true
                }}
                dpr={isMobile ? [1, 1.5] : [1, 2]}
            >
                <ambientLight intensity={0.5} />
                <Float
                    speed={isMobile ? 1 : 2}
                    rotationIntensity={isMobile ? 0.2 : 0.5}
                    floatIntensity={isMobile ? 0.2 : 0.5}
                >
                    <Particles isMobile={isMobile} />
                </Float>
            </Canvas>
        </div>
    );
};

export default HeroScene;
