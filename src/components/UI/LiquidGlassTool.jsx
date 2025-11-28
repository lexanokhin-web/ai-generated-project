import React from 'react';
import { motion } from 'framer-motion';

const LiquidGlassTool = ({ Icon, className = '', delay = 0, duration = 4, size = 80 }) => {
    return (
        <motion.div
            className={`absolute pointer-events-none z-0 ${className}`}
            initial={{ y: 0, rotate: 0, scale: 1 }}
            animate={{
                y: [-15, 15, -15],
                rotate: [-8, 8, -8],
                scale: [1, 1.05, 1],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
        >
            <div
                className="relative p-3 rounded-3xl backdrop-blur-[2px] bg-white/[0.01] border border-white/15 shadow-xl"
                style={{
                    boxShadow: '0 4px 24px 0 rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.005) 100%)',
                }}
            >
                <Icon
                    size={size}
                    strokeWidth={0.8}
                    className="text-white/50"
                />
                {/* Subtle light reflection */}
                <div className="absolute top-0 left-0 right-0 h-1/4 rounded-t-3xl bg-gradient-to-b from-white/20 to-transparent"></div>
                <div className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white/25 blur-sm"></div>
            </div>
        </motion.div>
    );
};

export default LiquidGlassTool;
