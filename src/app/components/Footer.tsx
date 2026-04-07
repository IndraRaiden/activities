'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="bg-black text-white py-4 px-6 md:px-12 flex justify-between items-center">
      <div className="font-bold text-2xl">ELITE CHARTERS</div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-8">
        <Link href="/" className="hover:text-gray-300">{t.home}</Link>
        <Link href="/#services" className="hover:text-gray-300">{t.services}</Link>
        <Link href="/#fleet" className="hover:text-gray-300">{t.fleet}</Link>
        <Link href="/#destinations" className="hover:text-gray-300">{t.destinations}</Link>
        <Link href="/#about" className="hover:text-gray-300">{t.about}</Link>
      </nav>

      {/* Contact Button */}
      <Link href="/#contact" className="hidden md:block px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-300">
        {t.contact}
      </Link>
    </footer>
  );
};

export default Footer;
