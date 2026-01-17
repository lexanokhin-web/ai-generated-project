import React, { memo } from 'react';
import { ArrowRight } from 'lucide-react';
import HeroScene from '../3D/HeroScene';
import { useModal } from '../../context/ModalContext';

const HeroSection = memo(() => {
    const { openContactModal } = useModal();
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <HeroScene />
                <img
                    src="/images/image-1.webp"
                    alt="Traumhaus Renovierung Lübeck"
                    className="w-full h-full object-cover animate-subtle-zoom opacity-50"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                />
                <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-20">
                <div className="max-w-4xl mx-auto text-center">
                    <span
                        className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6"
                        data-aos="fade-down"
                    >
                        Handwerkskunst in Lübeck, Hamburg & SH
                    </span>
                    <h1
                        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6 md:mb-8"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <span className="block mb-2">Haus & Wohnungs-</span>
                        <span className="font-serif italic text-accent">Renovierung & Sanierung</span>.
                    </h1>
                    <p
                        className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 md:mb-10 max-w-2xl mx-auto font-light px-4 sm:px-0"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Von der exklusiven Badsanierung bis zum trockenen Innenausbau: Winter & Usselmann steht für höchste handwerkliche Qualität.
                    </p>

                    <div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <button
                            onClick={openContactModal}
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-accent text-white font-bold rounded-full shadow-[0_0_20px_rgba(217,119,6,0.4)] hover:shadow-[0_0_30px_rgba(217,119,6,0.6)] hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                        >
                            Kostenloses Angebot anfordern
                        </button>
                        <a
                            href="#services"
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 group flex items-center justify-center gap-2 text-sm sm:text-base"
                        >
                            <span>Unsere Leistungen</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Floating Glass Card - только на десктопах */}
            <div className="absolute bottom-10 right-10 hidden xl:block" data-aos="fade-left" data-aos-delay="500">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl max-w-xs text-white">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="flex -space-x-2">
                            <img src="/images/image-2.webp" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Zufriedener Kunde Renovierung Lübeck" loading="lazy" decoding="async" />
                            <img src="/images/image-3.webp" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Kunde Badsanierung Schleswig-Holstein" loading="lazy" decoding="async" />
                        </div>
                        <div className="flex text-accent">★★★★★</div>
                    </div>
                    <p className="text-sm font-light">&quot;Endlich Handwerker aus Norddeutschland, die mitdenken. Unser Bad in Hamburg ist ein Traum geworden!&quot;</p>
                </div>
            </div>
        </section>
    );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
