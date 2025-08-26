'use client';

import React, { useEffect } from 'react';

export default function Three() {
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
    <section id="fleet" className="py-32 px-8 md:px-16 bg-black relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMTExMTEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMXY1OGg1OFYxeiIgZmlsbD0iIzIyMjIyMiIvPjwvZz48L3N2Zz4=')] opacity-[0.03] pointer-events-none"></div>
      
      {/* Decorative elements */}
      <div className="absolute right-0 top-1/4 w-[25rem] h-[25rem] bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute left-0 bottom-0 w-[20rem] h-[20rem] bg-gradient-to-r from-amber-500/5 to-red-500/5 rounded-full blur-3xl opacity-20"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 reveal animate-fade-in-left">
          <span className="text-xs uppercase tracking-[0.2em] font-light text-gray-400">Exclusive Selection</span>
          <h2 className="text-4xl font-light tracking-tight mt-2">OUR <span className="font-normal italic">FLEET</span></h2>
          <div className="h-[1px] w-16 bg-white/30 mt-4"></div>
        </div>
        <p className="text-base font-light leading-relaxed mb-16 max-w-2xl text-gray-300/90 reveal animate-fade-in delay-100">
          Discover our collection of premium vessels and aircraft, each offering unparalleled luxury and performance for your charter experience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Luxury Yacht */}
          <div className="group reveal animate-fade-in delay-100">
            <div className="relative overflow-hidden">
              <div className="h-72 bg-gradient-to-br from-blue-900/40 to-black flex items-end justify-start p-6 transition-all duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/70"></div>
                <div className="relative z-10">
                  <span className="text-xs uppercase tracking-[0.2em] font-light text-gray-300/80">Luxury Vessel</span>
                  <h3 className="text-2xl font-light mt-1">Oceanic <span className="italic">Elite 85</span></h3>
                </div>
              </div>
            </div>
            <div className="pt-6 pb-2 px-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">Capacity</p>
                  <p className="text-sm font-light mt-1">8 Guests • 4 Cabins</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">Length</p>
                  <p className="text-sm font-light mt-1">85 ft</p>
                </div>
              </div>
              <p className="text-gray-300/80 text-sm font-light mb-6 border-t border-white/5 pt-4">
                Luxury motor yacht featuring jacuzzi, jet skis, and gourmet kitchen for an exceptional seafaring experience.
              </p>
              <button className="text-xs uppercase tracking-widest flex items-center group-hover:text-white/90 transition-all duration-300">
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Private Jet */}
          <div className="group reveal animate-fade-in delay-200">
            <div className="relative overflow-hidden">
              <div className="h-72 bg-gradient-to-br from-zinc-700/30 to-black flex items-end justify-start p-6 transition-all duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/70"></div>
                <div className="relative z-10">
                  <span className="text-xs uppercase tracking-[0.2em] font-light text-gray-300/80">Private Aircraft</span>
                  <h3 className="text-2xl font-light mt-1">Gulfstream <span className="italic">G550</span></h3>
                </div>
              </div>
            </div>
            <div className="pt-6 pb-2 px-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">Capacity</p>
                  <p className="text-sm font-light mt-1">14 Passengers</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">Range</p>
                  <p className="text-sm font-light mt-1">7,000 NM</p>
                </div>
              </div>
              <p className="text-gray-300/80 text-sm font-light mb-6 border-t border-white/5 pt-4">
                Ultra-long-range business jet with luxurious cabin offering exceptional comfort for intercontinental travel.
              </p>
              <button className="text-xs uppercase tracking-widest flex items-center group-hover:text-white/90 transition-all duration-300">
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Helicopter */}
          <div className="group reveal animate-fade-in delay-300">
            <div className="relative overflow-hidden">
              <div className="h-72 bg-gradient-to-br from-indigo-900/30 to-black flex items-end justify-start p-6 transition-all duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/70"></div>
                <div className="relative z-10">
                  <span className="text-xs uppercase tracking-[0.2em] font-light text-gray-300/80">Helicopter</span>
                  <h3 className="text-2xl font-light mt-1">Airbus <span className="italic">ACH130</span></h3>
                </div>
              </div>
            </div>
            <div className="pt-6 pb-2 px-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">Capacity</p>
                  <p className="text-sm font-light mt-1">6 Passengers</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">Features</p>
                  <p className="text-sm font-light mt-1">Panoramic Views</p>
                </div>
              </div>
              <p className="text-gray-300/80 text-sm font-light mb-6 border-t border-white/5 pt-4">
                Luxury helicopter perfect for city transfers or scenic tours with exceptional panoramic windows.
              </p>
              <button className="text-xs uppercase tracking-widest flex items-center group-hover:text-white/90 transition-all duration-300">
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Catamaran */}
          <div className="group reveal animate-fade-in delay-400">
            <div className="relative overflow-hidden">
              <div className="h-72 bg-gradient-to-br from-red-900/30 to-black flex items-end justify-start p-6 transition-all duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/70"></div>
                <div className="relative z-10">
                  <span className="text-xs uppercase tracking-[0.2em] font-light text-gray-300/80">Sailing Vessel</span>
                  <h3 className="text-2xl font-light mt-1">Sunreef <span className="italic">60</span></h3>
                </div>
              </div>
            </div>
            <div className="pt-6 pb-2 px-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">Capacity</p>
                  <p className="text-sm font-light mt-1">8 Guests • 4 Cabins</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">Length</p>
                  <p className="text-sm font-light mt-1">60 ft</p>
                </div>
              </div>
              <p className="text-gray-300/80 text-sm font-light mb-6 border-t border-white/5 pt-4">
                Luxurious sailing catamaran with spacious deck areas offering a stable and comfortable sailing experience.
              </p>
              <button className="text-xs uppercase tracking-widest flex items-center group-hover:text-white/90 transition-all duration-300">
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Supercar */}
          <div className="group reveal animate-fade-in delay-500">
            <div className="relative overflow-hidden">
              <div className="h-72 bg-gradient-to-br from-amber-900/30 to-black flex items-end justify-start p-6 transition-all duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/70"></div>
                <div className="relative z-10">
                  <span className="text-xs uppercase tracking-[0.2em] font-light text-gray-300/80">Luxury Vehicle</span>
                  <h3 className="text-2xl font-light mt-1">Lamborghini <span className="italic">Urus</span></h3>
                </div>
              </div>
            </div>
            <div className="pt-6 pb-2 px-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">Type</p>
                  <p className="text-sm font-light mt-1">Luxury SUV</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">Performance</p>
                  <p className="text-sm font-light mt-1">0-60 in 3.6s</p>
                </div>
              </div>
              <p className="text-gray-300/80 text-sm font-light mb-6 border-t border-white/5 pt-4">
                Luxury SUV combining supercar performance with practical versatility for stylish airport transfers.
              </p>
              <button className="text-xs uppercase tracking-widest flex items-center group-hover:text-white/90 transition-all duration-300">
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Sailboat */}
          <div className="group reveal animate-fade-in delay-600">
            <div className="relative overflow-hidden">
              <div className="h-72 bg-gradient-to-br from-emerald-900/30 to-black flex items-end justify-start p-6 transition-all duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/70"></div>
                <div className="relative z-10">
                  <span className="text-xs uppercase tracking-[0.2em] font-light text-gray-300/80">Sailing Yacht</span>
                  <h3 className="text-2xl font-light mt-1">Swan <span className="italic">78</span></h3>
                </div>
              </div>
            </div>
            <div className="pt-6 pb-2 px-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">Capacity</p>
                  <p className="text-sm font-light mt-1">8 Guests • 4 Cabins</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">Length</p>
                  <p className="text-sm font-light mt-1">78 ft</p>
                </div>
              </div>
              <p className="text-gray-300/80 text-sm font-light mb-6 border-t border-white/5 pt-4">
                Elegant performance sailing yacht combining classic aesthetics with modern performance capabilities.
              </p>
              <button className="text-xs uppercase tracking-widest flex items-center group-hover:text-white/90 transition-all duration-300">
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-20">
          <button className="px-10 py-3 border border-white/50 font-light uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300 hover:border-white reveal animate-fade-in delay-700">
            View Full Fleet Catalog
          </button>
        </div>
      </div>
    </section>
  );
}
