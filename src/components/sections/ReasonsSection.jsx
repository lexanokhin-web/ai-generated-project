import React, { memo } from 'react';
import { ArrowRight, Hammer } from 'lucide-react';
import Section from '../UI/Section';
import AnimatedBackground from '../UI/AnimatedBackground';

// Statische Vorteilsdaten
const REASONS = [
    {
        id: "01",
        title: "Pünktlich und termingerecht",
        img: "/images/image-14.webp",
        text: "Wir wissen, wie wichtig Ihr Einzugstermin ist. Dank präziser Planung garantieren wir Ihnen eine termingerechte Fertigstellung."
    },
    {
        id: "02",
        title: "Absolute Kostentransparenz",
        img: "/images/image-15.webp",
        text: "Bei uns gibt es keine versteckten Kosten. Sie erhalten ein detailliertes Festpreisangebot. Maximale Planungssicherheit für Ihr Budget."
    },
    {
        id: "03",
        title: "Ein Ansprechpartner",
        img: "/images/image-16.webp",
        text: "Schluss mit dem Telefon-Marathon. Wir koordinieren alle Gewerke komplett für Sie. Sie kommunizieren nur mit uns."
    },
    {
        id: "04",
        title: "Qualität, die bleibt",
        img: "/images/image-17.webp",
        text: "Wir verwenden nur Materialien, die wir auch in unserem eigenen Zuhause verbauen würden. Vom ersten Pinselstrich bis zum fertigen Objekt."
    }
];

const ReasonsSection = memo(() => {
    return (
        <Section className="bg-slate-50 overflow-hidden relative border-t border-slate-100">
            <AnimatedBackground variant="blobs" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 md:mb-32" data-aos="fade-up">
                    <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4">Ihre Vorteile</h2>
                    <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-900">
                        Winter & Usselmann <span className="font-serif italic text-accent text-3xl md:text-5xl border-b-4 border-accent/20">Handwerk & Qualität</span>
                    </h3>
                    <p className="mt-4 text-slate-500 text-base md:text-xl max-w-2xl mx-auto px-4 sm:px-0">
                        Weil wir Handwerk lieben, Service leben und Räume schaffen, in denen man sich wirklich zu Hause fühlt.
                    </p>
                </div>

                <div className="space-y-12 md:space-y-16">
                    {REASONS.map((reason, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6 md:gap-8 lg:gap-16`}
                        >
                            {/* Image */}
                            <div
                                className="w-full md:w-1/2 group relative"
                                data-aos={idx % 2 === 1 ? "fade-left" : "fade-right"}
                                data-aos-duration="800"
                            >
                                <div className="absolute -inset-4 bg-accent/10 rounded-2xl md:rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />
                                <div className="relative h-[250px] sm:h-[300px] lg:h-[400px] rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl">
                                    <img
                                        src={reason.img}
                                        alt={reason.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                                    <div className="absolute top-6 left-6 md:top-10 md:left-10 text-5xl md:text-7xl font-black text-white/20 select-none">
                                        {reason.id}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div
                                className="w-full md:w-1/2"
                                data-aos={idx % 2 === 1 ? "fade-right" : "fade-left"}
                                data-aos-duration="800"
                            >
                                <div className="glass-panel p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-[2.5rem] border-l-[1px] border-white/40 bg-white/40 shadow-xl relative overflow-hidden group">
                                    <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-10 transition-opacity hidden md:block">
                                        <Hammer className="w-24 md:w-32 h-24 md:h-32 text-accent" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
                                        {reason.title}
                                    </h3>
                                    <p className="text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed font-light mb-6 md:mb-8">
                                        {reason.text}
                                    </p>
                                    <div className="flex items-center text-accent font-bold text-xs md:text-sm tracking-widest uppercase">
                                        Exzellenz garantiert
                                        <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
});

ReasonsSection.displayName = 'ReasonsSection';

export default ReasonsSection;
