import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectGalleryModal = ({ isOpen, onClose, images, initialIndex = 0 }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(initialIndex);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen, initialIndex]);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, handleNext, handlePrev, onClose]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: isMobile ? 0.1 : 0.3 }}
                className={`fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/98 ${!isMobile ? 'backdrop-blur-xl' : ''} p-4 md:p-10 touch-none`}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-[120] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20 group"
                >
                    <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                </button>

                {/* Counters */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 z-[110] px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm font-medium">
                    <span className="text-white">{currentIndex + 1}</span> / {images.length}
                </div>

                {/* Main Content */}
                <div className="relative w-full h-full flex items-center justify-center max-w-7xl overflow-hidden">
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 md:-left-20 z-[110] p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10 hidden md:block"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>

                    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
                        <motion.div
                            key={currentIndex}
                            drag={isMobile ? "x" : false}
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.2}
                            onDragEnd={(e, { offset }) => {
                                const swipe = Math.abs(offset.x) > 50;
                                if (swipe) {
                                    if (offset.x > 0) handlePrev();
                                    else handleNext();
                                }
                            }}
                            initial={isMobile ? { opacity: 0 } : { opacity: 0, scale: 0.9, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={isMobile ? { opacity: 0 } : { opacity: 0, scale: 0.9, x: -20 }}
                            transition={isMobile ? { duration: 0.15 } : { type: "spring", damping: 25, stiffness: 200 }}
                            className={`relative w-full h-[70vh] md:h-[80vh] rounded-3xl overflow-hidden ${!isMobile ? 'shadow-2xl' : ''} border border-white/10 cursor-grab active:cursor-grabbing touch-pan-y`}
                        >
                            <img
                                src={images[currentIndex].img}
                                alt={images[currentIndex].title}
                                className="w-full h-full object-cover pointer-events-none"
                            />
                            {/* Title Overlay */}
                            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none">
                                <div className="max-w-3xl">
                                    <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-2">{images[currentIndex].cat}</p>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{images[currentIndex].title}</h2>
                                    <p className="text-white/60 text-lg font-light leading-relaxed">{images[currentIndex].desc || "Individuelle Handwerksarbeit in höchster Präзision."}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 md:-right-20 z-[110] p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10 hidden md:block"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>
                </div>

                {/* Thumbnails */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 overflow-x-auto p-2 max-w-[90vw] no-scrollbar">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${currentIndex === idx ? 'border-accent scale-110' : 'border-transparent opacity-40 hover:opacity-100'
                                }`}
                        >
                            <img src={img.img} className="w-full h-full object-cover" alt="thumbnail" loading="lazy" />
                        </button>
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectGalleryModal;
