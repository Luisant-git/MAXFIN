import { Wallet, Landmark, Smartphone, CreditCard, Receipt, ShieldCheck, UserCheck, Phone, Gauge, Users, Languages, BarChart, Gem, BrainCircuit, MessageSquare, Briefcase, FileText, Code, HelpCircle, Tag, HeartPulse, Brain, Smile, Banknote, Sprout, HandCoins, BookOpenCheck, GraduationCap, Calculator, Globe } from 'lucide-react';
import type { NavItem, Service, Feature, TeamMember, Testimonial, BlogPost, Branch, HeroSlide } from './types';
import { images } from './images';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  // {
  //   label: 'More',
  //   href: '#',
  //   subItems: [
  //     { label: 'Appointment', href: '/appointment' },
  //     { label: 'Features', href: '/features' },
  //     { label: 'Our Blog', href: '/blog' },
  //     { label: 'Our Team', href: '/team' },
  //     { label: 'Testimonial', href: '/testimonial' },
  //   ],
  // },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Our Branches', href: '/branches' },
];

export const MORE_DROPDOWN_EXTRA_ITEMS: NavItem[] = [
    { label: 'FAQ', href: '/faq' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Retailer Signup', href: '/retailer-signup' },
    { label: 'Distributor Signup', href: '/distributor-signup' },
    { label: 'API Documentation', href: '/api-docs' },
]

export const HERO_SLIDES: HeroSlide[] = [
  {
    imageUrl: images.b1,
      title: 'Improve Your Lifestyle with Financial Freedom',
    subtitle: 'We provide holistic solutions for your health and wealth, empowering you to live a balanced and prosperous life.',
    cta1_text: 'Explore Services',
    cta1_link: '/services',
    cta2_text: 'Get Appointment',
    cta2_link: '/appointment',
  },
  {
    imageUrl: images.b2,
    title: 'Your Trusted Partner in Digital Finance',
    subtitle: 'Secure and instant transactions, available 24/7. Join thousands of successful agents across the nation.',
    cta1_text: 'Become a Retailer',
    cta1_link: '/retailer-signup',
    cta2_text: 'Learn More',
    cta2_link: '/about',
  },
  {
    imageUrl: images.b3,
    title: 'Comprehensive Health & Wellness Solutions',
    subtitle: 'Discover a new path to well-being with our expert guidance and premium supplementary products.',
    cta1_text: 'Our Health Services',
    cta1_link: '/services/max-health',
    cta2_text: 'Contact Us',
    cta2_link: '/contact',
  }
];


const createServiceUrl = (title: string) => `/services/${title.toLowerCase().replace(/ & /g, ' ').replace(/\s+/g, '-')}`;

export const SERVICES: Service[] = [
  { icon: Banknote, title: 'Financial Services', description: 'Banking Transaction Services Based Income Oppourtunity.', imageUrl: images.service1, href: createServiceUrl('Financial Services') },
  { icon: Smartphone, title: 'Digital Recharge Services', description: 'Mobile, DTH, Fast Tag, EB-Bill, Insurance Billings, Loan EMI Billing, ETC.', imageUrl: images.service2, href: createServiceUrl('Digital Recharge Services') },
  { icon: HeartPulse, title: 'Max Health', description: 'Wellness & Health Based Supplementry Product Services.', imageUrl: images.service3, href: createServiceUrl('Max Health') },
  { icon: Sprout, title: 'Sun Health And Wealthi', description: 'Wellness & Health Based Supplementry Products & Additional Services.', imageUrl: images.service4, href: createServiceUrl('Sun Health And Wealthi') },
  { icon: ShieldCheck, title: 'Insurance Services', description: 'Life, Health And General Insurances Services Available.', imageUrl: images.service5, href: createServiceUrl('Insurance Services') },
  { icon: HandCoins, title: 'Loan Services', description: 'Personal, Business, Housing, Education, Mudhra & SHG Loan Services.', imageUrl: images.service6, href: createServiceUrl('Loan Services') },
  { icon: BookOpenCheck, title: 'Online Educational Services', description: 'TNPSC, VAO, Police, Banking And Railway Exam Registration Services With Patta & Chitta With Other More Online Services.', imageUrl: images.service7, href: createServiceUrl('Online Educational Services') },
  { icon: Briefcase, title: 'Man Power Consultancy Services', description: 'Job Placements For Private Sector Including Foregin Countries.', imageUrl: images.service8, href: createServiceUrl('Man Power Consultancy Services') },
  { icon: GraduationCap, title: 'Educational Consultancy Services', description: 'Local & Aboard (Educational Placements) For Selected Category.', imageUrl: images.service9, href: createServiceUrl('Educational Consultancy Services') },
  { icon: Landmark, title: 'State & Central Govt. Scheme Services', description: 'PM-JAY, PMAY, Kisan Credit Card Schemes With Their Services.', imageUrl: images.service10, href: createServiceUrl('State & Central Govt. Scheme Services') },
  { icon: Calculator, title: 'Auditing Services', description: 'GST, ITR, Trust, Society, 80G, 12AA, FCRA & Inculding All Services.', imageUrl: images.service11, href: createServiceUrl('Auditing Services') },
  { icon: Globe, title: 'Digital Services', description: 'Digital Visiting Card, Miniwebsite, Web Developmment & Software Services Available.', imageUrl: images.service12, href: createServiceUrl('Digital Services') },
];

export const PAIN_SOLUTIONS_FEATURES: Feature[] = [
    { icon: Smile, title: 'Body Relaxation', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et deserunt qui cupiditate veritatis enim ducimus.' },
    { icon: Brain, title: 'Mental Relaxation', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et deserunt qui cupiditate veritatis enim ducimus.' },
];

export const MAJOR_SERVICES: Feature[] = [
    { icon: HeartPulse, title: 'Max Health', description: 'Health Based Services', imageUrl: images.service3 },
    { icon: Landmark, title: 'Sun Health and Wealthi', description: 'Real Estate Based Services', imageUrl: images.service4 },
    { icon: Banknote, title: 'Money Transfer', description: 'Financial Based Services', imageUrl: images.service1 },
    { icon: Smartphone, title: 'Digital Visiting Card', description: 'Software Based Services', imageUrl: images.service12 },
];

export const PLATFORM_FEATURES: Feature[] = [
    { icon: Gauge, title: 'Fast Transactions', description: 'Our platform is optimized for speed, ensuring transactions are completed in seconds.' },
    { icon: UserCheck, title: 'Biometric Authentication', description: 'Enhanced security with fingerprint authentication for AEPS and Aadhaar Pay services.' },
    { icon: Wallet, title: 'Secure Wallet System', description: 'A dedicated, secure wallet for agents to manage their funds and transactions efficiently.' },
    { icon: BarChart, title: 'Real-Time Dashboard', description: 'Monitor your transactions, earnings, and business growth with our intuitive dashboard.' },
    { icon: Languages, title: 'Multi-Language Support', description: 'Our platform is available in multiple regional languages to cater to a diverse user base.' },
    { icon: Gem, title: 'High Commissions', description: 'Earn attractive commissions on every transaction and maximize your income potential.' },
    { icon: BrainCircuit, title: 'Easy-to-Use Interface', description: 'A simple and clean user interface designed for ease of use, even for first-time users.'},
    { icon: MessageSquare, title: 'Transaction History', description: 'Access detailed reports and history of all your transactions for easy reconciliation.'}
];

export const TEAM_MEMBERS: TeamMember[] = [
  { name: 'Suresh Kumar', role: 'Founder & CEO', imageUrl: images.team1 },
  { name: 'Priya Sharma', role: 'Chief Wellness Officer', imageUrl: images.team2 },
  { name: 'Rajesh Singh', role: 'Head of Financial Planning', imageUrl: images.team3 },
  { name: 'Anjali Gupta', role: 'Lead Lifestyle Coach', imageUrl: images.team1 },
  { name: 'Vikram Patel', role: 'Head of Operations', imageUrl: images.team2 },
  { name: 'Meera Desai', role: 'Client Relations Lead', imageUrl: images.team3 },
];

export const TESTIMONIALS: Testimonial[] = [
  { name: 'Ramesh Patel', role: 'Retailer, Gujarat', quote: 'MAXFIN has transformed my business. The platform is reliable, settlements are instant, and the support is excellent. My income has doubled!', imageUrl: images.team1 },
  { name: 'Sunita Devi', role: 'Agent, Bihar', quote: 'The user interface is so simple. I was able to start doing transactions from day one without any training. Highly recommended for anyone.', imageUrl: images.team2 },
  { name: 'Anil Kumar', role: 'Distributor, Tamil Nadu', quote: 'As a distributor, managing my network is a breeze with MAXFIN\'s dashboard. The real-time reports help me track performance effectively.', imageUrl: images.team3 },
  { name: 'Lakshmi Murthy', role: 'Customer', quote: 'Withdrawing money is so easy now with the nearby MAXFIN agent. I don\'t have to travel to the bank anymore. It is a very helpful service for our village.', imageUrl: images.team1 }
];

export const BLOG_POSTS: BlogPost[] = [
    { title: 'Excellent Facility and High Quality Therapy', category: 'Wellness', excerpt: 'Discover our state-of-the-art facilities and how our therapy programs can change your life...', imageUrl: images.blog1, author: 'Dr. Priya Sharma', date: 'Oct 2, 2023'},
    { title: 'Finding Financial Freedom: A 5-Step Guide', category: 'Finance', excerpt: 'Achieve your financial goals with these five essential steps towards building wealth and security...', imageUrl: images.blog2, author: 'Rajesh Singh', date: 'Sep 25, 2023'},
    { title: 'The Mind-Body Connection: Unlocking Your Potential', category: 'Lifestyle', excerpt: 'Learn how to harmonize your mental and physical health for a more fulfilling life...', imageUrl: images.blog3, author: 'Anjali Gupta', date: 'Sep 18, 2023'},
    { title: 'Daily Habits for a Healthier You', category: 'Health', excerpt: 'Small, consistent changes can lead to significant improvements in your overall well-being...', imageUrl: images.blog1, author: 'MAXFIN Team', date: 'Sep 11, 2023'},
];

export const BRANCHES: Branch[] = [
    { city: 'Chennai', address: '123, Anna Salai, T. Nagar, Chennai, TN 600017', phone: '+91-9876543210', mapUrl: '#' },
    { city: 'Madurai', address: '456, West Masi Street, Madurai, TN 625001', phone: '+91-9876543211', mapUrl: '#' },
    { city: 'Coimbatore', address: '789, Gandhipuram, Coimbatore, TN 641012', phone: '+91-9876543212', mapUrl: '#' },
    { city: 'Trichy', address: '101, NSB Road, Teppakulam, Trichy, TN 620002', phone: '+91-9876543213', mapUrl: '#' },
    { city: 'Salem', address: '212, Omalur Main Road, Salem, TN 636009', phone: '+91-9876543214', mapUrl: '#' },
    { city: 'Tirunelveli', address: '313, Trivandrum Road, Tirunelveli, TN 627002', phone: '+91-9876543215', mapUrl: '#' },
];