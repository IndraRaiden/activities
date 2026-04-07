'use client';

import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export default function Six() {
  const { language } = useLanguage();
  const t = translations[language].six;

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
    <section id="destinations" className="py-24 px-6 md:px-12 bg-[#1C0770] relative overflow-hidden">
      {/* Sandy horizon glow */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#FFF15E]/8 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-8 reveal animate-fade-in-left text-[#FFF15E]">{t.heading}</h2>
        <p className="text-lg mb-12 reveal animate-fade-in delay-100">{t.intro}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="aspect-square bg-gradient-to-b from-[#3A9AFF]/30 to-[#261CC1]/70 rounded-lg p-6 flex flex-col justify-end group hover:from-[#3A9AFF]/40 hover:to-[#261CC1]/80 transition-all duration-500 reveal animate-fade-in delay-200">
            <h3 className="text-xl font-bold mb-1 group-hover:translate-y-0 translate-y-6 transition-all duration-500">{t.mediterranean.name}</h3>
            <p className="text-sm text-white/70 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500">{t.mediterranean.desc}</p>
          </div>

          <div className="aspect-square bg-gradient-to-b from-[#3A9AFF]/20 to-[#1C0770]/90 rounded-lg p-6 flex flex-col justify-end group hover:from-[#3A9AFF]/30 hover:to-[#1C0770]/95 transition-all duration-500 reveal animate-fade-in delay-300">
            <h3 className="text-xl font-bold mb-1 group-hover:translate-y-0 translate-y-6 transition-all duration-500">{t.caribbean.name}</h3>
            <p className="text-sm text-white/70 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500">{t.caribbean.desc}</p>
          </div>

          <div className="aspect-square bg-gradient-to-b from-[#FFF15E]/20 to-[#1C0770]/90 rounded-lg p-6 flex flex-col justify-end group hover:from-[#FFF15E]/30 hover:to-[#1C0770]/95 transition-all duration-500 reveal animate-fade-in delay-400">
            <h3 className="text-xl font-bold mb-1 group-hover:translate-y-0 translate-y-6 transition-all duration-500">{t.dubai.name}</h3>
            <p className="text-sm text-white/70 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500">{t.dubai.desc}</p>
          </div>

          <div className="aspect-square bg-gradient-to-b from-[#261CC1]/60 to-[#1C0770]/90 rounded-lg p-6 flex flex-col justify-end group hover:from-[#261CC1]/70 hover:to-[#1C0770]/95 transition-all duration-500 reveal animate-fade-in delay-500">
            <h3 className="text-xl font-bold mb-1 group-hover:translate-y-0 translate-y-6 transition-all duration-500">{t.maldives.name}</h3>
            <p className="text-sm text-white/70 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500">{t.maldives.desc}</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 border border-[#FFF15E] rounded-full hover:bg-[#FFF15E] hover:text-[#1C0770] transition duration-300 reveal animate-fade-in delay-700">
            {t.exploreAll}
          </button>
        </div>
      </div>
    </section>
  );
}
