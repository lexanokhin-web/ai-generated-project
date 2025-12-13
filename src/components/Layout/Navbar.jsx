import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${isScrolled ? 'pt-4' : 'pt-6'}`}
                id="navbar"
            >
                <div
                    className={`relative px-6 py-4 flex items-center justify-between transition-all duration-500 will-change-transform 
                    ${isScrolled
                            ? 'w-[90%] md:w-[80%] max-w-5xl rounded-full bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)]'
                            : 'w-full max-w-7xl bg-transparent'}`}
                >
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold tracking-tight text-white group flex items-center gap-2">
                        <div>
                            <span className="group-hover:text-accent transition-colors">Winter</span>
                            <span className="mx-1 text-accent">&</span>
                            Usselmann
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {[
                            { name: 'Über Uns', path: '/uber-uns' },
                            { name: 'Leistungen', path: '/#services' },
                            { name: 'Ratgeber', path: '/ratgeber' },
                            { name: 'Projekte', path: '/#projects' }
                        ].map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden lg:block">
                        <a href="#contact" className="group relative inline-block px-6 py-2.5 bg-accent text-white font-semibold text-sm rounded-full overflow-hidden shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all">
                            <span className="relative z-10">Kontakt</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <div className="w-6 h-5 flex flex-col justify-between items-end">
                            <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
                            <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
                            <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2.5' : 'w-2'}`}></span>
                        </div>
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-xl flex items-center justify-center lg:hidden"
                    >
                        <button className="absolute top-8 right-8 text-white" onClick={() => setIsMobileMenuOpen(false)}>
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="flex flex-col items-center space-y-8">
                            {[
                                { name: 'Startseite', path: '/' },
                                { name: 'Über Uns', path: '/uber-uns' },
                                { name: 'Leistungen', path: '/#services' },
                                { name: 'Ratgeber', path: '/ratgeber' },
                                { name: 'Projekte', path: '/#projects' },
                                { name: 'Kontakt', path: '/#contact' }
                            ].map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-bold text-white hover:text-accent font-serif"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
