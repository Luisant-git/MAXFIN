
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Mock available time slots
const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
];


const AppointmentPage: React.FC = () => {
    // State for the calendar
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedDate || !selectedTime) {
            alert('Please select a date and time slot.');
            return;
        }
        const formData = new FormData(e.target as HTMLFormElement);
        const name = formData.get('name');
        const formattedDate = selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        
        alert(`Thank you, ${name}! Your appointment for ${selectedTime} on ${formattedDate} has been requested. Our support team will contact you soon!`);
    };

    // Calendar logic
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    const calendarDays = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
        calendarDays.push(<div key={`empty-${i}`} className="p-2"></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(currentYear, currentMonth, day);
        const isToday = new Date().toDateString() === date.toDateString();
        const isSelected = selectedDate?.toDateString() === date.toDateString();
        
        const dayDate = new Date();
        dayDate.setDate(dayDate.getDate() - 1);
        const isPast = date < dayDate;

        calendarDays.push(
            <div key={day} className="text-center">
                <button
                    type="button"
                    onClick={() => !isPast && setSelectedDate(date)}
                    disabled={isPast}
                    className={`
                        w-10 h-10 rounded-full transition-colors duration-200 flex items-center justify-center
                        ${isPast ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-maxfin-green/20'}
                        ${isToday && !isSelected ? 'font-bold text-maxfin-green border-2 border-maxfin-green' : ''}
                        ${isSelected ? 'bg-maxfin-green text-white font-bold' : ''}
                    `}
                >
                    {day}
                </button>
            </div>
        );
    }
    
    const changeMonth = (offset: number) => {
        setCurrentDate(new Date(currentYear, currentMonth + offset, 1));
        setSelectedDate(null); // Reset date selection when month changes
        setSelectedTime(null);
    };

    return (
        <div>
            {/* Page Header */}
            <div className="bg-maxfin-light-gray py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-maxfin-dark-green">Book an Appointment</h1>
                <p className="mt-4 text-lg text-maxfin-muted-text">Let's connect. Schedule a call with our expert team.</p>
            </div>

            {/* Appointment Form & Calendar */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-soft border border-gray-200/80">
                    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-12">
                        {/* Left Side: Calendar & Time Slots */}
                        <div className="space-y-6">
                            {/* Calendar */}
                            <div>
                               <h3 className="text-xl font-bold text-maxfin-dark-green mb-4">Select a Date</h3>
                               <div className="bg-maxfin-light-gray p-4 rounded-lg">
                                   <div className="flex items-center justify-between mb-4">
                                       <button type="button" onClick={() => changeMonth(-1)} className="p-2 rounded-full hover:bg-gray-200">
                                            <ChevronLeft className="w-5 h-5" />
                                       </button>
                                       <h4 className="font-bold text-lg">{monthNames[currentMonth]} {currentYear}</h4>
                                       <button type="button" onClick={() => changeMonth(1)} className="p-2 rounded-full hover:bg-gray-200">
                                            <ChevronRight className="w-5 h-5" />
                                       </button>
                                   </div>
                                   <div className="grid grid-cols-7 gap-1 text-center font-semibold text-maxfin-muted-text text-sm mb-2">
                                       {daysOfWeek.map(day => <div key={day}>{day}</div>)}
                                   </div>
                                   <div className="grid grid-cols-7 gap-y-2">
                                       {calendarDays}
                                   </div>
                               </div>
                            </div>

                             {/* Time Slots */}
                            {selectedDate && (
                                <div>
                                    <h3 className="text-xl font-bold text-maxfin-dark-green mb-4">Select a Time</h3>
                                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                                        {timeSlots.map(time => (
                                            <button
                                                type="button"
                                                key={time}
                                                onClick={() => setSelectedTime(time)}
                                                className={`
                                                    p-2 rounded-md text-sm font-medium border-2 transition-colors
                                                    ${selectedTime === time 
                                                        ? 'bg-maxfin-green border-maxfin-green text-white' 
                                                        : 'border-gray-200 hover:border-maxfin-green'}
                                                `}
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>
                        
                        {/* Right Side: User Details */}
                        <div className="space-y-6 flex flex-col">
                           <div>
                                <h3 className="text-xl font-bold text-maxfin-dark-green mb-4">Enter Your Details</h3>
                            </div>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-maxfin-text">Full Name</label>
                                <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-maxfin-green focus:border-maxfin-green sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-maxfin-text">Phone Number</label>
                                <input type="tel" id="phone" name="phone" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-maxfin-green focus:border-maxfin-green sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="city" className="block text-sm font-medium text-maxfin-text">City</label>
                                <input type="text" id="city" name="city" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-maxfin-green focus:border-maxfin-green sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-maxfin-text">Service Required</label>
                                <select id="service" name="service" required className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-maxfin-green focus:border-maxfin-green sm:text-sm rounded-md">
                                    <option>Retailer Inquiry</option>
                                    <option>Distributor Inquiry</option>
                                    <option>API Integration</option>
                                    <option>General Support</option>
                                </select>
                            </div>
                            <div className="flex-grow flex flex-col justify-end">
                                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-bold text-white bg-maxfin-green hover:bg-maxfin-dark-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-maxfin-green transition-colors">
                                    Book Appointment
                                </button>
                            </div>
                            <p className="text-center text-sm text-maxfin-muted-text -mt-4">
                                Our Support Team Will Contact You Soon
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AppointmentPage;
