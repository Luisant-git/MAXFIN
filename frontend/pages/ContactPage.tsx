
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
    return (
        <div>
             {/* Page Header */}
            <div className="bg-maxfin-light-gray py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-maxfin-dark-green">Contact Us</h1>
                <p className="mt-4 text-lg text-maxfin-muted-text">We'd love to hear from you. Get in touch with us today!</p>
            </div>
            
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-soft border border-gray-200/80">
                        <h2 className="text-2xl font-bold text-maxfin-dark-green mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                             <div>
                                <label htmlFor="name" className="block text-sm font-medium text-maxfin-text">Full Name</label>
                                <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-maxfin-green focus:border-maxfin-green sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-maxfin-text">Email Address</label>
                                <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-maxfin-green focus:border-maxfin-green sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="mobile" className="block text-sm font-medium text-maxfin-text">Mobile Number</label>
                                <input type="tel" id="mobile" name="mobile" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-maxfin-green focus:border-maxfin-green sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-maxfin-text">Message</label>
                                <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-maxfin-green focus:border-maxfin-green sm:text-sm"></textarea>
                            </div>
                            <button type="submit" className="w-full py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-bold text-white bg-maxfin-green hover:bg-maxfin-dark-green transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                    {/* Contact Details */}
                    <div className="space-y-6">
                         <div className="bg-white p-6 rounded-xl shadow-soft border border-gray-200/80 flex items-start space-x-4">
                            <MapPin className="w-8 h-8 text-maxfin-green mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-lg font-bold">Our Office</h3>
                                <p className="text-maxfin-muted-text">RR Complex, Service Road, Krishnagiri</p>
                                <p className="text-maxfin-muted-text">Tamil Nadu 635002, India</p>
                            </div>
                        </div>
                         <div className="bg-white p-6 rounded-xl shadow-soft border border-gray-200/80 flex items-start space-x-4">
                            <Phone className="w-8 h-8 text-maxfin-green mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-lg font-bold">Call Us</h3>
                                <p className="text-maxfin-muted-text">Mobile: <a href="tel:+917200092472" className="hover:text-maxfin-green">+91 72000 92472</a></p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-soft border border-gray-200/80 flex items-start space-x-4">
                            <Mail className="w-8 h-8 text-maxfin-green mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-lg font-bold">Email Us</h3>
                                <p className="text-maxfin-muted-text"><a href="mailto:info@maxfin.org.in" className="hover:text-maxfin-green">info@maxfin.org.in</a></p>
                                <p className="text-maxfin-muted-text"><a href="mailto:support@maxfin.org.in" className="hover:text-maxfin-green">support@maxfin.org.in</a></p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-soft border border-gray-200/80 flex items-start space-x-4">
                            <Clock className="w-8 h-8 text-maxfin-green mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-lg font-bold">Office Timings</h3>
                                <p className="text-maxfin-muted-text">Mon - Sat: 9:00 AM - 6:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map */}
                <div className="mt-16">
                    <div className="rounded-xl shadow-soft overflow-hidden">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62422.89287947!2d78.18!3d12.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac6e0000000001%3A0x0!2sKrishnagiri%2C%20Tamil%20Nadu%20635002!5e0!3m2!1sen!2sin!4v1234567890" 
                            width="100%" 
                            height="400" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
