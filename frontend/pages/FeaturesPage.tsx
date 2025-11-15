
import React from 'react';
import { PLATFORM_FEATURES } from '../constants';
import type { Feature } from '../types';

const FeatureCard: React.FC<Feature> = ({ icon: Icon, title, description }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 bg-maxfin-green/10 p-4 rounded-full">
            <Icon className="w-8 h-8 text-maxfin-green" />
        </div>
        <div>
            <h3 className="text-xl font-bold text-maxfin-dark-green">{title}</h3>
            <p className="mt-1 text-maxfin-muted-text">{description}</p>
        </div>
    </div>
);

const FeaturesPage: React.FC = () => {
    return (
        <div>
            {/* Page Header */}
            <div className="bg-maxfin-light-gray py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-maxfin-dark-green">Platform Features</h1>
                <p className="mt-4 text-lg text-maxfin-muted-text max-w-3xl mx-auto">
                    Discover the powerful features that make MAXFIN the preferred choice for digital financial services.
                </p>
            </div>

            {/* Features Grid */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12">
                    {PLATFORM_FEATURES.map((feature) => (
                        <FeatureCard key={feature.title} {...feature} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default FeaturesPage;
