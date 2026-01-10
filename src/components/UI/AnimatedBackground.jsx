import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = ({ variant = 'blobs', className = '' }) => {
    if (variant === 'blobs') {
        return (
            <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
                <motion.div
                    className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-blue-500/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 100, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
                <motion.div
                    className="absolute bottom-[10%] left-[20%] w-[35%] h-[35%] bg-purple-500/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 5
                    }}
                />
            </div>
        );
    }

    if (variant === 'lines') {
        return (
            <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
                <svg className="absolute w-full h-full opacity-[0.1]">
                    <pattern id="pattern-lines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="2" fill="none" className="text-slate-900" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#pattern-lines)" />
                </svg>
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"
                    animate={{
                        opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>
        );
    }

    if (variant === 'modern-aura') {
        const id = React.useId().replace(/:/g, '');
        return (
            <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 bg-white ${className}`}>
                {/* Noise Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
                    style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }}></div>

                {/* Drifting Aura Blobs */}
                <motion.div
                    className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-accent/10 rounded-full blur-[120px]"
                    animate={{
                        x: [0, 50, -30, 0],
                        y: [0, 80, 40, 0],
                        scale: [1, 1.1, 0.9, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div
                    className="absolute top-[30%] -right-[10%] w-[50%] h-[50%] bg-blue-400/5 rounded-full blur-[140px]"
                    animate={{
                        x: [0, -100, -50, 0],
                        y: [0, 50, 100, 0],
                        scale: [1, 1.2, 1, 1],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 2
                    }}
                />
                <motion.div
                    className="absolute -bottom-[10%] left-[20%] w-[45%] h-[45%] bg-accent/5 rounded-full blur-[100px]"
                    animate={{
                        x: [0, 70, 0],
                        y: [0, -60, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 5
                    }}
                />

                {/* Glass Frost Overlay */}
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
            </div>
        );
    }

    return null;
};

export default AnimatedBackground;
