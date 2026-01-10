import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt';
import { Helmet } from 'react-helmet-async';
import Section from '../components/UI/Section';
import StructuredData from '../components/SEO/StructuredData';
import AnimatedBackground from '../components/UI/AnimatedBackground';
import HeroScene from '../components/3D/HeroScene';
import { ArrowRight, CheckCircle, Hammer, Wrench, PaintRoller, Trophy, Calendar, Heart, Star } from 'lucide-react';
import LiquidGlassTool from '../components/UI/LiquidGlassTool';
import ProjectGalleryModal from '../components/UI/ProjectGalleryModal';


const Home = () => {
    const [activeStep, setActiveStep] = useState(1);
    const [activeFaq, setActiveFaq] = useState(null);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const projectImages = [
        { img: "/images/image-21.png", title: "Küchensanierung Ratzeburg", cat: "Renovierung", desc: "Komplette Neugestaltung einer modernen Küche mit hochwertigen Oberflächen." },
        { img: "/images/bathroom.png", title: "Exklusives Bad-Design", cat: "Sanierung", desc: "Luxuriöse Badsanierung mit großformatigen Fliesen und moderner Lichttechnik." },
        { img: "/images/kitchen.png", title: "Moderne Loft-Küche", cat: "Innenausbau", desc: "Offenes Küchenkonzept mit industriellem Charme и Funktionalität." },
        { img: "/images/living-room.png", title: "Wohnzimmer Redesign", cat: "Modernisierung", desc: "Hochwertige Wandgestaltung und Bodenverlegung für ein neues Lebensgefühl." },
        { img: "/images/open-plan.png", title: "Open-Plan Living", cat: "Sanierung", desc: "Zusammenführung von Räumen für ein großzügiges Wohngefühl." },
        { img: "/images/wardrobe.png", title: "Maßgeschneiderter Stauraum", cat: "Tischler", desc: "Individuelle Schranklösungen nach Maß für maximale Platzausnutzung." },
        { img: "/images/image-22.png", title: "Moderner Bad-Traum", cat: "Sanierung", desc: "Zeitloses Design trifft auf Funktionalität в Schleswig-Holstein." },
        { img: "/images/image-23.png", title: "Wohnraum Design", cat: "Modernisierung", desc: "Kreative Raumkonzepte für Ihr individuelles Wohnerlebnis." },
        { img: "/images/image-24.png", title: "Eingangsbereich & Treppe", cat: "Innenausbau", desc: "Einladende Gestaltung des Entrées mit langlebigen Materialien." },
        { img: "/images/image-25.png", title: "Fassadensanierung", cat: "Außenbau", desc: "Schutz und Ästhetik für die Gebäudehülle durch modernste Putzsysteme." },
    ];

    const openGallery = (index) => {
        setSelectedProjectIndex(index);
        setIsGalleryOpen(true);
    };

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
                    <HeroScene />
                    <img src="/images/image-1.png" alt="Traumhaus Renovierung Ratzeburg"
                        className="w-full h-full object-cover animate-subtle-zoom opacity-50" loading="lazy" />
                    <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 pt-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6" data-aos="fade-down">
                            Handwerkskunst in Ratzeburg & Umgebung
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-8" data-aos="fade-up" data-aos-delay="100">
                            <span className="block mb-2">Haus & Wohnungs-</span>
                            <span className="font-serif italic text-accent">Renovierung & Sanierung</span>.
                        </h1>
                        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light" data-aos="fade-up" data-aos-delay="200">
                            Von der exklusiven Badsanierung bis zum trockenen Innenausbau: Winter & Usselmann steht für höchste handwerkliche Qualität und fachgerechte Koordination aller Gewerke.
                            Wir realisieren Ihr Bauvorhaben in Ratzeburg und Umgebung – präzise, zuverlässig und zum garantierten Festpreis.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4" data-aos="fade-up" data-aos-delay="300">
                            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-accent text-white font-bold rounded-full shadow-[0_0_20px_rgba(217,119,6,0.4)] hover:shadow-[0_0_30px_rgba(217,119,6,0.6)] hover:scale-105 transition-all duration-300">
                                Kostenloses Angebot anfordern
                            </a>
                            <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 group flex items-center justify-center gap-2">
                                <span>Unsere Leistungen</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
            <div className="bg-white py-12 border-y border-slate-100 overflow-hidden relative">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
                <p className="text-center text-slate-400 text-xs font-bold tracking-[0.3em] uppercase mb-8">Wir vertrauen auf deutsche Markenqualität</p>
                <div className="relative w-full overflow-hidden">
                    <div className="animate-marquee whitespace-nowrap flex gap-20 items-center w-max pr-20">
                        {[
                            "BOSCH Professional", "MAKITA", "KNAUF", "STO", "BRILLUX", "WÜRTH", "FESTOOL",
                            "METABO", "LIEBHERR", "GROHE", "VIESSMANN", "SCHÜCO", "HANSA", "CAPAROL", "WEBER"
                        ].map((brand, i) => (
                            <div key={i} className="flex items-center gap-4 group">
                                <span className="text-3xl lg:text-4xl font-black text-slate-200 group-hover:text-accent transition-colors duration-500 cursor-default select-none tracking-tighter">
                                    {brand}
                                </span>
                                <div className="w-2 h-2 rounded-full bg-accent/20 group-hover:bg-accent transition-colors"></div>
                            </div>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {[
                            "BOSCH Professional", "MAKITA", "KNAUF", "STO", "BRILLUX", "WÜRTH", "FESTOOL",
                            "METABO", "LIEBHERR", "GROHE", "VIESSMANN", "SCHÜCO", "HANSA", "CAPAROL", "WEBER"
                        ].map((brand, i) => (
                            <div key={`dup-${i}`} className="flex items-center gap-4 group">
                                <span className="text-3xl lg:text-4xl font-black text-slate-200 group-hover:text-accent transition-colors duration-500 cursor-default select-none tracking-tighter">
                                    {brand}
                                </span>
                                <div className="w-2 h-2 rounded-full bg-accent/20 group-hover:bg-accent transition-colors"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* About Section */}
            <Section id="about" className="bg-slate-50/50 overflow-hidden relative">
                <AnimatedBackground variant="modern-aura" className="opacity-40" />
                <div className="absolute -top-24 -right-24 text-[20rem] font-black text-slate-100 select-none pointer-events-none z-0">W&U</div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-center">
                        {/* Text Content - Positioned to reveal behind glass */}
                        <div className="w-full lg:w-3/5 lg:pr-12 z-20" data-aos="fade-right">
                            <div className="glass-panel p-8 lg:p-16 rounded-[2.5rem] shadow-2xl border-l-[1px] border-white/40 bg-white/60 backdrop-blur-xl relative">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <Hammer className="w-24 h-24 text-accent" />
                                </div>

                                <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">Über Winter & Usselmann</h2>
                                <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-[1.1]">
                                    Wir bauen nicht nur um.<br />
                                    <span className="font-serif italic text-accent font-normal">Wir schaffen Lebensqualität.</span>
                                </h3>

                                <div className="space-y-6 text-slate-600 text-lg lg:text-xl leading-relaxed font-light">
                                    <p>
                                        Kennen Sie das Gefühl? Sie lieben Ihr Zuhause in Ratzeburg, aber es passt nicht mehr ganz zu Ihrem Leben.
                                        Das Bad ist veraltet, der Boden knarrt, oder Sie brauchen einfach mehr Platz.
                                    </p>
                                    <p>
                                        Eine Renovierung ist oft mit Ängsten verbunden: Lärm, Dreck, unzuverlässige Handwerker.
                                        Wir treten an, um das zu ändern. Als Ihr lokaler Partner in Schleswig-Holstein garantieren wir Ihnen einen reibungslosen Ablauf.
                                    </p>

                                    <div className="flex items-center gap-6 py-6 border-y border-slate-200/50 my-8">
                                        <img src="/images/image-4.png" alt="Unterschrift Michael Winter" className="h-16 opacity-80" />
                                        <div className="h-12 w-px bg-slate-200"></div>
                                        <div>
                                            <p className="font-bold text-slate-900">Michael Winter</p>
                                            <p className="text-sm text-accent">Geschäftsführer & Visionär</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image Composition - Overlapping */}
                        <div className="w-full lg:w-2/5 relative lg:-ml-20 z-10 mt-12 lg:mt-0">
                            <div className="relative group" data-aos="zoom-in" data-tilt>
                                <div className="absolute -inset-4 bg-accent/20 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                                <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                                    <img src="/images/image-5.png" alt="Handwerkskunst" className="w-full h-auto object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000" />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-transparent"></div>
                                </div>

                                {/* Floating Sticker */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent rounded-full flex items-center justify-center text-white font-bold text-center p-6 shadow-2xl z-20 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                    <div className="text-sm uppercase tracking-widest leading-tight">
                                        Meister<br />Qualität<br /><span className="text-[0.6rem] font-medium opacity-80">Ratzeburg & SH</span>
                                    </div>
                                </div>

                                {/* Secondary Overlap Image */}
                                <div className="absolute -bottom-16 -left-16 w-2/3 z-30 rounded-3xl overflow-hidden shadow-2xl border-4 border-white hidden xl:block" data-aos="fade-up" data-aos-delay="400">
                                    <img src="/images/image-6.png" alt="Detail" className="w-full h-full object-cover" />
                                </div>
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
                        <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">Unsere Expertise</h2>
                        <h3 className="text-4xl md:text-6xl font-bold text-white mb-8">Alles für Ihr <span className="font-serif italic text-accent">perfektes Zuhause</span></h3>
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

                    {/* Liquid Glass Tools */}
                    <LiquidGlassTool Icon={Hammer} className="top-20 left-10 hidden lg:block" size={65} duration={7} />
                    <LiquidGlassTool Icon={Wrench} className="bottom-20 right-10 hidden lg:block" size={60} delay={1.5} duration={6} />
                </div>
            </Section>

            {/* Reasons Section */}
            <Section className="bg-slate-50 overflow-hidden relative border-t border-slate-100">
                <AnimatedBackground variant="blobs" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-32" data-aos="fade-up">
                        <h2 className="text-sm font-bold text-accent uppercase tracking-[0.4em] mb-4">Ihre Vorteile</h2>
                        <h3 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Warum <span className="font-serif italic text-accent">Winter & Usselmann?</span></h3>
                        <p className="mt-4 text-slate-500 text-xl max-w-2xl mx-auto">Weil wir Handwerk lieben, Service leben und Räume schaffen, in denen man sich wirklich zu Hause fühlt.</p>
                    </div>

                    <div className="space-y-16">
                        {[
                            {
                                id: "01",
                                title: "Pünktliche Fertigstellung",
                                img: "/images/image-14.png",
                                text: "Wir wissen, wie wichtig Ihr Einzugstermin ist. Dank präziser Planung garantieren wir Ihnen eine termingerechte Fertigstellung. В Ratzeburg und Umgebung sind wir bekannt für unsere Verlässlichkeit – Sie können Ihren Umzug sicher planen."
                            },
                            {
                                id: "02",
                                title: "Absolute Kostentransparenz",
                                img: "/images/image-15.png",
                                text: "Bei uns gibt es keine versteckten Kosten. Sie erhalten ein detailliertes Festpreisangebot. Wir kalkulieren ehrlich und nachvollziehbar. Das bedeutet für Sie: Maximale Planungssicherheit für Ihr Budget, von Anfang an."
                            },
                            {
                                id: "03",
                                title: "Ein Ansprechpartner",
                                img: "/images/image-16.png",
                                text: "Schluss mit dem Telefon-Marathon. Wir koordinieren alle Gewerke – Maler, Fliesenleger und Trockenbauer – komplett für Sie. Sie kommunizieren nur mit uns. Wir übernehmen die gesamte Organisation und Logistik Ihres Bauprojekts."
                            },
                            {
                                id: "04",
                                title: "Qualität, die bleibt",
                                img: "/images/image-17.png",
                                text: "Wir verwenden nur Materialien, die wir auch in unserem eigenen Zuhause verbauen würden. Vom ersten Pinselstrich bis zum fertigen Objekt – jeder Schritt unterliegt strengster Qualitätskontrolle."
                            }
                        ].map((reason, idx) => (
                            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 lg:gap-16`}>
                                {/* Large Image Area */}
                                <div className="w-full md:w-1/2 group relative" data-aos={idx % 2 === 1 ? "fade-left" : "fade-right"} data-aos-duration="1200">
                                    <div className="absolute -inset-4 bg-accent/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="relative h-[300px] lg:h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                                        <img src={reason.img} alt={reason.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                                        <div className="absolute top-10 left-10 text-7xl font-black text-white/20 select-none">{reason.id}</div>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="w-full md:w-1/2" data-aos={idx % 2 === 1 ? "fade-right" : "fade-left"} data-aos-duration="1200">
                                    <div className="glass-panel p-8 lg:p-12 rounded-[2.5rem] border-l-[1px] border-white/40 bg-white/40 shadow-xl relative overflow-hidden group">
                                        <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                                            <Hammer className="w-32 h-32 text-accent" />
                                        </div>
                                        <h3 className="text-2xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                            {reason.title}
                                        </h3>
                                        <p className="text-slate-600 text-lg lg:text-xl leading-relaxed font-light mb-8">
                                            {reason.text}
                                        </p>
                                        <div className="flex items-center text-accent font-bold text-sm tracking-widest uppercase">
                                            Exzellenz garantiert
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Process Section */}
            <Section id="process" className="bg-white overflow-visible relative">
                <AnimatedBackground variant="modern-aura" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">Der Prozess</h2>
                        <h3 className="text-4xl md:text-6xl font-bold text-slate-900">Ihr Weg zum <span className="text-accent font-serif italic">Traumhaus</span></h3>
                        <p className="text-slate-500 mt-4 text-lg">In 4 einfachen Schritten zum Ziel</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16 relative">
                        <div className="w-full lg:w-1/2 sticky-container self-start z-20">
                            <div className="h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl relative bg-slate-900 flex items-center justify-center text-white border-4 border-white">
                                <img src="/images/image-18.png" className="w-full h-full object-cover opacity-80" alt="Der perfekte Plan" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                                <h3 className="absolute bottom-10 left-10 text-3xl font-bold">Der perfekte Plan</h3>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 space-y-32 py-10 relative z-10">
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
            <Section className="bg-slate-50 relative">
                <AnimatedBackground variant="blobs" />
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">Transparenz</h2>
                        <h3 className="text-4xl md:text-6xl font-bold text-slate-900">Der Unterschied liegt im <span className="text-accent font-serif italic">Detail</span></h3>
                    </div>
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
                                    { feature: "Zentraler Ansprechpartner", us: <><CheckCircle className="inline w-5 h-5 mr-2" /> Ja, Einer für Alles</>, them: "✘ Nein, Viele Telefonate" },
                                    { feature: "Gewerke-Koordination", us: <><CheckCircle className="inline w-5 h-5 mr-2" /> Übernehmen wir komplett</>, them: "✘ Ihre Aufgabe (Stress)" },
                                    { feature: "Festpreisgarantie", us: <><CheckCircle className="inline w-5 h-5 mr-2" /> Garantiert</>, them: "✘ Oft versteckte Kosten" },
                                    { feature: "Termintreue", us: <><CheckCircle className="inline w-5 h-5 mr-2" /> Verbindlicher Plan</>, them: "✘ Verzögerungen üblich" }
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
            <Section className="bg-slate-900 overflow-hidden relative" id="stats-section">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { target: "15", label: "Jahre Erfahrung", icon: Calendar, color: "text-accent" },
                            { target: "250", label: "Projekte in SH", icon: Trophy, color: "text-blue-400" },
                            { target: "100", label: "Kundenzufriedenheit", icon: Heart, color: "text-rose-400", suffix: "%" }
                        ].map((stat, idx) => (
                            <div key={idx} className="group p-10 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 relative overflow-hidden" data-tilt>
                                {/* Glow Effect */}
                                <div className="absolute -top-20 -left-20 w-40 h-40 bg-accent/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                <div className="flex flex-col items-center relative z-10">
                                    <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 border border-white/10`}>
                                        <stat.icon className={`w-8 h-8 ${stat.color}`} />
                                    </div>
                                    <div className="text-6xl font-black text-white mb-4 flex items-center justify-center tracking-tighter">
                                        <span className="counter" data-target={stat.target}>0</span>
                                        <span className="text-accent">{stat.suffix || "+"}</span>
                                    </div>
                                    <p className="text-slate-400 uppercase tracking-[0.2em] text-xs font-bold text-center">{stat.label}</p>
                                </div>

                                {/* Bottom Accent Line */}
                                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent w-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        ))}
                    </div>

                    {/* Liquid Glass Tool */}
                    <div className="opacity-20">
                        <LiquidGlassTool Icon={PaintRoller} className="top-1/2 -translate-y-1/2 left-10 hidden lg:block" size={75} duration={8} />
                    </div>
                </div>
            </Section>

            {/* Reviews Section */}
            <Section className="bg-white relative overflow-hidden" id="reviews">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-accent rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-[150px]"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">Kundenstimmen</h2>
                        <h3 className="text-4xl md:text-6xl font-bold text-slate-900">Was unsere <span className="text-accent font-serif italic">Kunden</span> sagen</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                name: "Familie Müller",
                                location: "Ratzeburg",
                                img: "/images/image-19.png",
                                text: "Endlich eine Firma, die hält, was sie verspricht. Die Badsanierung lief wie am Schnürchen. Besonders die Sauberkeit auf der Baustelle hat uns beeindruckt.",
                                delay: 0
                            },
                            {
                                name: "Thomas & Sarah",
                                location: "Mölln",
                                img: "/images/image-20.png",
                                text: "Kompetent, freundlich und pünktlich. Wir haben unser komplettes Erdgeschoss sanieren lassen und sind vom Ergebnis begeistert. Klare Weiterempfehlung!",
                                delay: 100
                            }
                        ].map((review, i) => (
                            <div key={i} className="glass-panel p-10 rounded-[2.5rem] relative shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-l-[1px] border-white/40 bg-white/40" data-aos="fade-up" data-aos-delay={review.delay} data-tilt>
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, idx) => <Star key={idx} className="w-5 h-5 fill-accent text-accent" />)}
                                </div>
                                <div className="absolute top-10 right-10 text-8xl text-accent opacity-10 font-serif pointer-events-none">“</div>
                                <p className="text-slate-700 italic text-xl lg:text-2xl mb-10 relative z-10 leading-relaxed">
                                    "{review.text}"
                                </p>
                                <div className="flex items-center gap-5">
                                    <div className="w-16 h-16 bg-slate-200 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                                        <img src={review.img} className="w-full h-full object-cover" alt={review.name} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">{review.name}</h4>
                                        <p className="text-xs text-accent uppercase tracking-widest font-bold">{review.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Projects Grid */}
            <Section id="projects" className="bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">Referenzen</h2>
                        <h3 className="text-4xl md:text-6xl font-bold text-slate-900">Unsere <span className="text-accent font-serif italic">Projekte</span></h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto mb-12">
                        <div
                            className="lg:col-span-2 lg:row-span-2 relative group overflow-hidden rounded-3xl cursor-pointer h-[400px] md:h-auto"
                            data-aos="zoom-in"
                            onClick={() => openGallery(0)}
                        >
                            <img src={projectImages[0].img} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" alt="Project" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-accent text-sm font-bold uppercase tracking-widest mb-2">{projectImages[0].cat}</p>
                                    <h4 className="text-white font-bold text-2xl">{projectImages[0].title}</h4>
                                </div>
                            </div>
                        </div>
                        {projectImages.slice(1, 5).map((project, i) => (
                            <div
                                key={i}
                                className="relative group overflow-hidden rounded-3xl cursor-pointer h-[200px] md:h-auto"
                                data-aos="zoom-in"
                                data-aos-delay={(i + 1) * 100}
                                onClick={() => openGallery(i + 1)}
                            >
                                <img src={project.img} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" alt={project.title} />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="text-accent text-[0.6rem] font-bold uppercase tracking-widest mb-1">{project.cat}</p>
                                        <h4 className="text-white font-bold text-sm">{project.title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center" data-aos="fade-up">
                        <button
                            onClick={() => openGallery(0)}
                            className="px-10 py-4 rounded-full border border-slate-200 text-slate-600 font-bold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Alle Referenzen ansehen
                        </button>
                    </div>
                </div>
            </Section>

            <ProjectGalleryModal
                isOpen={isGalleryOpen}
                onClose={() => setIsGalleryOpen(false)}
                images={projectImages}
                initialIndex={selectedProjectIndex}
            />

            {/* FAQ Section */}
            <Section className="bg-white relative">
                <AnimatedBackground variant="modern-aura" />
                <div className="container mx-auto px-6 max-w-3xl relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">Support</h2>
                        <h3 className="text-4xl md:text-6xl font-bold text-slate-900">Häufig gestellte <span className="text-accent font-serif italic">Fragen</span></h3>
                    </div>
                    <div className="space-y-4">
                        {[
                            { id: 1, q: "Wie lange dauert eine komplette Badsanierung?", a: "In der Regel dauert eine Komplettsanierung eines Badezimmers zwischen 2 und 3 Wochen, abhängig von der Größe und den gewählten Materialien. Wir erstellen Ihnen vorab einen detaillierten Zeitplan." },
                            { id: 2, q: "Arbeiten Sie auch außerhalb von Ratzeburg?", a: "Ja, wir sind in ganz Schleswig-Holstein und Hamburg für Sie tätig. Sprechen Sie uns einfach an!" },
                            { id: 3, q: "Sind Ihre Angebote wirklich Festpreise?", a: "Ja! Transparenz ist unser oberstes Gebot. Das Angebot, das Sie unterschreiben, ist der Preis, den Sie zahlen – solange sich Ihre Anforderungen während des Baus nicht ändern." },
                            { id: 4, q: "Unterstützen Sie auch bei der Materialauswahl und Planung?", a: "Absolut. Wir beraten Sie nicht nur bei der Auswahl hochwertiger und langlebiger Materialien, sondern helfen Ihnen auch, das Beste aus Ihrem Budget herauszuholen. Auf Wunsch koordinieren wir auch den kompletten Einkauf für Sie." },
                            { id: 5, q: "Muss ich während der Renovierung aus der Wohnung ausziehen?", a: "Bei Teilrenovierungen (z.B. nur Bad oder Küche) können Sie meist wohnen bleiben. Bei einer Kernsanierung ist ein temporärer Auszug ratsam, um Schmutz und Lärm zu entgehen. Wir planen die Phasen so schonend wie möglich." },
                            { id: 6, q: "Gibt es eine Garantie auf die ausgeführten Arbeiten?", a: "Ja, Sie erhalten eine volle Gewährleistung nach BGB von bis zu 5 Jahren. Qualität ist unser Markenzeichen, daher verwenden wir nur zertifizierte Materialien namhafter Hersteller wie Knauf oder Brillux." }
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
