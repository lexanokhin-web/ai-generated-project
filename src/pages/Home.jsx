import React, { memo } from 'react';
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
    "name": "Winter & Usselmann GbR",
    "image": "https://www.wintuss.de/images/logo.webp",
    "description": "Ihr zuverlässiger Partner für Renovierung, Sanierung und Innenausbau in Lübeck, Hamburg und ganz Schleswig-Holstein.",
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
        "latitude": 53.7024,
        "longitude": 10.7628
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
    }
};

const Home = memo(() => {
    return (
        <>
            <Helmet>
                <title>Renovierung & Sanierung | Lübeck, Hamburg & Schleswig-Holstein</title>
                <meta name="description" content="Spezialist für Renovierung und Sanierung in Lübeck, Hamburg und ganz Schleswig-Holstein. Badsanierung, Bodenbeläge & Innenausbau zum Festpreis." />
                <meta name="keywords" content="Renovierung Lübeck, Sanierung Hamburg, Handwerker Schleswig-Holstein, Badsanierung, Malerarbeiten, Trockenbau, Elektroarbeiten, Heizungsarbeiten, Asbestsanierung, Winter Usselmann" />

                <link rel="canonical" href="https://www.wintuss.de/" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.wintuss.de/" />
                <meta property="og:title" content="Renovierung & Sanierung | Lübeck, Hamburg & Schleswig-Holstein" />
                <meta property="og:description" content="Ihr Partner für Renovierung und Sanierung in Lübeck, Hamburg und ganz Schleswig-Holstein. Qualität & Festpreise." />
                <meta property="og:image" content="https://www.wintuss.de/images/image-1.webp" />
                <meta property="og:locale" content="de_DE" />
                <meta property="og:site_name" content="Winter & Usselmann GbR" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.wintuss.de/" />
                <meta property="twitter:title" content="Renovierung & Sanierung | Lübeck, Hamburg & Schleswig-Holstein" />
                <meta property="twitter:description" content="Ihr zuverlässiger Partner für Renovierung, Sanierung und Innenausbau in Lübeck, Hamburg und Schleswig-Holstein." />
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
        </>
    );
});

Home.displayName = 'Home';

export default Home;
