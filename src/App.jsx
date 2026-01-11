import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components (always loaded)
import ScrollToHashElement from './components/ScrollToHashElement';
import MainLayout from './components/Layout/MainLayout';

// Pages (lazy loaded)
const Home = lazy(() => import('./pages/Home'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const About = lazy(() => import('./pages/About'));
const Impressum = lazy(() => import('./pages/Impressum'));
const Datenschutz = lazy(() => import('./pages/Datenschutz'));
const AGB = lazy(() => import('./pages/AGB'));
const Blog = lazy(() => import('./pages/Blog'));
const ArticleDetail = lazy(() => import('./pages/ArticleDetail'));

// Loading fallback для lazy-loaded компонентов
const PageLoader = () => (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
    </div>
);

function App() {
    useEffect(() => {
        // Определяем мобильное устройство для условной инициализации
        const isMobile = window.innerWidth < 768;

        AOS.init({
            duration: isMobile ? 600 : 800, // Быстрее на мобильных
            once: true, // Анимация только один раз — экономия ресурсов
            offset: 50,
            mirror: false, // Убираем зеркальную анимацию
            disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches, // Учитываем пользовательские настройки
            easing: 'ease-out-cubic',
        });
    }, []);

    return (
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
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;

