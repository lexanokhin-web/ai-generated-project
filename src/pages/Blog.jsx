import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Section from '../components/UI/Section';
import { articles } from '../data/articles';

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Ratgeber & News | Renovierung Hamburg & SH | W&U</title>
                <meta name="description" content="Wertvolle Tipps, aktuelle Trends und Neuigkeiten rund um Renovierung in Ratzeburg, Hamburg und Schleswig-Holstein." />
                <link rel="canonical" href="https://wintuss.de/ratgeber" />

                {/* OG Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://wintuss.de/ratgeber" />
                <meta property="og:title" content="Ratgeber & Handwerker-News | Winter & Usselmann GbR" />
                <meta property="og:description" content="Alles über Sanierung, Kosten und Trends in Ratzeburg, Hamburg und Schleswig-Holstein." />
                <meta property="og:image" content="https://wintuss.de/images/og-blog.webp" />
            </Helmet>

            <div className="pt-24 pb-12 bg-slate-900 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Unser <span className="text-accent italic">Ratgeber</span></h1>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Hier teilen wir unser Fachwissen. Erfahren Sie alles über aktuelle Trends, Kosten und Tipps für Ihr nächstes Projekt.
                </p>
            </div>

            <Section className="bg-slate-50">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <Link to={`/ratgeber/${article.id}`} key={article.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block">
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                                    {article.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="text-sm text-slate-500 mb-2">{article.date} • {article.author}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-slate-600 line-clamp-3">
                                    {article.excerpt}
                                </p>
                                <div className="mt-4 text-accent font-medium flex items-center gap-2">
                                    Weiterlesen
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>
        </>
    );
};

export default Blog;
