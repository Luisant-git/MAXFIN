
import React from 'react';
import { Target, Eye, Award } from 'lucide-react';

const TimelineItem = ({ year, title, children }: { year: string, title: string, children: React.ReactNode }) => (
    <div className="relative pl-8 sm:pl-32 py-6 group timeline-item">
        <div className="font-bold text-maxfin-green sm:absolute top-8 left-0 sm:w-28 sm:text-right pr-4 timeline-year">{year}</div>
        <div className="flex flex-col sm:flex-row items-center">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-maxfin-green/20 group-hover:bg-maxfin-green text-maxfin-green group-hover:text-white grid place-items-center transition-all duration-300 timeline-circle">
                <div className="w-3 h-3 bg-maxfin-green rounded-full group-hover:bg-white"></div>
            </div>
            <div className="w-px h-full bg-maxfin-green/20 sm:w-full sm:h-px sm:bg-maxfin-green/20 sm:ml-4"></div>
        </div>
        <div className="pl-4 sm:pl-0 sm:ml-40 mt-4 sm:-mt-10 timeline-content">
            <span className="font-bold text-maxfin-dark-green text-xl capitalize">{title}</span>
            <p className="mt-2 text-maxfin-muted-text">{children}</p>
        </div>
    </div>
);


const AboutPage: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Page Header */}
            <div className="bg-maxfin-light-gray py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-maxfin-dark-green">About MAXFIN</h1>
                <p className="mt-4 text-lg text-maxfin-muted-text">Our Journey, Our Mission, Our Vision</p>
            </div>

            {/* Company Story */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-maxfin-dark-green mb-4">Our Story: Makkal Sevai Maiyam</h2>
                        <p className="text-maxfin-muted-text mb-4 leading-relaxed">
                            MAXFIN was born from a simple yet powerful idea: to make financial services accessible to every corner of India. As "Makkal Sevai Maiyam" (People's Service Center), our mission has always been to empower local communities by providing them with secure, reliable, and easy-to-use digital financial tools.
                        </p>
                        <p className="text-maxfin-muted-text leading-relaxed">
                            We started with a small team of passionate individuals and a vision to bridge the gap between traditional banking and the unbanked population. Today, we are proud to have a vast network of agents who are not just business partners, but an integral part of our mission to foster financial inclusion across the nation.
                        </p>
                    </div>
                     <div className="relative">
                        <img src="/about-1.jpg" alt="MAXFIN Team" className="rounded-xl shadow-soft-lg w-50 h-full object-cover"/>
                        <div className="about-small-img absolute -bottom-12 -left-8 w-48 h-50 rounded-full overflow-hidden border-8 border-white shadow-xl">
                            <img src="/about-2.jpg" alt="MAXFIN Services" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                 </div>
            </section>
            
            {/* Mission & Vision */}
            <section className="bg-maxfin-light-gray py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-soft border border-gray-200/80">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="bg-maxfin-green/10 p-3 rounded-full"><Target className="w-8 h-8 text-maxfin-green" /></div>
                            <h3 className="text-2xl font-bold text-maxfin-dark-green">Our Mission</h3>
                        </div>
                        <p className="text-maxfin-muted-text">To empower individuals and small businesses by providing accessible, secure, and innovative digital financial services, fostering economic growth and inclusion for all.</p>
                    </div>
                     <div className="bg-white p-8 rounded-xl shadow-soft border border-gray-200/80">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="bg-maxfin-orange/10 p-3 rounded-full"><Eye className="w-8 h-8 text-maxfin-orange" /></div>
                            <h3 className="text-2xl font-bold text-maxfin-dark-green">Our Vision</h3>
                        </div>
                        <p className="text-maxfin-muted-text">To become India's most trusted and widespread fintech network, recognized for our commitment to customer-centricity, technological excellence, and social responsibility.</p>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h2 className="text-3xl font-bold text-maxfin-dark-green mb-12 text-center">Our Milestones</h2>
                <div className="relative">
                    <div className="hidden sm:block absolute h-full w-px bg-maxfin-green/20 left-32"></div>
                    <TimelineItem year="2018" title="The Beginning">MAXFIN was founded with a mission to bring digital banking services to rural India.</TimelineItem>
                    <TimelineItem year="2019" title="1,000 Agents Onboarded">We reached our first major milestone, building a strong network of 1,000 trusted agents.</TimelineItem>
                    <TimelineItem year="2020" title="Launched Micro ATM Services">Expanded our service portfolio with Micro ATMs, enabling card-based transactions.</TimelineItem>
                    <TimelineItem year="2022" title="1 Million Transactions">Processed over one million successful transactions in a single month, showcasing platform stability.</TimelineItem>
                    <TimelineItem year="2023" title="Award for Financial Inclusion">Recognized with the "Excellence in Financial Inclusion" award for our impact on underserved communities.</TimelineItem>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
