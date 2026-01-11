import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Section from '../components/UI/Section';

const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>404 - Seite nicht gefunden | Winter & Usselmann</title>
                <meta name="robots" content="noindex, follow" />
            </Helmet>

            <Section className="min-h-[80vh] flex items-center justify-center bg-slate-900 text-white rounded-b-[3rem]">
                <div className="text-center">
                    <h1 className="text-9xl font-black text-accent mb-4">404</h1>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Hoppla! Diese Seite existiert nicht.</h2>
                    <p className="text-slate-400 text-lg mb-12 max-w-md mx-auto">
                        Vielleicht haben wir die Wand schon eingerissen. Lassen Sie uns zurück zur Startseite gehen.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/"
                            className="px-8 py-4 bg-accent text-white font-bold rounded-full hover:scale-105 transition-transform"
                        >
                            Zur Startseite
                        </Link>
                        <Link
                            to="/ratgeber"
                            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all"
                        >
                            Zum Ratgeber
                        </Link>
                    </div>

                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm opacity-60">
                        <Link to="/leistungen/fliesen-badsanierung" className="hover:text-accent">Badsanierung</Link>
                        <Link to="/leistungen/maler-schimmelsanierung" className="hover:text-accent">Malerarbeiten</Link>
                        <Link to="/leistungen/bodenbelagsarbeiten" className="hover:text-accent">Bodenbeläge</Link>
                        <Link to="/leistungen/trockenbauarbeiten" className="hover:text-accent">Trockenbau</Link>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default NotFound;
