import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';

const Particles = () => {
    const ref = useRef();

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
            ref.current.rotation.x = state.clock.getElapsedTime() * 0.02;
        }
    });

    return (
        <group ref={ref}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </group>
    );
};

const HeroScene = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <ambientLight intensity={0.5} />
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <Particles />
                </Float>
            </Canvas>
        </div>
    );
};

export default HeroScene;
