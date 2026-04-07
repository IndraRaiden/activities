'use client';

import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export default function One() {
  const { language } = useLanguage();
  const t = translations[language].one;

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
    <section className="relative py-36 px-8 md:px-16 flex flex-col justify-center min-h-screen overflow-hidden">
      {/* Abstract design elements */}
      <div className="absolute right-0 top-1/4 w-[30rem] h-[30rem] bg-gradient-to-r from-blue-500/15 to-indigo-500/5 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute -right-48 -bottom-48 w-[40rem] h-[40rem] bg-gradient-to-r from-amber-500/10 to-red-500/5 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute left-1/4 -bottom-24 w-[25rem] h-[25rem] bg-gradient-to-r from-emerald-500/10 to-teal-500/5 rounded-full blur-3xl opacity-50"></div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMTExMTEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMVY1OGg1OFYxeiIgZmlsbD0iIzIyMjIyMiIvPjwvZz48L3N2Zz4=')] opacity-[0.03] pointer-events-none"></div>

      {/* Refined animated elements */}
      <div className="absolute top-1/4 right-1/4 w-8 h-8 border border-white/10 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 left-1/4 w-12 h-12 border border-white/5 rounded-full animate-float opacity-40"></div>
      <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-white/5 rounded-full animate-ping opacity-70"></div>
      <div className="absolute top-1/2 left-1/3 w-16 h-[1px] bg-white/10 rotate-45"></div>
      <div className="absolute bottom-1/4 right-1/5 w-24 h-[1px] bg-white/10 -rotate-45"></div>

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70 z-0"></div>
      <div className="relative z-10 max-w-4xl">
        <div className="inline-block mb-4 px-5 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs tracking-[0.2em] font-light reveal animate-fade-in delay-100">
          {t.badge}
        </div>
        <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tighter mb-8 reveal animate-fade-in-left delay-200">
          {t.heading1} <span className="font-normal italic">{t.heading2}</span><br />
          {t.heading3}<br />
          <span className="relative">
            <span className="font-semibold">{t.heading4}</span>
            <span className="absolute -bottom-3 left-0 h-[1px] w-32 bg-white/70"></span>
          </span>
        </h1>
        <p className="text-base md:text-lg mb-10 max-w-2xl text-gray-300/90 font-light leading-relaxed reveal animate-fade-in delay-300">
          {t.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 reveal animate-fade-in delay-400">
          <button className="px-8 py-3 bg-white text-black font-light uppercase tracking-widest text-sm hover:bg-gray-200 transition-all duration-300 w-full sm:w-auto group">
            <span className="flex items-center justify-center">
              {t.bookBtn}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </span>
          </button>
          <button className="px-8 py-3 border border-white/50 font-light uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300 hover:border-white w-full sm:w-auto">
            {t.fleetBtn}
          </button>
        </div>
      </div>

      {/* Floating stats */}
      <div className="hidden lg:block absolute bottom-16 right-16 bg-black/40 backdrop-blur-md p-6 border border-white/10 animate-scale-in delay-700">
        <div className="flex gap-8">
          <div className="text-center px-4">
            <p className="text-3xl font-light">50<span className="text-lg align-top ml-0.5">+</span></p>
            <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">{t.vessels}</p>
          </div>
          <div className="text-center px-4 border-l border-white/5">
            <p className="text-3xl font-light">18</p>
            <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">{t.destinationsStat}</p>
          </div>
          <div className="text-center px-4 border-l border-white/5">
            <p className="text-3xl font-light">3000<span className="text-lg align-top ml-0.5">+</span></p>
            <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">{t.charters}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
