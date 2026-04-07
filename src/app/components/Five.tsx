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
    <section className="py-24 px-6 md:px-12 bg-black text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 reveal animate-scale-in">
          {t.heading1}<br />
          {t.heading2}<br />
          {t.heading3}
        </h2>
        <p className="text-lg mb-8 reveal animate-fade-in delay-200">{t.desc}</p>
        <button className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition duration-300 reveal animate-fade-in delay-300 animate-attention">
          {t.cta}
        </button>
      </div>
    </section>
  );
}
