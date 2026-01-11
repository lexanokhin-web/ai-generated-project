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
                <title>Über Uns | Winter & Usselmann GbR Ratzeburg</title>
                <meta name="description" content="Erfahren Sie mehr über Winter & Usselmann GbR - Ihr zuverlässiger Partner für Renovierung и Sanierung in Ratzeburg. Traditionelle Handwerkskunst trifft Moderne." />
                <link rel="canonical" href="https://wintuss.de/uber-uns" />

                {/* OG Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://wintuss.de/uber-uns" />
                <meta property="og:title" content="Über Uns | Winter & Usselmann GbR Ratzeburg" />
                <meta property="og:description" content="Erfahren Sie mehr über unser Team и нашу философию качества." />
                <meta property="og:image" content="https://wintuss.de/images/og-about.webp" />
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
                        Wir sind Ihr junges, dynamisches Handwerksunternehmen aus Ratzeburg.
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
                                Gegründet mit der Vision, das Handwerk in Ratzeburg neu zu definieren, haben wir uns als Winter & Usselmann GbR schnell einen Namen gemacht. Wir glauben daran, dass Handwerk mehr ist als nur Arbeit – es ist die Gestaltung von Lebensräumen.
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
                        Unsere <span className="text-accent">Werte</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Was uns antreibt und worauf Sie sich verlassen können.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Qualität",
                            desc: "Wir verwenden nur hochwertige Materialien und arbeiten mit größter Sorgfalt.",
                            icon: (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            )
                        },
                        {
                            title: "Transparenz",
                            desc: "Keine versteckten Kosten. Wir kommunizieren offen und ehrlich.",
                            icon: (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.013 8.013 0 01-5.45-2.125L3 21v-4.53A7.962 7.962 0 011 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                                </svg>
                            )
                        },
                        {
                            title: "Zuverlässigkeit",
                            desc: "Termintreue ist für uns selbstverständlich. Wir halten, was wir versprechen.",
                            icon: (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            )
                        }
                    ].map((value, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                            <p className="text-slate-600">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section className="bg-slate-900 text-white text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Lernen Sie uns <span className="text-accent italic">persönlich</span> kennen
                </h2>
                <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
                    Wir kommen gerne zu Ihnen, um Ihr Projekt vor Ort zu besprechen. Unverbindlich und kostenlos.
                </p>
                <Link
                    to="/#contact"
                    className="inline-block px-8 py-4 bg-accent text-white font-bold rounded-lg shadow-lg hover:bg-amber-700 transition-colors"
                >
                    Termin vereinbaren
                </Link>
            </Section>
        </>
    );
};

export default About;
