'use client';

import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export default function Four() {
  const { language } = useLanguage();
  const t = translations[language].four;

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
    <section id="services" className="py-24 px-6 md:px-12 bg-[#1C0770]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 reveal animate-fade-in-left">{t.heading}</h2>
        <p className="text-lg mb-12 reveal animate-fade-in delay-100">{t.intro}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#261CC1] p-6 rounded-lg border border-[#3A9AFF]/20 border-l-2 border-l-[#FFF15E]/60 reveal animate-fade-in delay-100 hover:border-l-[#FFF15E] hover:border-[#FFF15E]/30 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-[#FFF15E]">{t.yacht.title}</h3>
            <p className="text-[#3A9AFF]/80 mb-4">{t.yacht.desc}</p>
          </div>

          <div className="bg-[#261CC1] p-6 rounded-lg border border-[#3A9AFF]/20 border-l-2 border-l-[#FFF15E]/60 reveal animate-fade-in delay-200 hover:border-l-[#FFF15E] hover:border-[#FFF15E]/30 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-[#FFF15E]">{t.jet.title}</h3>
            <p className="text-[#3A9AFF]/80 mb-4">{t.jet.desc}</p>
          </div>

          <div className="bg-[#261CC1] p-6 rounded-lg border border-[#3A9AFF]/20 border-l-2 border-l-[#FFF15E]/60 reveal animate-fade-in delay-300 hover:border-l-[#FFF15E] hover:border-[#FFF15E]/30 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-[#FFF15E]">{t.helicopter.title}</h3>
            <p className="text-[#3A9AFF]/80 mb-4">{t.helicopter.desc}</p>
          </div>

          <div className="bg-[#261CC1] p-6 rounded-lg border border-[#3A9AFF]/20 border-l-2 border-l-[#FFF15E]/60 reveal animate-fade-in delay-300 hover:border-l-[#FFF15E] hover:border-[#FFF15E]/30 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-[#FFF15E]">{t.car.title}</h3>
            <p className="text-[#3A9AFF]/80 mb-4">{t.car.desc}</p>
          </div>

          <div className="bg-[#261CC1] p-6 rounded-lg border border-[#3A9AFF]/20 border-l-2 border-l-[#FFF15E]/60 reveal animate-fade-in delay-400 hover:border-l-[#FFF15E] hover:border-[#FFF15E]/30 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-[#FFF15E]">{t.itinerary.title}</h3>
            <p className="text-[#3A9AFF]/80 mb-4">{t.itinerary.desc}</p>
          </div>

          <div className="bg-[#261CC1] p-6 rounded-lg border border-[#3A9AFF]/20 border-l-2 border-l-[#FFF15E]/60 reveal animate-fade-in delay-500 hover:border-l-[#FFF15E] hover:border-[#FFF15E]/30 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-[#FFF15E]">{t.provisions.title}</h3>
            <p className="text-[#3A9AFF]/80 mb-4">{t.provisions.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
