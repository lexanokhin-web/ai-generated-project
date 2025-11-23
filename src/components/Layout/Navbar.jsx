import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}
            id="navbar"
        >
            <div className={`absolute inset-0 transition-colors duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-white/80 backdrop-blur-md shadow-sm'}`}></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold tracking-tight text-slate-900 group">
                        WINTER <span className="text-accent">&</span> USSELMANN <span className="text-sm font-normal text-slate-500 ml-1">GbR</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        <Link to="/uber-uns" className="text-sm font-medium hover:text-accent transition-colors">Über Uns</Link>
                        <a href="/#services" className="text-sm font-medium hover:text-accent transition-colors">Leistungen</a>
                        <Link to="/ratgeber" className="text-sm font-medium hover:text-accent transition-colors">Ratgeber</Link>
                        <a href="/#process" className="text-sm font-medium hover:text-accent transition-colors">Ablauf</a>
                        <a href="/#projects" className="text-sm font-medium hover:text-accent transition-colors">Referenzen</a>
                    </nav>

                    {/* CTA */}
                    <div className="hidden lg:block">
                        <a href="/#contact" className="px-6 py-2.5 bg-accent text-white font-semibold text-sm rounded-full shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-0.5 transition-all duration-300">
                            Kostenlos Beraten Lassen
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-slate-900 focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4">
                        <Link to="/uber-uns" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Über Uns</Link>
                        <a href="/#services" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Leistungen</a>
                        <a href="/#process" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Ablauf</a>
                        <a href="/#projects" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Referenzen</a>
                        <a href="/#contact" className="px-6 py-2.5 bg-accent text-white font-semibold text-sm rounded-full shadow-lg shadow-accent/30 text-center" onClick={() => setIsMobileMenuOpen(false)}>
                            Kostenlos Beraten Lassen
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
