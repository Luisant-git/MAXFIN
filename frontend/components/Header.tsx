
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import type { NavItem } from '../types';
import { Menu, X, ChevronDown } from 'lucide-react';

const Logo = () => (
    <Link to="/" className="flex items-center space-x-2">
        <img src="/logo2.png" alt="MAXFIN Logo" className="h-16 w-100" />
    </Link>
);

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsMoreDropdownOpen(false);
    }, [location]);

    const renderNavLinks = (isMobile: boolean) => (
        NAV_ITEMS.map((item) => (
            item.subItems ? (
                <div key={item.label} className="relative">
                    <button
                        onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                        className={`flex items-center space-x-1 ${isMobile ? 'justify-between w-full p-2' : ''} hover:text-maxfin-green transition-colors duration-300`}
                    >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMoreDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isMoreDropdownOpen && (
                        <div className={`${isMobile ? 'pl-4' : 'absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-soft-lg py-2 z-20 border border-gray-200/80'}`}>
                            {item.subItems.map((subItem) => (
                                <Link
                                    key={subItem.label}
                                    to={subItem.href}
                                    className={`block ${isMobile ? 'py-2' : 'px-4 py-2'} text-maxfin-text hover:bg-maxfin-light-gray hover:text-maxfin-green`}
                                >
                                    {subItem.label}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                <Link
                    key={item.label}
                    to={item.href}
                    className={`${isMobile ? 'block p-2' : ''} hover:text-maxfin-green transition-colors duration-300`}
                >
                    {item.label}
                </Link>
            )
        ))
    );

    return (
        <header className="bg-white/90 backdrop-blur-lg shadow-soft sticky top-0 z-50 border-b border-gray-200/80">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Logo />

                    <nav className="hidden lg:flex items-center space-x-8 text-md font-medium text-maxfin-text">
                        {renderNavLinks(false)}
                    </nav>

                    <div className="hidden lg:flex items-center space-x-4">
                        <Link to="/appointment" className="text-white bg-maxfin-orange hover:bg-opacity-90 font-medium rounded-full text-sm px-5 py-2.5 text-center transition-colors">
                            Get Appointment
                        </Link>
                        <Link to="/login" className="text-maxfin-dark-green bg-white border border-maxfin-green hover:bg-maxfin-light-gray font-medium rounded-full text-sm px-5 py-2.5 text-center transition-colors">
                            Login
                        </Link>
                    </div>

                    <div className="lg:hidden">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white shadow-lg absolute top-20 left-0 w-full z-40">
                    <div className="px-4 pt-2 pb-4 space-y-2 text-md font-medium text-maxfin-text">
                        {renderNavLinks(true)}
                        <div className="border-t my-2"></div>
                        <Link to="/appointment" className="block text-center text-white bg-maxfin-orange hover:bg-opacity-90 font-medium rounded-full text-sm px-5 py-2.5 transition-colors">
                            Get Appointment
                        </Link>
                        <Link to="/login" className="block text-center text-maxfin-dark-green bg-white border border-maxfin-green hover:bg-maxfin-light-gray font-medium rounded-full text-sm px-5 py-2.5 transition-colors">
                            Login
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
