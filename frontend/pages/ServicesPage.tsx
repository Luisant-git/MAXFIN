
import React from 'react';
import { SERVICES } from '../constants';
import ServiceCard from '../ui/ServiceCard';

const ServicesPage: React.FC = () => {
    return (
        <div>
            {/* Page Header */}
            <div className="bg-maxfin-light-gray py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-maxfin-dark-green">Our Services</h1>
                <p className="mt-4 text-lg text-maxfin-muted-text max-w-3xl mx-auto">
                    A comprehensive suite of services covering finance, health, business, and digital solutions to empower our community.
                </p>
            </div>

            {/* Services Grid */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service) => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
