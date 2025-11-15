import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { HERO_SLIDES, SERVICES, PAIN_SOLUTIONS_FEATURES, MAJOR_SERVICES, BLOG_POSTS } from '../constants';
import ServiceCard from '../ui/ServiceCard';
import TestimonialPage from './TestimonialPage';
import { ArrowRight, ChevronLeft, ChevronRight, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { images } from '../images';

const HomePage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    };
    
    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 7000); // 7 seconds per slide
        return () => clearInterval(slideInterval);
    }, [nextSlide]);

    return (
        <div className="pb-20">
            {/* Social Media Sidebar */}
            <div className="social-media-sidebar">
                <a href="#" className="social-icon" style={{ backgroundColor: '#1877F2' }}>
                    <Facebook size={24} />
                </a>
                <a href="#" className="social-icon" style={{ backgroundColor: '#1DA1F2' }}>
                    <Twitter size={24} />
                </a>
                <a href="#" className="social-icon" style={{ backgroundColor: '#E4405F' }}>
                    <Instagram size={24} />
                </a>
                <a href="#" className="social-icon" style={{ backgroundColor: '#0A66C2' }}>
                    <Linkedin size={24} />
                </a>
                {/* <a href="#" className="social-icon" style={{ backgroundColor: '#25D366' }}>
                    <MessageCircle size={24} />
                </a> */}
            </div>
            {/* Hero Slider Section */}
            <section className="relative h-[80vh] md:h-screen w-full text-white -mt-">
                <div className="w-full h-full">
                    {HERO_SLIDES.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${slide.imageUrl})` }}
                            />
                            {/* <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
                                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
                                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl mx-auto drop-shadow-lg">
                                        {slide.title}
                                    </h1>
                                    <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
                                        {slide.subtitle}
                                    </p>
                                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                                        <Link to={slide.cta1_link} className="inline-block bg-maxfin-green text-white font-bold py-3 px-8 rounded-full hover:bg-maxfin-dark-green transition-transform duration-300 hover:scale-105 shadow-lg">
                                            {slide.cta1_text}
                                        </Link>
                                        <Link to={slide.cta2_link} className="inline-block bg-white text-maxfin-green font-bold py-3 px-8 rounded-full border-2 border-transparent hover:bg-gray-200 transition-transform duration-300 hover:scale-105 shadow-lg">
                                            {slide.cta2_text}
                                        </Link>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    ))}
                </div>

                {/* Slider Controls */}
                <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-maxfin-green hover:bg-maxfin-dark-green text-white rounded-full p-2 transition-colors z-10">
                    <ChevronLeft size={32} />
                </button>
                <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-maxfin-green hover:bg-maxfin-dark-green text-white rounded-full p-2 transition-colors z-10">
                    <ChevronRight size={32} />
                </button>

                {/* Slider Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
                    {HERO_SLIDES.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </section>
            
            <div className="space-y-20 md:space-y-28 mt-20 md:mt-28">

            {/* What We Do Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-maxfin-dark-green">Our Core Services</h2>
                    <p className="mt-2 text-lg text-maxfin-muted-text">Comprehensive solutions for your financial, health, and business needs.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SERVICES.slice(0, 8).map((service) => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </div>
            </section>

            {/* About Us Section */}
            <section className="bg-maxfin-light-gray py-20 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-maxfin-dark-green mb-4">About Us</h2>
                            <h3 className="text-xl font-semibold text-maxfin-text mb-4">We are Ready to Help Improve Your Lifestyle..!</h3>
                            <p className="text-maxfin-muted-text mb-4 leading-relaxed">
                                (Health and Wealth With Financial Freedom). We are dedicated to providing holistic solutions that empower you to live a healthier, wealthier, and more balanced life. Our expert team is here to guide you on your journey to personal and financial well-being.
                            </p>
                            <Link to="/about" className="inline-flex items-center space-x-2 text-maxfin-green font-semibold hover:text-maxfin-dark-green transition-colors">
                                <span>Learn More About Us</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                         <div className="relative">
                            <img src={images.about1} alt="Lifestyle Improvement" className="rounded-xl shadow-soft-lg w-100 h-full object-cover"/>
                            <div className="absolute -bottom-8 -left-6 w-40 h-30 rounded-full overflow-hidden border-8 border-white shadow-xl home-about-small-img">
                                <img src={images.about2} alt="MAXFIN Services" className="w-full h-full object-cover"/>
                            </div>
                        </div>
                     </div>
                </div>
            </section>
            
            {/* Solutions To Your Pain Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative cursor-pointer group max-w-md mx-auto">
                        <img src={images.videoImg} alt="Solutions to your pain" className="rounded-xl shadow-soft-lg w-full h-auto object-cover"/>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                                <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-1"></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-maxfin-dark-green mb-2">Solutions To Your Pain</h2>
                        <p className="font-semibold text-maxfin-text mb-4">Best Quality Services With Minimal Pain Rate</p>
                        <p className="text-maxfin-muted-text mb-6 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!
                        </p>
                        <div className="space-y-6">
                            {PAIN_SOLUTIONS_FEATURES.map((feature) => (
                                <div key={feature.title} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 bg-maxfin-green/10 p-3 rounded-full mt-1">
                                        <feature.icon className="w-6 h-6 text-maxfin-green" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-maxfin-dark-green">{feature.title}</h3>
                                        <p className="text-maxfin-muted-text">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Get In Touch CTA */}
             <section className="bg-maxfin-green">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <h2 className="text-3xl font-extrabold text-white">Get In Touch</h2>
                    <p className="mt-2 text-lg text-white/90 max-w-2xl mx-auto">Ready to start your journey? Our team is here to help you achieve your health and wealth goals.</p>
                    <Link to="/appointment" className="mt-6 inline-block bg-maxfin-orange text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors duration-300">
                        Get Appointment
                    </Link>
                </div>
            </section>

            {/* Major Services Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-maxfin-dark-green">Meet Our Team Business</h2>
                    <p className="mt-2 text-lg text-maxfin-muted-text">Our Team Major Services</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {MAJOR_SERVICES.map((service, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-soft overflow-hidden group transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1 border border-gray-200/80">
                            {service.imageUrl && (
                                <div className="relative">
                                    <img src={service.imageUrl} alt={service.title} className="h-40 w-full object-contain bg-gray-50" />
                                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md">
                                        <service.icon className="w-5 h-5 text-maxfin-green" />
                                    </div>
                                </div>
                            )}
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-bold text-maxfin-dark-green">{service.title}</h3>
                                <p className="text-maxfin-muted-text text-sm mt-1">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* Testimonials Section */}
            <section className="bg-maxfin-light-gray py-20 md:py-24">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-maxfin-dark-green">What Our Clients Say</h2>
                <p className="mt-2 text-lg text-maxfin-muted-text">Real stories from people we've helped.</p>
              </div>
              <TestimonialPage isHomePageSection={true} />
            </section>

            {/* Our Blog Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-maxfin-dark-green">Our Latest Insights</h2>
                    <p className="mt-2 text-lg text-maxfin-muted-text">Stay informed with news and tips on health and finance.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {BLOG_POSTS.slice(0, 4).map((post, index) => (
                         <div key={index} className="bg-white rounded-xl shadow-soft overflow-hidden group transition-shadow hover:shadow-soft-lg flex flex-col border border-gray-200/80">
                            <img src={post.imageUrl} alt={post.title} className="h-48 w-full object-cover" />
                            <div className="p-4 flex flex-col flex-grow">
                                <p className="text-sm font-semibold text-maxfin-green">{post.category}</p>
                                <h3 className="mt-1 text-md font-bold text-maxfin-dark-green flex-grow">{post.title}</h3>
                                <div className="mt-4">
                                     <Link to="/blog" className="font-semibold text-sm text-maxfin-orange hover:text-maxfin-dark-green">Read More &rarr;</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <Link to="/blog" className="text-maxfin-green font-semibold hover:underline">
                        View All Blog Posts
                    </Link>
                </div>
            </section>
        </div>
        </div>
    );
};

export default HomePage;