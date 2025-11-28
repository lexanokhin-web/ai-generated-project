import React from 'react';
import { motion } from 'framer-motion';

const FloatingTool = ({ Icon, className = '', delay = 0, duration = 4, size = 48, color = 'text-accent/20' }) => {
    return (
        <motion.div
            className={`absolute pointer-events-none z-0 ${className} ${color}`}
            initial={{ y: 0, rotate: 0 }}
            animate={{
                y: [-10, 10, -10],
                rotate: [-5, 5, -5],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
        >
            <Icon size={size} strokeWidth={1.5} />
        </motion.div>
    );
};

export default FloatingTool;
