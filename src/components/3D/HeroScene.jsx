import React, { useRef, useState, useEffect, memo, lazy, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';

// Мемоизированный компонент частиц для предотвращения лишних перерисовок
const Particles = memo(({ count }) => {
    const ref = useRef();

    useFrame((state) => {
        if (ref.current) {
            // Замедленная анимация для экономии ресурсов
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
                speed={0.5} // Замедлена скорость для плавности
            />
        </group>
    );
});

Particles.displayName = 'Particles';

// Основной компонент сцены
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

    // Отслеживаем видимость для остановки рендера когда не виден
    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0 }
        );
        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    // На мобильных устройствах не рендерим 3D — экономия батареи и CPU
    if (isMobile) {
        return (
            <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-slate-800 to-slate-900">
                {/* Простой градиент вместо 3D на мобильных */}
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
                        antialias: false, // Отключаем антиалиасинг для производительности
                        powerPreference: "high-performance",
                        alpha: true,
                        stencil: false,
                        depth: false,
                    }}
                    dpr={[1, 1.5]} // Ограничиваем DPR
                    frameloop="demand" // Рендер только при изменениях
                    performance={{ min: 0.5 }} // Адаптивная производительность
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

