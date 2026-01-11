import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHashElement = () => {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;

        if (hash) {
            // Увеличенная задержка для lazy-loaded компонентов
            const scrollToElement = () => {
                const element = document.querySelector(hash);
                if (element) {
                    // Учитываем высоту navbar (примерно 80px)
                    const navbarHeight = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                } else {
                    // Если элемент ещё не отрендерен, пробуем снова
                    setTimeout(scrollToElement, 200);
                }
            };

            // Начальная задержка для lazy loading
            setTimeout(scrollToElement, 300);
        } else {
            // If no hash, scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    return null;
};

export default ScrollToHashElement;

