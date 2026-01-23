import React, { memo, useEffect } from 'react';
import { Calendar, Trophy, Heart } from 'lucide-react';
import Section from '../UI/Section';

// Statische Statistikdaten
const STATS = [
    { target: 15, label: "Jahre Erfahrung", Icon: Calendar, color: "text-accent" },
    { target: 700, label: "Projekte in Lübeck & SH", Icon: Trophy, color: "text-blue-400" },
    { target: 90, label: "Kundenzufriedenheit", Icon: Heart, color: "text-rose-400", prefix: "Über ", suffix: "%" }
];

const StatsSection = memo(() => {
    // Counter animation
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = +(counter.getAttribute('data-target') || 0);
                    const duration = 2000;
                    const increment = target / (duration / 16);

                    let current = 0;
                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            counter.innerText = Math.ceil(current).toString();
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.innerText = target.toString();
                        }
                    };
                    updateCounter();
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.counter').forEach((counter) => {
            observer.observe(counter);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <Section className="bg-slate-900 overflow-hidden relative" id="stats-section">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em]">Qualität & Handwerk</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10">
                    {STATS.map((stat, idx) => (
                        <div
                            key={idx}
                            className="group p-6 md:p-10 rounded-2xl md:rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Glow Effect - nur auf Desktop */}
                            <div className="absolute -top-20 -left-20 w-40 h-40 bg-accent/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden md:block" />

                            <div className="flex flex-col items-center relative z-10">
                                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 border border-white/10`}>
                                    <stat.Icon className={`w-6 h-6 md:w-8 md:h-8 ${stat.color}`} />
                                </div>
                                <div className="text-4xl md:text-6xl font-black text-white mb-2 md:mb-4 flex items-baseline justify-center tracking-tighter">
                                    {stat.prefix && (
                                        <span className="text-accent text-xl md:text-2xl font-bold mr-2 tracking-normal self-center">
                                            {stat.prefix}
                                        </span>
                                    )}
                                    <span className="counter" data-target={stat.target}>0</span>
                                    <span className="text-accent">{stat.suffix || "+"}</span>
                                </div>
                                <p className="text-slate-400 uppercase tracking-[0.15em] md:tracking-[0.2em] text-[0.65rem] md:text-xs font-bold text-center">
                                    {stat.label}
                                </p>
                            </div>

                            {/* Bottom Accent Line */}
                            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent w-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
});

StatsSection.displayName = 'StatsSection';

export default StatsSection;
