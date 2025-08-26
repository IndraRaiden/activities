'use client';

import React, { useEffect } from 'react';

export default function Four() {
  // Initialize scroll reveal animations
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    function checkScroll() {
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.8) {
          element.classList.add('active');
        }
      });
    }
    
    // Initial check
    checkScroll();
    
    // Add event listener
    window.addEventListener('scroll', checkScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 reveal animate-fade-in-left">OUR SERVICES</h2>
        <p className="text-lg mb-12 reveal animate-fade-in delay-100">
          Explore our range of premier services, each designed to provide an exceptional experience with the ultimate in luxury, comfort, and personalized attention.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Yacht Charters */}
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 reveal animate-fade-in delay-100 hover:border-white/50 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4">YACHT CHARTERS</h3>
            <p className="text-gray-400 mb-4">
              Experience the ultimate oceanview luxury with our fleet of premium yachts available for day trips or extended journeys. Each vessel comes with a professional crew and customizable amenities.
            </p>
          </div>

          {/* Private Jet Rentals */}
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 reveal animate-fade-in delay-200 hover:border-white/50 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4">PRIVATE JET RENTALS</h3>
            <p className="text-gray-400 mb-4">
              Elevate your travel experience with our private jet services. Skip the airport hassle and enjoy the comfort, privacy, and convenience of flying on your own schedule.
            </p>
          </div>

          {/* Helicopter Transfers */}
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 reveal animate-fade-in delay-300 hover:border-white/50 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4">HELICOPTER TRANSFERS</h3>
            <p className="text-gray-400 mb-4">
              Maximize your time and enhance your journey with our helicopter transfer services, perfect for remote destinations or avoiding traffic to and from your charter.
            </p>
          </div>

          {/* Exotic Car Rentals */}
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 reveal animate-fade-in delay-300 hover:border-white/50 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4">EXOTIC CAR RENTALS</h3>
            <p className="text-gray-400 mb-4">
              Complement your charter with our selection of luxury and exotic vehicles. Perfect for airport transfers or exploring your destination in style.
            </p>
          </div>

          {/* Custom Itineraries */}
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 reveal animate-fade-in delay-400 hover:border-white/50 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4">CUSTOM ITINERARIES</h3>
            <p className="text-gray-400 mb-4">
              Our expert concierge team will work with you to craft the perfect itinerary, incorporating the best destinations, activities, and dining experiences.
            </p>
          </div>

          {/* Luxury Provisions */}
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 reveal animate-fade-in delay-500 hover:border-white/50 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4">LUXURY PROVISIONS</h3>
            <p className="text-gray-400 mb-4">
              Elevate your charter experience with premium catering, fine wines and spirits, and personalized onboard services tailored to your preferences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
