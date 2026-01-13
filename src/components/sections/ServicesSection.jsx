import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Hammer, Wrench } from 'lucide-react';
import Section from '../UI/Section';
import LiquidGlassTool from '../UI/LiquidGlassTool';
import { services } from '../../data/services';

const ServicesSection = memo(() => {
    return (
        <Section id="services" className="bg-slate-900">
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/image-7.webp"
                    className="w-full h-full object-cover opacity-30"
                    alt="Background"
                    loading="lazy"
                    decoding="async"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
                    <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">Unsere Expertise</h2>
                    <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8">
                        Alles für Ihr <span className="font-serif italic text-accent">perfektes Zuhause</span>
                    </h3>
                    <p className="text-slate-400 text-base md:text-lg px-4 sm:px-0">
                        Von kleinen Reparaturen bis zur Kernsanierung – wir sind Ihre Experten in Schleswig-Holstein.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <Link
                            to={`/leistungen/${service.id}`}
                            key={service.id}
                            className="group relative p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-accent/20"
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                        >
                            <div className="h-40 md:h-48 mb-4 md:mb-6 overflow-hidden rounded-t-2xl -mt-6 md:-mt-8 -mx-6 md:-mx-8">
                                <img
                                    src={service.heroImage}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    alt={service.title}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                            <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{service.title}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{service.description}</p>
                        </Link>
                    ))}
                </div>

                {/* Liquid Glass Tools — только на десктопах */}
                <LiquidGlassTool Icon={Hammer} className="top-20 left-10 hidden lg:block" size={65} duration={7} />
                <LiquidGlassTool Icon={Wrench} className="bottom-20 right-10 hidden lg:block" size={60} delay={1.5} duration={6} />
            </div>
        </Section>
    );
});

ServicesSection.displayName = 'ServicesSection';

export default ServicesSection;
