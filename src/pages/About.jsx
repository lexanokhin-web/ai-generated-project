import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/UI/Section';
import { Link } from 'react-router-dom';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Über Uns | Renovierung Hamburg & Schleswig-Holstein</title>
                <meta name="description" content="Erfahren Sie mehr über Winter & Usselmann GbR - Ihr Partner für Renovierung und Sanierung in Lübeck, Hamburg und Umgebung." />
                <link rel="canonical" href="https://www.wintuss.de/uber-uns" />

                {/* OG Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.wintuss.de/uber-uns" />
                <meta property="og:title" content="Über Uns | Renovierung Hamburg & Schleswig-Holstein" />
                <meta property="og:description" content="Erfahren Sie mehr über unser Team und unsere Qualitätsphilosophie." />
                <meta property="og:image" content="https://www.wintuss.de/images/image-1.webp" />
                <meta property="og:locale" content="de_DE" />
                <meta property="og:site_name" content="Winter & Usselmann GbR" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.wintuss.de/uber-uns" />
                <meta property="twitter:title" content="Über Uns | Renovierung Hamburg & Schleswig-Holstein" />
                <meta property="twitter:description" content="Erfahren Sie mehr über Winter & Usselmann GbR - Ihr Partner für Renovierung und Sanierung." />
                <meta property="twitter:image" content="https://www.wintuss.de/images/image-1.webp" />
            </Helmet>

            {/* Hero Section */}
            <div className="relative py-24 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Tradition trifft <span className="text-accent font-serif italic">Moderne</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Wir sind Ihr junges, dynamisches Handwerksunternehmen mit Fokus auf Lübeck.
                        Qualität, Zuverlässigkeit und frische Ideen sind unser Antrieb.
                    </p>
                </div>
            </div>

            {/* Story Section */}
            <Section className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-accent/20 rounded-2xl rotate-3"></div>
                        <img
                            src="/images/image-13.webp"
                            alt="Unser Team bei der Arbeit"
                            className="relative rounded-2xl shadow-xl w-full object-cover h-[500px]"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Unsere <span className="text-accent">Geschichte</span>
                        </h2>
                        <div className="space-y-4 text-lg text-slate-600">
                            <p>
                                Gegründet mit der Vision, das Handwerk in Lübeck neu zu definieren, haben wir uns als Winter & Usselmann GbR schnell einen Namen gemacht. Wir glauben daran, dass Handwerk mehr ist als nur Arbeit – es ist die Gestaltung von Lebensräumen.
                            </p>
                            <p>
                                Als eingespieltes Team verbinden wir traditionelle Handwerkskunst mit modernen Techniken und Materialien. Egal ob Altbausanierung oder moderne Raumgestaltung – wir bringen Ihre Visionen zum Leben.
                            </p>
                            <p>
                                Unser Anspruch ist es, nicht nur Dienstleister, sondern Partner für Ihr Projekt zu sein. Von der ersten Beratung bis zur finalen Übergabe stehen wir Ihnen mit Rat und Tat zur Seite.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Values Section */}
            <Section className="bg-slate-50">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Wofür wir <span className="text-accent underline decoration-accent/20 underline-offset-8">stehen</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Unsere Philosophie ist einfach: Handwerkliche Perfektion gepaart mit moderner Kommunikation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Qualität",
                            desc: "Wir verwenden nur hochwertige Materialien und arbeiten mit größter Sorgfalt bis ins Detail.",
                            icon: (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            )
                        },
                        {
                            title: "Transparenz",
                            desc: "Klare Angebote ohne versteckte Kosten. Wir kommunizieren jeden Schritt Ihres Projekts.",
                            icon: (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.013 8.013 0 01-5.45-2.125L3 21v-4.53A7.962 7.962 0 011 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                                </svg>
                            )
                        },
                        {
                            title: "Regionalität",
                            desc: "Handwerkskunst für die Region Lübeck. Wir betreuen die gesamte Region Schleswig-Holstein und Hamburg mit deutscher Pünktlichkeit.",
                            icon: (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            )
                        }
                    ].map((value, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 group hover:border-accent/30 transition-all duration-300">
                            <div className="w-16 h-16 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Team Section - CRITICAL FOR E-E-A-T */}
            <Section className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Die Köpfe hinter <span className="text-accent underline decoration-accent/20">W&U</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Winter & Usselmann GbR wurde von Michael Winter und seinem Team mit einem klaren Ziel gegründet:
                            Traditionelles Handwerk mit dem Service-Anspruch des 21. Jahrhunderts zu verbinden.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden shrink-0">
                                    <img src="/images/image-10.webp" alt="Michael Winter" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Michael Winter</h4>
                                    <p className="text-sm text-accent font-bold uppercase tracking-wider">Geschäftsführer</p>
                                    <p className="text-slate-500 mt-2 text-sm italic">&quot;Unser Name steht für Zuverlässigkeit und Qualität in jedem Projekt.&quot;</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden shrink-0">
                                    <img src="/images/image-9.webp" alt="Alex Usselmann" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Alex Usselmann</h4>
                                    <p className="text-sm text-accent font-bold uppercase tracking-wider">Geschäftsführer</p>
                                    <p className="text-slate-500 mt-2 text-sm italic">&quot;Handwerkliche Präzision und Kundenzufriedenheit sind meine höchsten Prioritäten.&quot;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src="/images/image-11.webp" alt="Teamarbeit" className="rounded-2xl shadow-lg h-64 w-full object-cover" />
                        <img src="/images/image-12.webp" alt="Projektbesprechung" className="rounded-2xl shadow-lg h-64 w-full object-cover translate-y-8" />
                    </div>
                </div>
            </Section>

            {/* Authority Section - Partners & Certifications */}
            <Section className="bg-slate-50">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-4">Autorität & Vertrauen</p>
                        <h2 className="text-3xl font-bold text-slate-900">Unsere Partner & Standards</h2>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 grayscale opacity-60">
                        {["BOSCH", "KNAUF", "STO", "BRILLUX", "WÜRTH", "SCHÜCO", "GROHE", "VIESSMANN", "CAPAROL", "WEBER", "MAKITA", "LIEBHERR"].map((partner) => (
                            <div key={partner} className="flex items-center justify-center p-8 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:grayscale-0 transition-all duration-300">
                                <span className="font-black text-slate-400 text-xl tracking-tighter">{partner}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section className="bg-slate-900 text-white text-center rounded-t-[3rem] relative z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-2xl">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.013 8.013 0 01-5.45-2.125L3 21v-4.53A7.962 7.962 0 011 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                    </svg>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 pt-8">
                    Bereit für ein <span className="text-accent font-serif italic text-4xl md:text-6xl">Gespräch?</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                    Wir sind keine anonyme Firma. Wir sind Ihre Experten aus der Region Lübeck und freuen uns auf Ihr Projekt.
                </p>
                <Link
                    to="/#contact"
                    className="inline-block px-10 py-5 bg-accent text-white font-bold rounded-full shadow-lg hover:shadow-accent/40 hover:-translate-y-1 transition-all duration-300"
                >
                    Erstberatung anfordern
                </Link>
            </Section>
        </>
    );
};

export default About;
