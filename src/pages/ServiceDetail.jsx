import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import StructuredData from '../components/SEO/StructuredData';
import { services } from '../data/services';
import Section from '../components/UI/Section';

const ServiceDetail = () => {
    const { id } = useParams();
    const service = services.find(s => s.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Dienstleistung nicht gefunden</h1>
                    <Link to="/" className="text-accent hover:underline">Zurück zur Startseite</Link>
                </div>
            </div>
        );
    }

    // Service Schema Data
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Winter & Usselmann GbR",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bachstraße 36",
                "addressLocality": "Ratzeburg",
                "postalCode": "23909",
                "addressCountry": "DE"
            }
        },
        "areaServed": [
            { "@type": "State", "name": "Schleswig-Holstein" },
            { "@type": "City", "name": "Hamburg" }
        ]
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Startseite",
                "item": "https://wintuss.de/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Leistungen",
                "item": "https://wintuss.de/#services"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": service.title,
                "item": `https://wintuss.de/leistungen/${service.id}`
            }
        ]
    };

    return (
        <>
            <Helmet>
                <title>{`${service.title} | Ratzeburg, Hamburg & Schleswig-Holstein`}</title>
                <meta name="description" content={`${service.hook} ${service.description} Ihr Partner für ${service.title} in Ratzeburg, Hamburg und ganz Schleswig-Holstein.`} />
                <link rel="canonical" href={`https://wintuss.de/leistungen/${service.id}`} />

                {/* OG Tags */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://wintuss.de/leistungen/${service.id}`} />
                <meta property="og:title" content={`${service.title} | Ratzeburg, Hamburg & SH`} />
                <meta property="og:description" content={service.subtitle} />
                <meta property="og:image" content={`https://wintuss.de${service.heroImage}`} />
            </Helmet>

            <StructuredData data={serviceSchema} />
            <StructuredData data={breadcrumbSchema} />

            {/* Hero */}
            <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-slate-900/70"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6">
                        Unsere Leistungen
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{service.title}</h1>
                    <p className="text-xl text-slate-200 font-light max-w-2xl mx-auto">{service.subtitle}</p>
                </div>
            </div>

            {/* Hook & Description */}
            <Section className="bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                                {service.hook}
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                {service.description}
                            </p>
                            <div className="flex flex-col gap-4">
                                {service.benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="text-slate-700 font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img src={service.heroImage} alt="Detail" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                                <p className="text-accent font-serif italic text-xl">&quot;Qualität ist kein Zufall, sondern das Ergebnis von Erfahrung.&quot;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Process Steps */}
            <Section className="bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">So gehen wir vor</h2>
                        <p className="text-slate-500 mt-2">Transparenz in jedem Schritt</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {service.process.map((step, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150"></div>
                                <span className="text-5xl font-bold text-slate-100 absolute top-4 right-4">{index + 1}</span>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{step.title}</h3>
                                <p className="text-slate-600 text-sm relative z-10">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section className="bg-slate-900 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Interesse an {service.title}?</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-10">
                        Lassen Sie uns über Ihr Projekt sprechen. Wir erstellen Ihnen gerne ein unverbindliches Angebot.
                    </p>
                    <a href="/#contact" className="inline-block px-8 py-4 bg-accent text-white font-bold rounded-full shadow-lg hover:bg-amber-700 transition-colors">
                        Jetzt anfragen
                    </a>
                </div>
            </Section>
        </>
    );
};

export default ServiceDetail;
