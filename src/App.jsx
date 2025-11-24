import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import ScrollToHashElement from './components/ScrollToHashElement';

// Layouts
import MainLayout from './components/Layout/MainLayout';

// Pages
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import About from './pages/About';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import AGB from './pages/AGB';
import Blog from './pages/Blog';
import ArticleDetail from './pages/ArticleDetail';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false, // Анимация повторяется каждый раз при прокрутке
            offset: 100,
            mirror: true, // Анимация исчезает при прокрутке вверх
        });
    }, []);

    return (
        <Router>
            <ScrollToHashElement />
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
                    {/* Future routes will go here */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
