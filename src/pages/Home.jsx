import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import StructuredData from '../components/SEO/StructuredData';

// Seitenabschnitte
import {
    HeroSection,
    MarqueeSection,
    AboutSection,
    ServicesSection,
    ReasonsSection,
    ProcessSection,
    ComparisonSection,
    StatsSection,
    ReviewsSection,
    ProjectsSection,
    FAQSection,
    CalculatorSection
} from '../components/sections';

// Schema.org Daten für Local Business
const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Winter & Usselmann Lübeck",
    "image": "https://www.wintuss.de/images/logo.webp",
    "description": "Ihr zuverlässiger Handwerker für Renovierung & Sanierung in Lübeck, Hamburg und ganz Schleswig-Holstein. Badsanierung & Innenausbau zum Festpreis.",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jägerstraße 24a",
        "addressLocality": "Ratzeburg",
        "postalCode": "23909",
        "addressCountry": "DE",
        "addressRegion": "Schleswig-Holstein"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 53.8655,
        "longitude": 10.6866
    },
    "url": "https://www.wintuss.de",
    "telephone": "+4915141389442",
    "email": "info@wintuss.de",
    "priceRange": "€€",
    "areaServed": [
        { "@type": "City", "name": "Lübeck" },
        { "@type": "City", "name": "Hamburg" },
        { "@type": "City", "name": "Ratzeburg" },
        { "@type": "State", "name": "Schleswig-Holstein" }
    ],
    "founder": [
        {
            "@type": "Person",
            "name": "Michael Winter"
        },
        {
            "@type": "Person",
            "name": "Alex Usselmann"
        }
    ],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Handwerksleistungen",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Maurer- & Putzarbeiten" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Maler & Schimmelsanierung" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fliesen & Badsanierung" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Trockenbauarbeiten" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bodenbelagsarbeiten" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tischler & Küchen" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Elektroarbeiten" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Heizungsarbeiten" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Asbestsanierung" } }
        ]
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "24"
    },
    "review": [
        {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Familie Müller" },
            "datePublished": "2024-11-15",
            "reviewBody": "Die Badsanierung in Lübeck lief wie am Schnürchen. Besonders die Sauberkeit hat uns beeindruckt.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
        },
        {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Marc Jensen" },
            "datePublished": "2024-10-02",
            "reviewBody": "Hervorragende Arbeit bei unserem Altbau in Hamburg. Pünktlich, sauber und fachlich top.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
        }
    ]
};

const Home = memo(() => {
    return (
        <>
            <Helmet>
                <title>Renovierung & Sanierung Lübeck | Winter & Usselmann GbR</title>
                <meta name="description" content="Spezialist für Renovierung, Sanierung & Badsanierung in Lübeck, Hamburg & Schleswig-Holstein. Ihr Partner für exklusiven Innenausbau zum Festpreis." />
                <meta name="keywords" content="Renovierung Lübeck, Sanierung Lübeck, Handwerker Lübeck, Badsanierung Schleswig-Holstein, Malerarbeiten Lübeck, Trockenbau, Winter Usselmann" />

                <link rel="canonical" href="https://www.wintuss.de/" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.wintuss.de/" />
                <meta property="og:title" content="Renovierung & Sanierung Lübeck | Winter & Usselmann" />
                <meta property="og:description" content="Ihr Partner für Renovierung und Sanierung in Lübeck, Hamburg und ganz Schleswig-Holstein. Qualität & Festpreise." />
                <meta property="og:image" content="https://www.wintuss.de/images/image-1.webp" />
                <meta property="og:locale" content="de_DE" />
                <meta property="og:site_name" content="Winter & Usselmann GbR" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.wintuss.de/" />
                <meta property="twitter:title" content="Renovierung & Sanierung Lübeck | Winter & Usselmann" />
                <meta property="twitter:description" content="Ihr zuverlässiger Partner für Renovierung, Sanierung und Innenausbau in Lübeck und SH." />
                <meta property="twitter:image" content="https://www.wintuss.de/images/image-1.webp" />
            </Helmet>

            <StructuredData data={localBusinessSchema} />

            {/* Seitenabschnitte — jeder ist memoisiert und optimiert */}
            <HeroSection />
            <MarqueeSection />
            <AboutSection />
            <ServicesSection />
            <ReasonsSection />
            <ProcessSection />
            <ComparisonSection />
            <StatsSection />
            <ReviewsSection />
            <ProjectsSection />
            <FAQSection />
            <CalculatorSection />
            {/* Local SEO Footer - Subtle Link Block or Text */}
            <div className="bg-slate-50 py-12 border-t border-slate-200">
                <div className="container mx-auto px-6 text-center">
                    <h4 className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">Expertise in Norddeutschland</h4>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-500 font-medium">
                        <Link to="/renovierung-luebeck" className="hover:text-accent transition-colors">Renovierung Lübeck</Link>
                        <Link to="/badsanierung-schleswig-holstein" className="hover:text-accent transition-colors">Badsanierung Schleswig-Holstein</Link>
                        <Link to="/sanierung-luebeck" className="hover:text-accent transition-colors">Sanierung Lübeck</Link>
                        <Link to="/renovierung-hamburg" className="hover:text-accent transition-colors">Renovierung Hamburg</Link>
                        <Link to="/badsanierung-kiel" className="hover:text-accent transition-colors">Badsanierung Kiel</Link>
                        <Link to="/badsanierung-ahrensburg" className="hover:text-accent transition-colors">Badsanierung Ahrensburg</Link>
                    </div>
                </div>
            </div>
        </>
    );
});

Home.displayName = 'Home';

export default Home;
