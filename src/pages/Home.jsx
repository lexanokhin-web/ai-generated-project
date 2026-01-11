import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import StructuredData from '../components/SEO/StructuredData';

// Секции страницы
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
    FAQSection
} from '../components/sections';

// Schema.org данные для Local Business
const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Winter & Usselmann GbR",
    "image": "https://wintuss.de/images/logo.webp",
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
    "url": "https://example.com",
    "telephone": "+4915141389442",
    "email": "info@wintuss.de",
    "priceRange": "€€",
    "areaServed": [
        { "@type": "City", "name": "Ratzeburg" },
        { "@type": "State", "name": "Schleswig-Holstein" }
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

const Home = memo(() => {
    return (
        <>
            <Helmet>
                <title>Renovierung Ratzeburg & Schleswig-Holstein | Winter & Usselmann GbR</title>
                <meta name="description" content="Ihr zuverlässiger Partner für Renovierung, Sanierung und Innenausbau in Ratzeburg und ganz Schleswig-Holstein. Qualität, Transparenz und Festpreise." />
                <meta name="keywords" content="Renovierung Ratzeburg, Sanierung Schleswig-Holstein, Handwerker Ratzeburg, Badsanierung, Malerarbeiten, Trockenbau, Bodenverlegung" />

                <link rel="canonical" href="https://wintuss.de/" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://wintuss.de/" />
                <meta property="og:title" content="Renovierung Ratzeburg & Schleswig-Holstein | Winter & Usselmann GbR" />
                <meta property="og:description" content="Ihr zuverlässiger Partner für Renovierung, Sanierung und Innenausbau in Ratzeburg und ganz Schleswig-Holstein. Qualität, Transparenz und Festpreise." />
                <meta property="og:image" content="https://wintuss.de/images/image-1.webp" />
                <meta property="og:locale" content="de_DE" />
                <meta property="og:site_name" content="Winter & Usselmann GbR" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://wintuss.de/" />
                <meta property="twitter:title" content="Renovierung Ratzeburg & Schleswig-Holstein | Winter & Usselmann GbR" />
                <meta property="twitter:description" content="Ihr zuverlässiger Partner für Renovierung, Sanierung und Innenausbau in Ratzeburg und ganz Schleswig-Holstein." />
                <meta property="twitter:image" content="https://wintuss.de/images/image-1.webp" />
            </Helmet>

            <StructuredData data={localBusinessSchema} />

            {/* Секции страницы — каждая мемоизирована и оптимизирована */}
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
        </>
    );
});

Home.displayName = 'Home';

export default Home;
