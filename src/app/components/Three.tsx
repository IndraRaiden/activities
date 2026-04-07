'use client';

import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export default function Three() {
  const { language } = useLanguage();
  const t = translations[language].three;

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

    checkScroll();
    window.addEventListener('scroll', checkScroll);

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <section id="fleet" className="py-32 px-8 md:px-16 bg-black relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMTExMTEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMVY1OGg1OFYxeiIgZmlsbD0iIzIyMjIyMiIvPjwvZz48L3N2Zz4=')] opacity-[0.03] pointer-events-none"></div>

      {/* Decorative elements */}
      <div className="absolute right-0 top-1/4 w-[25rem] h-[25rem] bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute left-0 bottom-0 w-[20rem] h-[20rem] bg-gradient-to-r from-amber-500/5 to-red-500/5 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 reveal animate-fade-in-left">
          <span className="text-xs uppercase tracking-[0.2em] font-light text-gray-400">{t.label}</span>
          <h2 className="text-4xl font-light tracking-tight mt-2">{t.heading} <span className="font-normal italic">{t.headingItalic}</span></h2>
          <div className="h-[1px] w-16 bg-white/30 mt-4"></div>
        </div>
        <p className="text-base font-light leading-relaxed mb-16 max-w-2xl text-gray-300/90 reveal animate-fade-in delay-100">
          {t.intro}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Luxury Yacht */}
          <div className="group reveal animate-fade-in delay-100">
            <div className="relative overflow-hidden">
              <div className="h-72 bg-gradient-to-br from-blue-900/40 to-black flex items-end justify-start p-6 transition-all duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/70"></div>
                <div className="relative z-10">
                  <span className="text-xs uppercase tracking-[0.2em] font-light text-gray-300/80">{t.yacht.type}</span>
                  <h3 className="text-2xl font-light mt-1">Oceanic <span className="italic">Elite 85</span></h3>
                </div>
              </div>
            </div>
            <div className="pt-6 pb-2 px-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">{t.yacht.capacity}</p>
                  <p className="text-sm font-light mt-1">{t.yacht.capacityVal}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">{t.yacht.length}</p>
                  <p className="text-sm font-light mt-1">{t.yacht.lengthVal}</p>
                </div>
              </div>
              <p className="text-gray-300/80 text-sm font-light mb-6 border-t border-white/5 pt-4">{t.yacht.desc}</p>
              <button className="text-xs uppercase tracking-widest flex items-center group-hover:text-white/90 transition-all duration-300">
                {t.viewDetails}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Sunseeker Predator 74 */}
          <div className="group reveal animate-fade-in delay-200">
            <div className="relative overflow-hidden">
              <div className="h-72 bg-gradient-to-br from-cyan-900/40 to-black flex items-end justify-start p-6 transition-all duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/70"></div>
                <div className="relative z-10">
                  <span className="text-xs uppercase tracking-[0.2em] font-light text-gray-300/80">{t.sunseeker.type}</span>
                  <h3 className="text-2xl font-light mt-1">Sunseeker <span className="italic">Predator 74</span></h3>
                </div>
              </div>
            </div>
            <div className="pt-6 pb-2 px-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">{t.sunseeker.capacity}</p>
                  <p className="text-sm font-light mt-1">{t.sunseeker.capacityVal}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">{t.sunseeker.length}</p>
                  <p className="text-sm font-light mt-1">{t.sunseeker.lengthVal}</p>
                </div>
              </div>
              <p className="text-gray-300/80 text-sm font-light mb-6 border-t border-white/5 pt-4">{t.sunseeker.desc}</p>
              <button className="text-xs uppercase tracking-widest flex items-center group-hover:text-white/90 transition-all duration-300">
                {t.viewDetails}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Ferretti 500 */}
          <div className="group reveal animate-fade-in delay-300">
            <div className="relative overflow-hidden">
              <div className="h-72 bg-gradient-to-br from-teal-900/30 to-black flex items-end justify-start p-6 transition-all duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/70"></div>
                <div className="relative z-10">
                  <span className="text-xs uppercase tracking-[0.2em] font-light text-gray-300/80">{t.ferretti.type}</span>
                  <h3 className="text-2xl font-light mt-1">Ferretti <span className="italic">500</span></h3>
                </div>
              </div>
            </div>
            <div className="pt-6 pb-2 px-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">{t.ferretti.capacity}</p>
                  <p className="text-sm font-light mt-1">{t.ferretti.capacityVal}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">{t.ferretti.length}</p>
                  <p className="text-sm font-light mt-1">{t.ferretti.lengthVal}</p>
                </div>
              </div>
              <p className="text-gray-300/80 text-sm font-light mb-6 border-t border-white/5 pt-4">{t.ferretti.desc}</p>
              <button className="text-xs uppercase tracking-widest flex items-center group-hover:text-white/90 transition-all duration-300">
                {t.viewDetails}
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
                  <span className="text-xs uppercase tracking-[0.2em] font-light text-gray-300/80">{t.catamaran.type}</span>
                  <h3 className="text-2xl font-light mt-1">Sunreef <span className="italic">60</span></h3>
                </div>
              </div>
            </div>
            <div className="pt-6 pb-2 px-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">{t.catamaran.capacity}</p>
                  <p className="text-sm font-light mt-1">{t.catamaran.capacityVal}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">{t.catamaran.length}</p>
                  <p className="text-sm font-light mt-1">{t.catamaran.lengthVal}</p>
                </div>
              </div>
              <p className="text-gray-300/80 text-sm font-light mb-6 border-t border-white/5 pt-4">{t.catamaran.desc}</p>
              <button className="text-xs uppercase tracking-widest flex items-center group-hover:text-white/90 transition-all duration-300">
                {t.viewDetails}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Riva Aquarama Special */}
          <div className="group reveal animate-fade-in delay-500">
            <div className="relative overflow-hidden">
              <div className="h-72 bg-gradient-to-br from-amber-900/30 to-black flex items-end justify-start p-6 transition-all duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/70"></div>
                <div className="relative z-10">
                  <span className="text-xs uppercase tracking-[0.2em] font-light text-gray-300/80">{t.riva.type}</span>
                  <h3 className="text-2xl font-light mt-1">Riva <span className="italic">Aquarama</span></h3>
                </div>
              </div>
            </div>
            <div className="pt-6 pb-2 px-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">{t.riva.capacity}</p>
                  <p className="text-sm font-light mt-1">{t.riva.capacityVal}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">{t.riva.length}</p>
                  <p className="text-sm font-light mt-1">{t.riva.lengthVal}</p>
                </div>
              </div>
              <p className="text-gray-300/80 text-sm font-light mb-6 border-t border-white/5 pt-4">{t.riva.desc}</p>
              <button className="text-xs uppercase tracking-widest flex items-center group-hover:text-white/90 transition-all duration-300">
                {t.viewDetails}
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
                  <span className="text-xs uppercase tracking-[0.2em] font-light text-gray-300/80">{t.sailboat.type}</span>
                  <h3 className="text-2xl font-light mt-1">Swan <span className="italic">78</span></h3>
                </div>
              </div>
            </div>
            <div className="pt-6 pb-2 px-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">{t.sailboat.capacity}</p>
                  <p className="text-sm font-light mt-1">{t.sailboat.capacityVal}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">{t.sailboat.length}</p>
                  <p className="text-sm font-light mt-1">{t.sailboat.lengthVal}</p>
                </div>
              </div>
              <p className="text-gray-300/80 text-sm font-light mb-6 border-t border-white/5 pt-4">{t.sailboat.desc}</p>
              <button className="text-xs uppercase tracking-widest flex items-center group-hover:text-white/90 transition-all duration-300">
                {t.viewDetails}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-20">
          <button className="px-10 py-3 border border-white/50 font-light uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300 hover:border-white reveal animate-fade-in delay-700">
            {t.viewAll}
          </button>
        </div>
      </div>
    </section>
  );
}
