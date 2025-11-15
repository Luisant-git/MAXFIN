
import React from 'react';
import { Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ComingSoonPageProps {
  title: string;
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-16">
      <Wrench className="w-24 h-24 text-maxfin-orange/50 mb-6" />
      <h1 className="text-4xl md:text-5xl font-extrabold text-maxfin-dark-green">{title} - Coming Soon!</h1>
      <p className="mt-4 text-lg text-maxfin-muted-text max-w-xl">
        We are working hard to bring you this page. Please check back later for exciting updates.
      </p>
      <Link 
        to="/" 
        className="mt-8 text-white bg-maxfin-green hover:bg-maxfin-dark-green font-medium rounded-full text-lg px-8 py-3 text-center transition-colors duration-300"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default ComingSoonPage;
