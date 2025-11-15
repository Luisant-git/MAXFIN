
import React from 'react';
import { TEAM_MEMBERS } from '../constants';

const TeamPage: React.FC = () => {
    return (
        <div>
            {/* Page Header */}
            <div className="bg-maxfin-light-gray py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-maxfin-dark-green">Meet Our Team</h1>
                <p className="mt-4 text-lg text-maxfin-muted-text max-w-2xl mx-auto">
                    The passionate individuals behind MAXFIN, dedicated to driving financial inclusion.
                </p>
            </div>

            {/* Team Grid */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {TEAM_MEMBERS.map((member, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-soft text-center p-6 group transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1 border border-gray-200/80">
                            <img 
                                src={member.imageUrl} 
                                alt={member.name} 
                                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-maxfin-green/20 group-hover:border-maxfin-green transition-colors"
                            />
                            <h3 className="text-xl font-bold text-maxfin-dark-green">{member.name}</h3>
                            <p className="text-maxfin-orange font-medium">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TeamPage;
