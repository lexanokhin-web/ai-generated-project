import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from './UI/Modal'
import ContactModalForm from './UI/ContactModalForm'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300" id="navbar">
            <div className="absolute inset-0 bg-white/80 backdrop-blur-md shadow-sm"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold tracking-tight text-slate-900 group">
                        WINTER <span className="text-accent">&</span> USSELMANN <span
                            className="text-sm font-normal text-slate-500 ml-1">GbR</span>
                    </Link>

                    <nav className="hidden lg:flex items-center space-x-8">
                        <Link to="/uber-uns" className="text-sm font-medium hover:text-accent transition-colors">Über Uns</Link>
                        <a href="/#services" className="text-sm font-medium hover:text-accent transition-colors">Leistungen</a>
                        <a href="/#projects" className="text-sm font-medium hover:text-accent transition-colors">Projekte & Referenzen</a>
                        <a href="/#calculator" className="text-sm font-medium hover:text-accent transition-colors">Kostenrechner</a>
                        <a href="/#contact" className="text-sm font-medium hover:text-accent transition-colors">Kontakt</a>
                    </nav>

                    {/* CTA */}
                    <div className="hidden lg:block">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-6 py-2.5 bg-accent text-white font-semibold text-sm rounded-full shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Kostenlos Beraten Lassen
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-slate-900 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4">
                    <Link to="/uber-uns" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>Über Uns</Link>
                    <a href="/#services" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>Leistungen</a>
                    <a href="/#projects" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>Projekte &amp; Referenzen</a>
                    <a href="/#calculator" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>Kostenrechner</a>
                    <a href="/#contact" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>Kontakt</a>
                    <button
                        onClick={() => {
                            setIsOpen(false);
                            setIsModalOpen(true);
                        }}
                        className="px-6 py-3 bg-accent text-white font-bold text-sm rounded-full shadow-lg shadow-accent/30 text-center"
                    >
                        Kostenlos Beraten Lassen
                    </button>
                </div>
            )}

            {/* Contact Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Kostenlose Erstberatung"
            >
                <ContactModalForm />
            </Modal>
        </header>
    )
}

export default Navbar
