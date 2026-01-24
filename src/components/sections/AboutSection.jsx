import React, { memo } from 'react';
import { Hammer } from 'lucide-react';
import Section from '../UI/Section';
import AnimatedBackground from '../UI/AnimatedBackground';

const AboutSection = memo(() => {
    return (
        <Section id="about" className="bg-slate-50/50 overflow-hidden relative">
            <AnimatedBackground variant="modern-aura" className="opacity-40" />
            <div className="absolute -top-24 -right-24 text-[12rem] md:text-[20rem] font-black text-slate-100 select-none pointer-events-none z-0">W&U</div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-center">
                    {/* Text Content */}
                    <div className="w-full lg:w-3/5 lg:pr-12 z-20" data-aos="fade-right">
                        <div className="glass-panel p-6 md:p-8 lg:p-16 rounded-2xl md:rounded-[2.5rem] shadow-2xl border-l-[1px] border-white/40 bg-white/60 relative">
                            <div className="absolute top-0 right-0 p-6 md:p-8 opacity-10 hidden md:block">
                                <Hammer className="w-16 md:w-24 h-16 md:h-24 text-accent" />
                            </div>

                            <h2 className="text-sm font-bold text-accent uppercase tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-4">
                                Über W&U Lübeck
                            </h2>
                            <h3 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 md:mb-8 leading-[1.1]">
                                Wir bauen nicht nur um.<br />
                                <span className="font-serif italic text-accent font-normal">Wir schaffen Lebensqualität.</span>
                            </h3>

                            <div className="space-y-4 md:space-y-6 text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed font-light">
                                <p>
                                    Kennen Sie das Gefühl? Sie lieben Ihr Zuhause in <strong>Lübeck</strong>, <strong>Hamburg</strong> und Region, aber es passt nicht mehr ganz zu Ihrem Leben.
                                    Das Bad ist veraltet, der Boden knarrt, oder Sie brauchen einfach mehr Platz.
                                </p>
                                <p>
                                    Eine Renovierung ist oft mit Ängsten verbunden: Lärm, Dreck, unzuverlässige Handwerker.
                                    Wir treten an, um das zu ändern. Als Ihr lokaler Partner für <strong>Renovierung in Lübeck</strong> und <strong>Schleswig-Holstein</strong> garantieren wir Ihnen einen reibungslosen Ablauf.
                                </p>

                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 py-4 md:py-6 border-y border-slate-200/50 my-6 md:my-8">
                                    <img src="/images/logonew.webp" alt="Unterschrift Michael Winter" className="h-12 md:h-16 opacity-80" loading="lazy" decoding="async" />
                                    <div className="h-px sm:h-12 w-full sm:w-px bg-slate-200" />
                                    <div>
                                        <p className="font-bold text-slate-900">Michael Winter</p>
                                        <p className="text-sm text-accent">Geschäftsführer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Composition */}
                    <div className="w-full lg:w-2/5 relative lg:-ml-20 z-10 mt-8 lg:mt-0">
                        <div className="relative group" data-aos="zoom-in">
                            <div className="absolute -inset-4 bg-accent/20 rounded-2xl md:rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            <div className="relative z-10 rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white">
                                <img
                                    src="/images/image-5.webp"
                                    alt="Handwerkskunst"
                                    className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-transparent" />
                            </div>

                            {/* Floating Sticker - MD+ only */}
                            <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-28 h-28 md:w-40 md:h-40 bg-accent rounded-full flex items-center justify-center text-white font-bold text-center p-4 md:p-6 shadow-2xl z-20 rotate-12 group-hover:rotate-0 transition-transform duration-500 hidden sm:flex">
                                <div className="text-xs md:text-sm uppercase tracking-widest leading-tight">
                                    Meister<br />Qualität<br /><span className="text-[0.5rem] md:text-[0.6rem] font-medium opacity-80">Lübeck, HH & SH</span>
                                </div>
                            </div>

                            {/* Secondary Image - XL only */}
                            <div className="absolute -bottom-16 -left-16 w-2/3 z-30 rounded-3xl overflow-hidden shadow-2xl border-4 border-white hidden xl:block" data-aos="fade-up" data-aos-delay="400">
                                <img src="/images/image-6.webp" alt="Detail" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;
