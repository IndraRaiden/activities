'use client';

import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export default function Two() {
  const { language } = useLanguage();
  const t = translations[language].two;

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
    <section id="about" className="py-32 px-8 md:px-16 bg-black relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMTExMTEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMVY1OGg1OFYxeiIgZmlsbD0iIzIyMjIyMiIvPjwvZz48L3N2Zz4=')] opacity-[0.03] pointer-events-none"></div>

      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 w-[20rem] h-[20rem] bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute right-0 bottom-0 w-[25rem] h-[25rem] bg-gradient-to-r from-amber-500/5 to-red-500/5 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 reveal animate-fade-in-left">
          <span className="text-xs uppercase tracking-[0.2em] font-light text-gray-400">{t.label}</span>
          <h2 className="text-4xl font-light tracking-tight mt-2">{t.heading} <span className="font-normal italic">{t.headingItalic}</span></h2>
          <div className="h-[1px] w-16 bg-white/30 mt-4"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-2/3">
            <p className="text-base font-light leading-relaxed mb-8 max-w-2xl text-gray-300/90 reveal animate-fade-in delay-100">
              {t.p1}
            </p>
            <p className="text-base font-light leading-relaxed mb-8 max-w-2xl text-gray-300/90 reveal animate-fade-in delay-200">
              {t.p2}
            </p>
            <p className="text-base font-light leading-relaxed mb-8 max-w-2xl text-gray-300/90 reveal animate-fade-in delay-300">
              {t.p3}
            </p>
            <div className="mt-12 reveal animate-fade-in delay-400">
              <button className="px-8 py-3 border border-white/50 font-light uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300 hover:border-white">
                {t.learnMore}
              </button>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="grid grid-cols-2 gap-8 reveal animate-scale-in delay-400 border border-white/5 p-8">
              <div className="text-center p-4 border-b border-r border-white/5">
                <p className="text-3xl md:text-4xl font-light">50<span className="text-lg align-top ml-0.5">+</span></p>
                <p className="text-xs uppercase tracking-widest text-gray-400 mt-2">{t.vessels}</p>
              </div>
              <div className="text-center p-4 border-b border-white/5">
                <p className="text-3xl md:text-4xl font-light">18</p>
                <p className="text-xs uppercase tracking-widest text-gray-400 mt-2">{t.destinations}</p>
              </div>
              <div className="text-center p-4 border-r border-white/5">
                <p className="text-3xl md:text-4xl font-light">12</p>
                <p className="text-xs uppercase tracking-widest text-gray-400 mt-2">{t.years}</p>
              </div>
              <div className="text-center p-4">
                <p className="text-3xl md:text-4xl font-light">3000<span className="text-lg align-top ml-0.5">+</span></p>
                <p className="text-xs uppercase tracking-widest text-gray-400 mt-2">{t.charters}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
