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
    <section id="about" className="py-32 px-8 md:px-16 bg-[#3A9AFF] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 w-[25rem] h-[25rem] bg-gradient-to-r from-[#1C0770]/20 to-[#261CC1]/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute right-0 bottom-0 w-[30rem] h-[30rem] bg-gradient-to-r from-[#FFF15E]/15 to-[#1C0770]/10 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 reveal animate-fade-in-left">
          <span className="text-xs uppercase tracking-[0.2em] font-light text-[#FFF15E]">{t.label}</span>
          <h2 className="text-4xl font-light tracking-tight mt-2">{t.heading} <span className="font-normal italic text-[#FFF15E]">{t.headingItalic}</span></h2>
          <div className="h-[1px] w-16 bg-[#FFF15E]/60 mt-4"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-2/3">
            <p className="text-base font-light leading-relaxed mb-8 max-w-2xl text-white/90 reveal animate-fade-in delay-100">
              {t.p1}
            </p>
            <p className="text-base font-light leading-relaxed mb-8 max-w-2xl text-white/90 reveal animate-fade-in delay-200">
              {t.p2}
            </p>
            <p className="text-base font-light leading-relaxed mb-8 max-w-2xl text-white/90 reveal animate-fade-in delay-300">
              {t.p3}
            </p>
            <div className="mt-12 reveal animate-fade-in delay-400">
              <button className="px-8 py-3 border border-[#FFF15E]/60 font-light uppercase tracking-widest text-sm hover:bg-[#FFF15E] hover:text-[#1C0770] transition-all duration-300 hover:border-[#FFF15E]">
                {t.learnMore}
              </button>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="grid grid-cols-2 gap-8 reveal animate-scale-in delay-400 border border-white/30 p-8 shadow-[0_0_40px_rgba(255,255,255,0.08)]">
              <div className="text-center p-4 border-b border-r border-white/20">
                <p className="text-3xl md:text-4xl font-light text-[#FFF15E]">50<span className="text-lg align-top ml-0.5">+</span></p>
                <p className="text-xs uppercase tracking-widest text-white/70 mt-2">{t.vessels}</p>
              </div>
              <div className="text-center p-4 border-b border-white/20">
                <p className="text-3xl md:text-4xl font-light text-[#FFF15E]">18</p>
                <p className="text-xs uppercase tracking-widest text-white/70 mt-2">{t.destinations}</p>
              </div>
              <div className="text-center p-4 border-r border-white/20">
                <p className="text-3xl md:text-4xl font-light text-[#FFF15E]">12</p>
                <p className="text-xs uppercase tracking-widest text-white/70 mt-2">{t.years}</p>
              </div>
              <div className="text-center p-4">
                <p className="text-3xl md:text-4xl font-light text-[#FFF15E]">3000<span className="text-lg align-top ml-0.5">+</span></p>
                <p className="text-xs uppercase tracking-widest text-white/70 mt-2">{t.charters}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
