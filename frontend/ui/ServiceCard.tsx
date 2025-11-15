
import React from 'react';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import type { Service } from '../../types';

type ServiceCardProps = Omit<Service, 'description'> & { description: string };


const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, imageUrl, href }) => {
  return (
    <div className="bg-white rounded-xl shadow-soft overflow-hidden group transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1 border border-gray-200/80 flex flex-col">
      <div className="relative">
        <img src={imageUrl} alt={title} className="h-48 w-full object-contain bg-gray-50" />
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-md">
          <Icon className="w-6 h-6 text-maxfin-green" />
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-maxfin-dark-green mb-2">{title}</h3>
        <p className="text-maxfin-muted-text flex-grow mb-4">{description}</p>
        <div className="mt-auto">
          <Link 
            to={href} 
            className="block w-full text-center bg-maxfin-orange text-white font-semibold py-2.5 px-4 rounded-full hover:bg-opacity-90 transition-colors duration-300"
          >
            Click Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
