import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHashElement = () => {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;

        if (hash) {
            // Small delay to ensure the DOM is fully rendered
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 100);
        } else {
            // If no hash, scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    return null;
};

export default ScrollToHashElement;
