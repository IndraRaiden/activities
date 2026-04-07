'use client';

import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export default function Five() {
  const { language } = useLanguage();
  const t = translations[language].five;

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
    <section className="py-24 px-6 md:px-12 bg-[#261CC1] text-center relative overflow-hidden">
      {/* Sandy glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF15E]/5 via-transparent to-[#FFF15E]/10 pointer-events-none"></div>
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[40rem] h-[15rem] bg-[#FFF15E]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-6 reveal animate-scale-in text-[#FFF15E]">
          {t.heading1}<br />
          {t.heading2}<br />
          {t.heading3}
        </h2>
        <p className="text-lg mb-8 reveal animate-fade-in delay-200">{t.desc}</p>
        <button className="px-6 py-3 bg-[#FFF15E] text-[#1C0770] font-semibold rounded-full hover:bg-[#FFF15E]/80 transition duration-300 reveal animate-fade-in delay-300 animate-attention">
          {t.cta}
        </button>
      </div>
    </section>
  );
}

