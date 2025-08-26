'use client';

import React, { useEffect } from 'react';

export default function Two() {
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
    <section id="about" className="py-32 px-8 md:px-16 bg-black relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMTExMTEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMXY1OGg1OFYxeiIgZmlsbD0iIzIyMjIyMiIvPjwvZz48L3N2Zz4=')] opacity-[0.03] pointer-events-none"></div>
      
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 w-[20rem] h-[20rem] bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute right-0 bottom-0 w-[25rem] h-[25rem] bg-gradient-to-r from-amber-500/5 to-red-500/5 rounded-full blur-3xl opacity-20"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 reveal animate-fade-in-left">
          <span className="text-xs uppercase tracking-[0.2em] font-light text-gray-400">Our Story</span>
          <h2 className="text-4xl font-light tracking-tight mt-2">ABOUT <span className="font-normal italic">US</span></h2>
          <div className="h-[1px] w-16 bg-white/30 mt-4"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-2/3">
            <p className="text-base font-light leading-relaxed mb-8 max-w-2xl text-gray-300/90 reveal animate-fade-in delay-100">
              Elite Charters is the premier destination for luxury private charter rentals. With over a decade of 
              experience in the industry, we've built a reputation for excellence, offering unparalleled service and the 
              finest vessels and aircraft available.
            </p>
            <p className="text-base font-light leading-relaxed mb-8 max-w-2xl text-gray-300/90 reveal animate-fade-in delay-200">
              Our team of seasoned professionals is dedicated to crafting personalized charter experiences that 
              exceed expectations. From romantic getaways to corporate retreats, we handle every detail with 
              precision and care.
            </p>
            <p className="text-base font-light leading-relaxed mb-8 max-w-2xl text-gray-300/90 reveal animate-fade-in delay-300">
              Safety, luxury, and discretion are the cornerstones of our service philosophy. We're committed to 
              providing you with not just transportation, but an unforgettable journey.
            </p>
            <div className="mt-12 reveal animate-fade-in delay-400">
              <button className="px-8 py-3 border border-white/50 font-light uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300 hover:border-white">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="grid grid-cols-2 gap-8 reveal animate-scale-in delay-400 border border-white/5 p-8">
              <div className="text-center p-4 border-b border-r border-white/5">
                <p className="text-3xl md:text-4xl font-light">50<span className="text-lg align-top ml-0.5">+</span></p>
                <p className="text-xs uppercase tracking-widest text-gray-400 mt-2">vessels</p>
              </div>
              <div className="text-center p-4 border-b border-white/5">
                <p className="text-3xl md:text-4xl font-light">18</p>
                <p className="text-xs uppercase tracking-widest text-gray-400 mt-2">destinations</p>
              </div>
              <div className="text-center p-4 border-r border-white/5">
                <p className="text-3xl md:text-4xl font-light">12</p>
                <p className="text-xs uppercase tracking-widest text-gray-400 mt-2">years</p>
              </div>
              <div className="text-center p-4">
                <p className="text-3xl md:text-4xl font-light">3000<span className="text-lg align-top ml-0.5">+</span></p>
                <p className="text-xs uppercase tracking-widest text-gray-400 mt-2">charters</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
