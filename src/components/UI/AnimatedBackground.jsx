import React, { memo, useEffect, useState } from 'react';

// CSS-анимации вместо Framer Motion для лучшей производительности
const AnimatedBackground = memo(({ variant = 'blobs', className = '' }) => {
    const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);
    const [prefersReducedMotion] = useState(() => typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // На мобильных или при prefers-reduced-motion — статический фон
    if (isMobile || prefersReducedMotion) {
        return (
            <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-3xl" />
                <div className="absolute top-[30%] -right-[10%] w-[35%] h-[35%] bg-blue-400/5 rounded-full blur-3xl" />
            </div>
        );
    }

    if (variant === 'blobs') {
        return (
            <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-accent/15 rounded-full blur-3xl animate-blob" />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-blue-500/15 rounded-full blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute bottom-[10%] left-[20%] w-[35%] h-[35%] bg-purple-500/15 rounded-full blur-3xl animate-blob animation-delay-4000" />
            </div>
        );
    }

    if (variant === 'lines') {
        return (
            <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
                <svg className="absolute w-full h-full opacity-[0.08]">
                    <pattern id="pattern-lines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-slate-900" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#pattern-lines)" />
                </svg>
            </div>
        );
    }

    if (variant === 'modern-aura') {
        return (
            <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 bg-white ${className}`}>
                {/* Статичный noise вместо внешней загрузки */}
                <div
                    className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                    }}
                />

                {/* CSS-анимированные blob-элементы */}
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-accent/8 rounded-full blur-[100px] animate-aura" />
                <div className="absolute top-[30%] -right-[10%] w-[40%] h-[40%] bg-blue-400/5 rounded-full blur-[120px] animate-aura animation-delay-2000" />
                <div className="absolute -bottom-[10%] left-[20%] w-[35%] h-[35%] bg-accent/5 rounded-full blur-[80px] animate-aura animation-delay-4000" />

                {/* Лёгкий overlay вместо тяжёлого backdrop-blur */}
                <div className="absolute inset-0 bg-white/30" />
            </div>
        );
    }

    return null;
});

AnimatedBackground.displayName = 'AnimatedBackground';

export default AnimatedBackground;

