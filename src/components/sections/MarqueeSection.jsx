import React, { memo } from 'react';

// Statisches Array der Marken — wird nicht bei jedem Rendern neu erstellt
const BRANDS = [
    "BOSCH Professional", "MAKITA", "KNAUF", "STO", "BRILLUX", "WÜRTH", "FESTOOL",
    "METABO", "LIEBHERR", "GROHE", "VIESSMANN", "SCHÜCO", "HANSA", "CAPAROL", "WEBER"
];

const MarqueeSection = memo(() => {
    return (
        <div className="bg-white py-8 md:py-12 border-y border-slate-100 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />

            <p className="text-center text-slate-400 text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-6 md:mb-8">
                Wir vertrauen auf deutsche Markenqualität
            </p>

            <div className="relative w-full overflow-hidden">
                <div className="animate-marquee whitespace-nowrap flex gap-10 md:gap-20 items-center w-max pr-10 md:pr-20">
                    {/* Первый набор */}
                    {BRANDS.map((brand, i) => (
                        <div key={i} className="flex items-center gap-4 group">
                            <span className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-200 group-hover:text-accent transition-colors duration-500 cursor-default select-none tracking-tighter">
                                {brand}
                            </span>
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent/20 group-hover:bg-accent transition-colors" />
                        </div>
                    ))}
                    {/* Дубликат для бесшовной прокрутки */}
                    {BRANDS.map((brand, i) => (
                        <div key={`dup-${i}`} className="flex items-center gap-4 group">
                            <span className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-200 group-hover:text-accent transition-colors duration-500 cursor-default select-none tracking-tighter">
                                {brand}
                            </span>
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent/20 group-hover:bg-accent transition-colors" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
});

MarqueeSection.displayName = 'MarqueeSection';

export default MarqueeSection;
