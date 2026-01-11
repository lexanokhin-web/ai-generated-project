import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import StructuredData from '../components/SEO/StructuredData';
import Section from '../components/UI/Section';
import { articles } from '../data/articles';

const ArticleDetail = () => {
    const { id } = useParams();
    const article = articles.find(a => a.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!article) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
                <h1 className="text-3xl font-bold text-slate-900 mb-4">Artikel nicht gefunden</h1>
                <Link to="/ratgeber" className="text-accent hover:underline">Zurück zur Übersicht</Link>
            </div>
        );
    }

    // Article Schema Data
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": article.title,
        "image": `https://wintuss.de${article.image}`,
        "author": {
            "@type": "Person",
            "name": article.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "Winter & Usselmann GbR",
            "logo": {
                "@type": "ImageObject",
                "url": "https://wintuss.de/images/logo.webp"
            }
        },
        "datePublished": article.date,
        "description": article.excerpt,
        "inLanguage": "de-DE"
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
                "name": "Ratgeber",
                "item": "https://wintuss.de/ratgeber"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": article.title,
                "item": `https://wintuss.de/ratgeber/${article.id}`
            }
        ]
    };

    return (
        <>
            <Helmet>
                <title>{`${article.title} | Ratgeber Winter & Usselmann`}</title>
                <meta name="description" content={article.excerpt} />
                <link rel="canonical" href={`https://wintuss.de/ratgeber/${article.id}`} />

                {/* OG Tags */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://wintuss.de/ratgeber/${article.id}`} />
                <meta property="og:title" content={`${article.title} | Ratgeber Winter & Usselmann`} />
                <meta property="og:description" content={article.excerpt} />
                <meta property="og:image" content={`https://wintuss.de${article.image}`} />
            </Helmet>

            <StructuredData data={articleSchema} />
            <StructuredData data={breadcrumbSchema} />

            {/* Hero Image */}
            <div className="relative h-[50vh] min-h-[400px]">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center">
                    <div className="container mx-auto px-6 text-center">
                        <span className="inline-block bg-accent text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
                            {article.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-4xl mx-auto leading-tight">
                            {article.title}
                        </h1>
                        <div className="text-slate-300">
                            {article.date} • Von {article.author}
                        </div>
                    </div>
                </div>
            </div>

            <Section className="bg-white">
                <div className="max-w-3xl mx-auto">
                    {/* Article Content */}
                    <div
                        className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-a:text-accent hover:prose-a:text-amber-700 prose-img:rounded-xl"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />

                    {/* Share / Back Links */}
                    <div className="mt-12 pt-8 border-t border-slate-200 flex justify-between items-center">
                        <Link to="/ratgeber" className="text-slate-600 hover:text-accent font-medium flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Zurück zur Übersicht
                        </Link>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <section className="bg-slate-900 py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 blur-[80px] rounded-full"></div>
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Haben Sie Fragen zu diesem Thema?
                            </h2>
                            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                                Wir beraten Sie gerne persönlich und individuell zu Ihrem Bauvorhaben.
                            </p>
                            <Link to="/#contact" className="inline-block px-8 py-3 bg-accent text-white font-bold rounded-lg hover:bg-amber-700 transition-colors">
                                Kontakt aufnehmen
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ArticleDetail;
