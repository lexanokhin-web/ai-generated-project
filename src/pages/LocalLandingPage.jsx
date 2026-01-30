import React, { useEffect, memo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Section from '../components/UI/Section';
import { LocalProject, ServicesSection, ReviewsSection, FAQSection, CalculatorSection } from '../components/sections';
import { localPagesData } from '../data/localPages';
import StructuredData from '../components/SEO/StructuredData';
import NotFound from './NotFound';

const LocalLandingPage = memo(() => {
    const { slug } = useParams();
    const data = localPagesData[slug];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!data) {
        return <NotFound />;
    }

    // Local Business Schema for the specific city/service
    const localSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": data.title,
        "description": data.subtitle,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Winter & Usselmann GbR",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jägerstraße 24a",
                "addressLocality": "Ratzeburg",
                "postalCode": "23909",
                "addressCountry": "DE"
            }
        },
        "areaServed": {
            "@type": "City",
            "name": data.city
        }
    };

    return (
        <>
            <Helmet>
                <title>{data.metaTitle}</title>
                <meta name="description" content={data.metaDesc} />
                <link rel="canonical" href={`https://www.wintuss.de/${data.id}`} />
            </Helmet>

            <StructuredData data={localSchema} />

            {/* Local Hero Section */}
            <div className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <img
                        src={data.heroImage}
                        alt={`${data.service} in ${data.city}`}
                        className="w-full h-full object-cover opacity-40 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-accent text-white text-xs font-bold uppercase tracking-widest mb-6">
                            Überregionaler Partner in {data.city}
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            {data.title}
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light">
                            {data.subtitle}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="/#contact" className="px-8 py-4 bg-accent text-white font-bold rounded-full shadow-lg shadow-accent/20 hover:bg-amber-700 transition-all transform hover:-translate-y-0.5">
                                Jetzt Angebot anfragen
                            </a>
                            <a href="/#services" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-white hover:text-slate-900 transition-all">
                                Unsere Leistungen
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Local About Content */}
            <Section className="bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">Regional & Kompetent</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">
                        Ihr Partner für {data.service} in <span className="text-accent font-serif italic text-4xl md:text-6xl">{data.city}</span>
                    </h3>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                        {data.content}
                    </p>
                </div>
            </Section>

            {/* Featured Local Projects */}
            <Section className="bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 md:mb-24">
                        <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">Erfolgsgeschichten</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-900">
                            Projekte in <span className="text-accent italic font-serif">Ihrer Nähe</span>
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
                        {data.projects.map((project, idx) => (
                            <LocalProject key={idx} project={project} />
                        ))}
                    </div>
                </div>
            </Section>

            {/* Standard Service components for authority */}
            <ServicesSection />
            <ReviewsSection />
            <FAQSection />
            <CalculatorSection />

            {/* Final CTA */}
            <Section className="bg-slate-900 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-amber-500 to-accent"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Bereit für Ihr Projekt in <span className="text-accent italic font-serif">{data.city}</span>?
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
                        Lassen Sie uns gemeinsam etwas Großartiges schaffen. Wir freuen uns auf Ihre Anfrage und eine erfolgreiche Zusammenarbeit.
                    </p>
                    <a href="/#contact" className="inline-block px-10 py-4 bg-accent text-white font-bold rounded-full shadow-xl hover:bg-amber-700 transition-all scale-110 hover:scale-115">
                        Kostenlose Erstberatung anfordern
                    </a>
                </div>
            </Section>
        </>
    );
});

LocalLandingPage.displayName = 'LocalLandingPage';

export default LocalLandingPage;
