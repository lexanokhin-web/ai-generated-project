import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components (always loaded)
import ScrollToHashElement from './components/ScrollToHashElement';
import MainLayout from './components/Layout/MainLayout';
import { ModalProvider } from './context/ModalContext';

// Pages (lazy loaded)
const Home = lazy(() => import('./pages/Home'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const About = lazy(() => import('./pages/About'));
const Impressum = lazy(() => import('./pages/Impressum'));
const Datenschutz = lazy(() => import('./pages/Datenschutz'));
const AGB = lazy(() => import('./pages/AGB'));
const Blog = lazy(() => import('./pages/Blog'));
const ArticleDetail = lazy(() => import('./pages/ArticleDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading fallback für lazy-loaded Komponenten
const PageLoader = () => (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
    </div>
);

function App() {
    useEffect(() => {
        // Bestimmen des Mobilgeräts für die bedingte Initialisierung
        const isMobile = window.innerWidth < 768;

        AOS.init({
            duration: isMobile ? 600 : 800, // Schneller auf Mobilgeräten
            once: true, // Animation nur einmal — Ressourceneinsparung
            offset: 50,
            mirror: false, // Keine gespiegelten Animationen
            disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches, // Berücksichtigung der Benutzereinstellungen
            easing: 'ease-out-cubic',
        });
    }, []);

    return (
        <ModalProvider>
            <Router>
                <ScrollToHashElement />
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="/" element={<MainLayout />}>
                            <Route index element={<Home />} />
                            <Route path="uber-uns" element={<About />} />
                            <Route path="leistungen/:id" element={<ServiceDetail />} />
                            <Route path="ratgeber" element={<Blog />} />
                            <Route path="ratgeber/:id" element={<ArticleDetail />} />
                            <Route path="impressum" element={<Impressum />} />
                            <Route path="datenschutz" element={<Datenschutz />} />
                            <Route path="agb" element={<AGB />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </Suspense>
            </Router>
        </ModalProvider>
    );
}

export default App;

