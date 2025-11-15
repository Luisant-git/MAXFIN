
import React, { useState, useEffect, useCallback } from 'react';
import { TESTIMONIALS } from '../constants';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialPageProps {
  isHomePageSection?: boolean;
}

const TestimonialPage: React.FC<TestimonialPageProps> = ({ isHomePageSection = false }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    useEffect(() => {
        if (!isHomePageSection) return;
        const slideInterval = setInterval(nextSlide, 5000);
        return () => clearInterval(slideInterval);
    }, [isHomePageSection, nextSlide]);

    const slider = (
        <div className="relative max-w-3xl mx-auto">
            <div className="overflow-hidden relative h-80">
                {TESTIMONIALS.map((testimonial, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <div className="bg-white p-8 rounded-xl shadow-soft h-full flex flex-col items-center text-center border-t-4 border-maxfin-green">
                            <Quote className="w-12 h-12 text-maxfin-green/20 mb-4" />
                            <p className="text-maxfin-muted-text italic flex-grow">"{testimonial.quote}"</p>
                            <div className="mt-6">
                                <img src={testimonial.imageUrl} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-2"/>
                                <h4 className="font-bold text-maxfin-dark-green">{testimonial.name}</h4>
                                <p className="text-sm text-maxfin-muted-text">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
             <button onClick={prevSlide} className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-soft hover:bg-maxfin-light-gray transition-colors">
                <ChevronLeft className="w-6 h-6 text-maxfin-green" />
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-soft hover:bg-maxfin-light-gray transition-colors">
                <ChevronRight className="w-6 h-6 text-maxfin-green" />
            </button>
        </div>
    );

    if (isHomePageSection) {
        return slider;
    }

    return (
        <section className="bg-maxfin-light-gray py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-maxfin-dark-green">What Our Partners Say</h2>
                    <p className="mt-2 text-lg text-maxfin-muted-text">Real stories from our trusted agents and happy customers.</p>
                </div>
                {slider}
            </div>
        </section>
    );
};

export default TestimonialPage;
