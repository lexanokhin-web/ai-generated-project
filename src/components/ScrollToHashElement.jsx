import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHashElement = () => {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;

        if (hash) {
            // Erhöhte Verzögerung für lazy-loaded Komponenten
            const scrollToElement = () => {
                const element = document.querySelector(hash);
                if (element) {
                    // Berücksichtigung der Navbar-Höhe (ca. 80px)
                    const navbarHeight = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                } else {
                    // Wenn das Element noch nicht gerendert ist, erneut versuchen
                    setTimeout(scrollToElement, 200);
                }
            };

            // Anfängliche Verzögerung für Lazy Loading
            setTimeout(scrollToElement, 300);
        } else {
            // If no hash, scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    return null;
};

export default ScrollToHashElement;

