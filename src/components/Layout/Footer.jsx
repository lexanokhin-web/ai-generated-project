import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="contact" className="bg-slate-900 text-slate-300 relative pt-24 pb-10 overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 opacity-5 blur-[100px] rounded-full"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Main CTA Area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Bereit für Ihr <span className="text-accent font-serif italic">Projekt?</span>
                        </h2>
                        <p className="text-lg text-slate-400 mb-8 max-w-md">
                            Planen Sie eine Badezimmersanierung oder eine komplette Wohnungsmodernisierung? Sprechen Sie uns
                            an. Wir beraten Sie gerne und unverbindlich.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-accent">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs uppercase text-slate-500 font-bold">Rufen Sie uns an</p>
                                    <a href="tel:015141389442"
                                        className="text-xl font-bold text-white hover:text-accent transition-colors">0151 – 413
                                        894 42</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-accent">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs uppercase text-slate-500 font-bold">Schreiben Sie uns</p>
                                    <a href="mailto:info@wintuss.de"
                                        className="text-xl font-bold text-white hover:text-accent transition-colors">info@wintuss.de</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Card */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl">
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-slate-400">Vorname</label>
                                    <input type="text"
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-accent transition-colors"
                                        placeholder="Max" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-slate-400">Nachname</label>
                                    <input type="text"
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-accent transition-colors"
                                        placeholder="Mustermann" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-slate-400">Email Adresse</label>
                                <input type="email"
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-accent transition-colors"
                                    placeholder="max@beispiel.de" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-slate-400">Nachricht</label>
                                <textarea rows="4"
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-accent transition-colors"
                                    placeholder="Erzählen Sie uns von Ihrem Projekt..."></textarea>
                            </div>
                            <button type="button"
                                className="w-full py-4 bg-accent text-white font-bold rounded-lg shadow-lg hover:bg-amber-700 transition-colors">
                                Anfrage Senden
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <h4 className="text-xl font-bold text-white">Winter & Usselmann GbR</h4>
                        <p className="text-slate-500 mt-2 text-sm">Bachstraße 36, 23909 Ratzeburg</p>
                        <p className="text-slate-500 text-sm">Geschäftsführer: Michael Winter</p>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 text-sm text-slate-500">
                        <div className="flex flex-col space-y-2">
                            <span className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Leistungen</span>
                            <Link to="/leistungen/fliesen-badsanierung" className="hover:text-white transition-colors">Badsanierung</Link>
                            <Link to="/leistungen/maler-schimmelsanierung" className="hover:text-white transition-colors">Schimmelsanierung</Link>
                            <Link to="/leistungen/trockenbauarbeiten" className="hover:text-white transition-colors">Trockenbau</Link>
                            <Link to="/leistungen/bodenbelagsarbeiten" className="hover:text-white transition-colors">Bodenbeläge</Link>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <span className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Rechtliches</span>
                            <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
                            <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
                            <Link to="/agb" className="hover:text-white transition-colors">AGB</Link>
                        </div>
                    </div>
                    <div className="text-sm text-slate-600">
                        &copy; 2025 Winter & Usselmann GbR.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
