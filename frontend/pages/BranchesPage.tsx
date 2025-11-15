
import React from 'react';
import { BRANCHES } from '../constants';
import { MapPin, Phone } from 'lucide-react';

const BranchesPage: React.FC = () => {
    return (
        <div>
            {/* Page Header */}
            <div className="bg-maxfin-light-gray py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-maxfin-dark-green">Our Branches</h1>
                <p className="mt-4 text-lg text-maxfin-muted-text max-w-2xl mx-auto">
                    Find a MAXFIN Makkal Sevai Maiyam near you. We are present across the nation.
                </p>
            </div>

            {/* Branches Grid */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BRANCHES.map((branch, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-soft p-6 flex flex-col border border-gray-200/80">
                            <h3 className="text-2xl font-bold text-maxfin-dark-green mb-4">{branch.city}</h3>
                            <div className="flex-grow space-y-3">
                                <div className="flex items-start space-x-3 text-maxfin-muted-text">
                                    <MapPin className="w-5 h-5 mt-1 text-maxfin-green flex-shrink-0" />
                                    <span>{branch.address}</span>
                                </div>
                                <div className="flex items-center space-x-3 text-maxfin-muted-text">
                                    <Phone className="w-5 h-5 text-maxfin-green flex-shrink-0" />
                                    <a href={`tel:${branch.phone}`} className="hover:text-maxfin-green">{branch.phone}</a>
                                </div>
                            </div>
                            <div className="mt-6">
                                <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-base font-medium rounded-full text-white bg-maxfin-orange hover:bg-opacity-90">
                                    View on Map
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default BranchesPage;
