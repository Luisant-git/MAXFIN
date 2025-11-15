import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set up event listener
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={`
                fixed bottom-8 right-8 z-50
                bg-maxfin-green text-white rounded-full p-3 shadow-lg
                hover:bg-maxfin-dark-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-maxfin-green
                transition-all duration-300 ease-in-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
            `}
            aria-label="Go to top"
        >
            <ArrowUp className="w-6 h-6" />
        </button>
    );
};

export default ScrollToTopButton;