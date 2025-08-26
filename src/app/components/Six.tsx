'use client';

import React, { useEffect } from 'react';

export default function Six() {
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
    <section id="destinations" className="py-24 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 reveal animate-fade-in-left">POPULAR DESTINATIONS</h2>
        <p className="text-lg mb-12 reveal animate-fade-in delay-100">Explore our most sought-after charter destinations, each offering unique experiences and breathtaking scenery.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="aspect-square bg-gradient-to-b from-blue-500/20 to-blue-900/50 rounded-lg p-6 flex flex-col justify-end group hover:from-blue-500/30 hover:to-blue-900/60 transition-all duration-500 reveal animate-fade-in delay-200">
            <h3 className="text-xl font-bold mb-1 group-hover:translate-y-0 translate-y-6 transition-all duration-500">Mediterranean</h3>
            <p className="text-sm text-white/70 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500">Experience the glamour of the French Riviera, historic charm of Italy, and crystal waters of Greece.</p>
          </div>
          
          <div className="aspect-square bg-gradient-to-b from-emerald-500/20 to-emerald-900/50 rounded-lg p-6 flex flex-col justify-end group hover:from-emerald-500/30 hover:to-emerald-900/60 transition-all duration-500 reveal animate-fade-in delay-300">
            <h3 className="text-xl font-bold mb-1 group-hover:translate-y-0 translate-y-6 transition-all duration-500">Caribbean</h3>
            <p className="text-sm text-white/70 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500">Discover pristine beaches, turquoise waters, and the laid-back island lifestyle of the Caribbean.</p>
          </div>
          
          <div className="aspect-square bg-gradient-to-b from-amber-500/20 to-amber-900/50 rounded-lg p-6 flex flex-col justify-end group hover:from-amber-500/30 hover:to-amber-900/60 transition-all duration-500 reveal animate-fade-in delay-400">
            <h3 className="text-xl font-bold mb-1 group-hover:translate-y-0 translate-y-6 transition-all duration-500">Dubai</h3>
            <p className="text-sm text-white/70 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500">Experience unrivaled luxury, futuristic architecture, and vibrant culture in this desert oasis.</p>
          </div>
          
          <div className="aspect-square bg-gradient-to-b from-purple-500/20 to-purple-900/50 rounded-lg p-6 flex flex-col justify-end group hover:from-purple-500/30 hover:to-purple-900/60 transition-all duration-500 reveal animate-fade-in delay-500">
            <h3 className="text-xl font-bold mb-1 group-hover:translate-y-0 translate-y-6 transition-all duration-500">Maldives</h3>
            <p className="text-sm text-white/70 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500">Escape to paradise with overwater bungalows and some of the world's most beautiful coral reefs.</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition duration-300 reveal animate-fade-in delay-700">
            Explore All Destinations
          </button>
        </div>
      </div>
    </section>
  );
}
