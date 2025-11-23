import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt';
import { Helmet } from 'react-helmet-async';
import Section from '../components/UI/Section';
import StructuredData from '../components/SEO/StructuredData';

const Home = () => {
    const [activeStep, setActiveStep] = useState(1);
    const [activeFaq, setActiveFaq] = useState(null);

    // Tilt Effect
    useEffect(() => {
        const tiltElements = document.querySelectorAll('[data-tilt]');
        VanillaTilt.init(Array.from(tiltElements), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
        });
    }, []);

    // Stats Counter Logic
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = +counter.getAttribute('data-target');
                    const duration = 2000;
                    const increment = target / (duration / 16);

                    let current = 0;
                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            counter.innerText = Math.ceil(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.innerText = target;
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

    // Intersection Observer for Process Steps
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const step = parseInt(entry.target.getAttribute('data-step'));
                    setActiveStep(step);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.process-step').forEach((step) => {
            observer.observe(step);
        });

        return () => observer.disconnect();
    }, []);

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Winter & Usselmann GbR",
        "image": "https://example.com/images/image-1.png", // TODO: Replace with actual domain
        "description": "Ihr zuverlässiger Partner für Renovierung, Sanierung und Innenausbau in Ratzeburg und ganz Schleswig-Holstein.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bachstraße 36",
            "addressLocality": "Ratzeburg",
            "postalCode": "23909",
            "addressCountry": "DE",
            "addressRegion": "Schleswig-Holstein"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 53.7044,
            "longitude": 10.7614
        },
        "url": "https://example.com", // TODO: Replace with actual domain
        "telephone": "+4915141389442",
        "email": "info@wintuss.de",
        "priceRange": "€€",
        "areaServed": [
            {
                "@type": "City",
                "name": "Ratzeburg"
            },
            {
                "@type": "State",
                "name": "Schleswig-Holstein"
            }
        ],
        "founder": {
            "@type": "Person",
            "name": "Michael Winter"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Handwerksleistungen",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Maurer- & Putzarbeiten" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Maler & Schimmelsanierung" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fliesen & Badsanierung" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Trockenbauarbeiten" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bodenbelagsarbeiten" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tischler & Küchen" } }
            ]
        }
    };

    return (
        <>
            <Helmet>
                <title>Renovierung Ratzeburg & Schleswig-Holstein | Winter & Usselmann GbR</title>
                <meta name="description" content="Ihr zuverlässiger Partner für Renovierung, Sanierung und Innenausbau in Ratzeburg und ganz Schleswig-Holstein. Qualität, Transparenz und Festpreise." />
                <meta name="keywords" content="Renovierung Ratzeburg, Sanierung Schleswig-Holstein, Handwerker Ratzeburg, Badsanierung, Malerarbeiten, Trockenbau, Bodenverlegung" />

                {/* TODO: Replace example.com with actual domain */}
                <link rel="canonical" href="https://example.com/" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://example.com/" />
                <meta property="og:title" content="Renovierung Ratzeburg & Schleswig-Holstein | Winter & Usselmann GbR" />
                <meta property="og:description" content="Ihr zuverlässiger Partner für Renovierung, Sanierung und Innenausbau in Ratzeburg und ganz Schleswig-Holstein. Qualität, Transparenz und Festpreise." />
                <meta property="og:image" content="https://example.com/images/image-1.png" />
                <meta property="og:locale" content="de_DE" />
                <meta property="og:site_name" content="Winter & Usselmann GbR" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://example.com/" />
                <meta property="twitter:title" content="Renovierung Ratzeburg & Schleswig-Holstein | Winter & Usselmann GbR" />
                <meta property="twitter:description" content="Ihr zuverlässiger Partner für Renovierung, Sanierung und Innenausbau in Ratzeburg und ganz Schleswig-Holstein." />
                <meta property="twitter:image" content="https://example.com/images/image-1.png" />
            </Helmet>

            <StructuredData data={localBusinessSchema} />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/images/image-1.png" alt="Traumhaus Renovierung Ratzeburg"
                        className="w-full h-full object-cover animate-subtle-zoom" loading="lazy" />
                    <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 pt-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6" data-aos="fade-down">
                            Handwerkskunst in Ratzeburg & Umgebung
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-8" data-aos="fade-up" data-aos-delay="100">
                            Verwandeln Sie Ihr Haus in ein <span className="font-serif italic text-accent">Zuhause</span>.
                        </h1>
                        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light" data-aos="fade-up" data-aos-delay="200">
                            Wir verstehen, dass eine Renovierung mehr ist als nur Baustelle. Es geht um Ihr Wohlbefinden.
                            Winter & Usselmann GbR realisiert Ihre Wohnträume in Schleswig-Holstein – stressfrei, pünktlich und zum Festpreis.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4" data-aos="fade-up" data-aos-delay="300">
                            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-accent text-white font-bold rounded-full shadow-[0_0_20px_rgba(217,119,6,0.4)] hover:shadow-[0_0_30px_rgba(217,119,6,0.6)] hover:scale-105 transition-all duration-300">
                                Kostenloses Angebot anfordern
                            </a>
                            <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 group flex items-center justify-center gap-2">
                                <span>Unsere Leistungen</span>
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Floating Glass Card */}
                <div className="absolute bottom-10 right-10 hidden xl:block" data-aos="fade-left" data-aos-delay="500">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl max-w-xs text-white">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="flex -space-x-2">
                                <img src="/images/image-2.png" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Kunde" />
                                <img src="/images/image-3.png" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Kunde" />
                            </div>
                            <div className="flex text-accent">★★★★★</div>
                        </div>
                        <p className="text-sm font-light">"Endlich Handwerker, die mitdenken. Unser Bad in Ratzeburg ist ein Traum geworden!"</p>
                    </div>
                </div>
            </section>

            {/* Marquee Section */}
            <div className="bg-white py-10 border-b border-slate-100 overflow-hidden">
                <p className="text-center text-slate-400 text-xs font-bold tracking-widest uppercase mb-6">Wir vertrauen auf Markenqualität</p>
                <div className="relative w-full flex overflow-hidden">
                    <div className="animate-marquee whitespace-nowrap flex gap-16 min-w-full items-center">
                        <span className="text-3xl font-bold text-slate-300">BOSCH</span>
                        <span className="text-3xl font-bold text-slate-300">MAKITA</span>
                        <span className="text-3xl font-bold text-slate-300">KNAUF</span>
                        <span className="text-3xl font-bold text-slate-300">STO</span>
                        <span className="text-3xl font-bold text-slate-300">BRILLUX</span>
                        <span className="text-3xl font-bold text-slate-300">WÜRTH</span>
                        <span className="text-3xl font-bold text-slate-300">FESTOOL</span>
                        {/* Duplicate */}
                        <span className="text-3xl font-bold text-slate-300">BOSCH</span>
                        <span className="text-3xl font-bold text-slate-300">MAKITA</span>
                        <span className="text-3xl font-bold text-slate-300">KNAUF</span>
                        <span className="text-3xl font-bold text-slate-300">STO</span>
                        <span className="text-3xl font-bold text-slate-300">BRILLUX</span>
                        <span className="text-3xl font-bold text-slate-300">WÜRTH</span>
                        <span className="text-3xl font-bold text-slate-300">FESTOOL</span>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <Section id="about" className="bg-white overflow-hidden">
                <div className="absolute top-20 right-0 text-[12rem] font-bold text-slate-50 leading-none select-none pointer-events-none z-0">W&U</div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div data-aos="fade-right">
                            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Über Winter & Usselmann</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                Wir bauen nicht nur um.<br /><span className="font-serif italic text-accent">Wir schaffen Lebensqualität.</span>
                            </h3>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                <p>Kennen Sie das Gefühl? Sie lieben Ihr Zuhause in Ratzeburg, aber es passt nicht mehr ganz zu Ihrem Leben. Das Bad ist veraltet, der Boden knarrt, oder Sie brauchen einfach mehr Platz.</p>
                                <p>Eine Renovierung ist oft mit Ängsten verbunden: Lärm, Dreck, unzuverlässige Handwerker. Wir treten an, um das zu ändern. Als Ihr lokaler Partner in Schleswig-Holstein garantieren wir Ihnen einen reibungslosen Ablauf.</p>
                                <div className="border-l-4 border-accent pl-6 py-2 italic text-slate-800 font-medium">
                                    "Unser Ziel ist es, dass Sie sich schon während der Bauphase auf das Ergebnis freuen können – ohne Sorgen."
                                </div>
                                <p>Michael Winter & Das Team</p>
                            </div>
                            <div className="mt-8">
                                <img src="/images/image-4.png" alt="Unterschrift Michael Winter" className="h-16 opacity-70" />
                            </div>
                        </div>

                        <div className="relative mt-12 lg:mt-0">
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200" data-aos="zoom-in" data-tilt>
                                <img src="/images/image-5.png" alt="Unser Team bei der Arbeit in Ratzeburg" className="w-full h-auto object-cover transform hover:scale-105 transition-duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="font-bold text-xl">Michael Winter</p>
                                    <p className="text-sm opacity-80">Geschäftsführer</p>
                                </div>
                            </div>
                            <div className="absolute -bottom-10 -left-10 w-1/2 z-20 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden md:block" data-aos="fade-up" data-aos-delay="200" data-tilt>
                                <img src="/images/image-6.png" alt="Detailarbeit Handwerk" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent rounded-full flex items-center justify-center text-white font-bold text-center p-4 shadow-lg z-30 animate-slow-spin">
                                <div className="text-xs uppercase tracking-widest">Qualität<br />aus einer<br />Hand</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Services Section */}
            <Section id="services" className="bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <img src="/images/image-7.png" className="w-full h-full object-cover opacity-30" alt="Background" />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Unsere Expertise</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Alles für Ihr <span className="font-serif italic text-accent">perfektes Zuhause</span></h3>
                        <p className="text-slate-400 text-lg">Von kleinen Reparaturen bis zur Kernsanierung – wir sind Ihre Experten in Schleswig-Holstein.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { id: "maurer-putzarbeiten", title: "Maurer- & Putzarbeiten", desc: "Fassadensanierungen, Keller, Lichtschächte sowie professionelle Putzarbeiten für Innen- und Außenwände.", img: "/images/image-8.png" },
                            { id: "maler-schimmelsanierung", title: "Maler & Schimmelsanierung", desc: "Tapezieren, Lackieren, Spachteln und Streichen. Inklusive nachhaltiger und professioneller Schimmelbeseitigung.", img: "/images/image-9.png" },
                            { id: "fliesen-badsanierung", title: "Fliesen & Badsanierung", desc: "Komplette Badezimmer, Wand- und Bodenfliesen. Inklusive Montage von modernen Glastrennwänden.", img: "/images/image-10.png" },
                            { id: "trockenbauarbeiten", title: "Trockenbauarbeiten", desc: "Verkleiden von Wänden und Decken, Erstellen von Trennwänden und Vorwandinstallationen für neue Raumkonzepte.", img: "/images/image-11.png" },
                            { id: "bodenbelagsarbeiten", title: "Bodenbelagsarbeiten", desc: "Verlegung von Laminat, Vinyl, Parkett und Holzdielen. Inklusive Schleifarbeiten und Fußleisten.", img: "/images/image-12.png" },
                            { id: "tischler-kuechen", title: "Tischler & Küchen", desc: "Montage von Türen und Zargen. Lieferung und fachgerechte Montage von Einbauküchen inklusive Elektrogeräte.", img: "/images/image-13.png" },
                        ].map((service, index) => (
                            <Link to={`/leistungen/${service.id}`} key={index} className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-accent/20 cursor-pointer" data-aos="fade-up" data-aos-delay={index * 100} data-tilt>
                                <div className="h-48 mb-6 overflow-hidden rounded-t-2xl -mt-8 -mx-8">
                                    <img src={service.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={service.title} />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Reasons Section */}
            <Section className="bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20" data-aos="fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Warum <span className="font-serif italic text-accent">Winter & Usselmann?</span></h2>
                        <p className="mt-4 text-slate-600">Weil wir Handwerk lieben und Service leben.</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
                        <div className="w-full md:w-1/2" data-aos="fade-right">
                            <span className="text-8xl font-bold text-slate-200 absolute -top-10 -left-10 z-0">01</span>
                            <div className="relative z-10 glass-panel p-8 rounded-xl shadow-lg border-l-4 border-accent">
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">Pünktliche Fertigstellung</h3>
                                <p className="text-slate-600">Wir wissen, wie wichtig Ihr Einzugstermin ist. Dank präziser Planung garantieren wir Ihnen eine termingerechte Fertigstellung. Sie können Ihren Umzug sicher planen.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2" data-aos="fade-left">
                            <img src="/images/image-14.png" className="w-2/3 mx-auto rounded-full aspect-square object-cover drop-shadow-2xl hover:scale-105 transition-transform duration-500" alt="Pünktlichkeit" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-24">
                        <div className="w-full md:w-1/2" data-aos="fade-left">
                            <span className="text-8xl font-bold text-slate-200 absolute -top-10 -right-10 z-0">02</span>
                            <div className="relative z-10 glass-panel p-8 rounded-xl shadow-lg border-r-4 border-accent">
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">Absolute Kostentransparenz</h3>
                                <p className="text-slate-600">Bei uns gibt es keine versteckten Kosten. Sie erhalten ein detailliertes Festpreisangebot. Das bedeutet für Sie: Maximale Planungssicherheit für Ihr Budget.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2" data-aos="fade-right">
                            <img src="/images/image-15.png" className="w-2/3 mx-auto rounded-full aspect-square object-cover drop-shadow-2xl hover:scale-105 transition-transform duration-500" alt="Kostenkontrolle" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
                        <div className="w-full md:w-1/2" data-aos="fade-right">
                            <span className="text-8xl font-bold text-slate-200 absolute -top-10 -left-10 z-0">03</span>
                            <div className="relative z-10 glass-panel p-8 rounded-xl shadow-lg border-l-4 border-accent">
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">Ein Ansprechpartner für alles</h3>
                                <p className="text-slate-600">Schluss mit dem Telefon-Marathon. Wir koordinieren Maler, Fliesenleger und Trockenbauer für Sie. Sie haben genau einen Ansprechpartner: Uns.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2" data-aos="fade-left">
                            <img src="/images/image-16.png" className="w-2/3 mx-auto rounded-full aspect-square object-cover drop-shadow-2xl hover:scale-105 transition-transform duration-500" alt="Koordination" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                        <div className="w-full md:w-1/2" data-aos="fade-left">
                            <span className="text-8xl font-bold text-slate-200 absolute -top-10 -right-10 z-0">04</span>
                            <div className="relative z-10 glass-panel p-8 rounded-xl shadow-lg border-r-4 border-accent">
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">Qualität, die bleibt</h3>
                                <p className="text-slate-600">Wir verwenden nur Materialien, die wir auch in unseren eigenen vier Wänden nutzen würden. Langlebig, nachhaltig und hochwertig. Für ein Ergebnis, an dem Sie Jahre Freude haben.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2" data-aos="fade-right">
                            <img src="/images/image-17.png" className="w-2/3 mx-auto rounded-full aspect-square object-cover drop-shadow-2xl hover:scale-105 transition-transform duration-500" alt="Qualität" />
                        </div>
                    </div>
                </div>
            </Section>

            {/* Process Section */}
            <Section id="process" className="bg-white overflow-visible">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900">Ihr Weg zum <span className="text-accent font-serif italic">Traumhaus</span></h2>
                        <p className="text-slate-500 mt-2">In 4 einfachen Schritten zum Ziel</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16 relative">
                        <div className="lg:w-1/2 sticky-container self-start">
                            <div className="h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl relative bg-slate-900 flex items-center justify-center text-white">
                                <img src="/images/image-18.png" className="w-full h-full object-cover opacity-80" alt="Der perfekte Plan" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                                <h3 className="absolute bottom-10 left-10 text-3xl font-bold">Der perfekte Plan</h3>
                            </div>
                        </div>

                        <div className="lg:w-1/2 space-y-32 py-10">
                            {[
                                { id: 1, title: "Beratung & Design", desc: "Wir hören zu. In Ratzeburg und Umgebung kommen wir gerne zu Ihnen, um Ihre Wünsche vor Ort zu besprechen und ein Konzept zu entwickeln." },
                                { id: 2, title: "Festpreisangebot", desc: "Sie erhalten ein glasklares Angebot. Wir erklären Ihnen jeden Posten, damit Sie genau wissen, wofür Sie bezahlen." },
                                { id: 3, title: "Umsetzung", desc: "Lehnen Sie sich zurück. Unsere Profis arbeiten sauber, schnell und diskret. Wir halten Sie proaktiv auf dem Laufenden." },
                                { id: 4, title: "Fertigstellung & Übergabe", desc: "Ihr neues Zuhause wartet. Wir übergeben besenrein und gehen jeden Winkel mit Ihnen durch. Erst wenn Sie zufrieden sind, sind wir es auch." }
                            ].map((step) => (
                                <div
                                    key={step.id}
                                    className="group cursor-pointer process-step"
                                    data-aos="fade-up"
                                    data-step={step.id}
                                    onMouseEnter={() => setActiveStep(step.id)}
                                >
                                    <div className="flex items-start gap-6">
                                        <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shrink-0 transition-all duration-300 ${activeStep === step.id ? 'bg-accent text-white shadow-lg shadow-accent/40 scale-110' : 'bg-white border-2 border-slate-200 text-slate-400 group-hover:border-accent group-hover:text-accent'}`}>
                                            {step.id}
                                        </div>
                                        <div>
                                            <h3 className={`text-2xl font-bold text-slate-900 mb-3 ${activeStep === step.id ? 'text-accent' : ''}`}>{step.title}</h3>
                                            <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Comparison Table */}
            <Section className="bg-slate-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold text-center mb-12">Der Unterschied liegt im Detail</h2>
                    <div className="overflow-x-auto rounded-2xl shadow-xl bg-white">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-900 text-white">
                                    <th className="p-6 text-lg font-semibold">Merkmal</th>
                                    <th className="p-6 text-lg font-bold text-accent bg-slate-800">Winter & Usselmann GbR</th>
                                    <th className="p-6 text-lg font-normal text-slate-400">Einzelbeauftragung</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {[
                                    { feature: "Zentraler Ansprechpartner", us: "✔ Ja, Einer für Alles", them: "✘ Nein, Viele Telefonate" },
                                    { feature: "Gewerke-Koordination", us: "✔ Übernehmen wir komplett", them: "✘ Ihre Aufgabe (Stress)" },
                                    { feature: "Festpreisgarantie", us: "✔ Garantiert", them: "✘ Oft versteckte Kosten" },
                                    { feature: "Termintreue", us: "✔ Verbindlicher Plan", them: "✘ Verzögerungen üblich" }
                                ].map((row, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                        <td className="p-6 font-medium text-slate-700">{row.feature}</td>
                                        <td className="p-6 bg-accent/5 font-bold text-accent">{row.us}</td>
                                        <td className="p-6 text-slate-500">{row.them}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Section>

            {/* Stats Section */}
            <Section className="bg-slate-900 text-white" id="stats-section">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10" data-tilt>
                            <div className="text-5xl font-bold text-accent mb-2 flex justify-center items-center">
                                <span className="counter" data-target="15">0</span><span>+</span>
                            </div>
                            <p className="text-slate-400 uppercase tracking-widest text-sm">Jahre Erfahrung</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10" data-tilt>
                            <div className="text-5xl font-bold text-accent mb-2 flex justify-center items-center">
                                <span className="counter" data-target="250">0</span><span>+</span>
                            </div>
                            <p className="text-slate-400 uppercase tracking-widest text-sm">Projekte in SH</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10" data-tilt>
                            <div className="text-5xl font-bold text-accent mb-2 flex justify-center items-center">
                                <span className="counter" data-target="100">0</span><span>%</span>
                            </div>
                            <p className="text-slate-400 uppercase tracking-widest text-sm">Kundenzufriedenheit</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Reviews Section */}
            <Section className="bg-white" id="reviews">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Was unsere <span className="text-accent font-serif italic">Kunden</span> sagen</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-10 bg-slate-50 rounded-2xl relative shadow-lg hover:shadow-xl transition-shadow border border-slate-100" data-aos="fade-up" data-tilt>
                            <div className="absolute -top-6 -left-4 text-8xl text-accent opacity-20 font-serif">“</div>
                            <p className="text-slate-700 italic text-lg mb-6 relative z-10">
                                "Endlich eine Firma, die hält, was sie verspricht. Die Badsanierung lief wie am Schnürchen. Besonders die Sauberkeit auf der Baustelle hat uns beeindruckt."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-300 rounded-full overflow-hidden">
                                    <img src="/images/image-19.png" className="w-full h-full object-cover" alt="Kunde" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Familie Müller</h4>
                                    <p className="text-xs text-accent uppercase tracking-wider">Ratzeburg</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-10 bg-slate-50 rounded-2xl relative shadow-lg hover:shadow-xl transition-shadow border border-slate-100" data-aos="fade-up" data-aos-delay="100" data-tilt>
                            <div className="absolute -top-6 -left-4 text-8xl text-accent opacity-20 font-serif">“</div>
                            <p className="text-slate-700 italic text-lg mb-6 relative z-10">
                                "Kompetent, freundlich und pünktlich. Wir haben unser komplettes Erdgeschoss sanieren lassen und sind vom Ergebnis begeistert. Klare Weiterempfehlung!"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-300 rounded-full overflow-hidden">
                                    <img src="/images/image-20.png" className="w-full h-full object-cover" alt="Kunde" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Thomas & Sarah</h4>
                                    <p className="text-xs text-accent uppercase tracking-wider">Mölln</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Projects Grid */}
            <Section id="projects" className="bg-slate-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-12 text-slate-900">Unsere <span className="text-accent">Projekte</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[600px] md:h-[500px]">
                        <div className="lg:col-span-2 lg:row-span-2 relative group overflow-hidden rounded-xl cursor-pointer" data-aos="zoom-in">
                            <img src="/images/image-21.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Project" />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-xl border-b-2 border-accent pb-1">Küchensanierung Ratzeburg</span>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-xl cursor-pointer" data-aos="zoom-in" data-aos-delay="100">
                            <img src="/images/image-22.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Project" />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-sm">Badsanierung</span>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-xl cursor-pointer" data-aos="zoom-in" data-aos-delay="200">
                            <img src="/images/image-23.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Project" />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-sm">Wohnraum Modernisierung</span>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-xl cursor-pointer" data-aos="zoom-in" data-aos-delay="300">
                            <img src="/images/image-24.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Project" />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-sm">Flur & Treppe</span>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-xl cursor-pointer" data-aos="zoom-in" data-aos-delay="400">
                            <img src="/images/image-25.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Project" />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-sm">Fassadensanierung</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* FAQ Section */}
            <Section className="bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Häufig gestellte Fragen</h2>
                    <div className="space-y-4">
                        {[
                            { id: 1, q: "Wie lange dauert eine komplette Badsanierung?", a: "In der Regel dauert eine Komplettsanierung eines Badezimmers zwischen 2 und 3 Wochen, abhängig von der Größe und den gewählten Materialien. Wir erstellen Ihnen vorab einen detaillierten Zeitplan." },
                            { id: 2, q: "Arbeiten Sie auch außerhalb von Ratzeburg?", a: "Ja, wir sind in ganz Schleswig-Holstein und Hamburg für Sie tätig. Sprechen Sie uns einfach an!" },
                            { id: 3, q: "Sind Ihre Angebote wirklich Festpreise?", a: "Ja! Transparenz ist unser oberstes Gebot. Das Angebot, das Sie unterschreiben, ist der Preis, den Sie zahlen – solange sich Ihre Anforderungen während des Baus nicht ändern." }
                        ].map((faq) => (
                            <div key={faq.id} className="border border-slate-200 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                                    className="w-full flex justify-between items-center p-6 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                                >
                                    <span className="font-bold text-slate-800">{faq.q}</span>
                                    <span className="text-2xl text-accent">{activeFaq === faq.id ? '-' : '+'}</span>
                                </button>
                                <div className={`transition-all duration-300 overflow-hidden ${activeFaq === faq.id ? 'max-h-40 p-6' : 'max-h-0'}`}>
                                    <div className="text-slate-600">{faq.a}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Home;
