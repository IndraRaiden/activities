'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="bg-[#1C0770] text-white py-4 px-6 md:px-12 flex justify-between items-center border-t border-[#261CC1]">
      <div className="font-bold text-2xl">ELITE <span className="text-[#FFF15E]">CHARTERS</span></div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-8">
        <Link href="/" className="hover:text-[#3A9AFF]">{t.home}</Link>
        <Link href="/#services" className="hover:text-[#3A9AFF]">{t.services}</Link>
        <Link href="/#fleet" className="hover:text-[#3A9AFF]">{t.fleet}</Link>
        <Link href="/#destinations" className="hover:text-[#3A9AFF]">{t.destinations}</Link>
        <Link href="/#about" className="hover:text-[#3A9AFF]">{t.about}</Link>
      </nav>

      {/* Contact Button */}
      <Link href="/#contact" className="hidden md:block px-4 py-2 border border-[#FFF15E] rounded-full hover:bg-[#FFF15E] hover:text-[#1C0770] transition duration-300">
        {t.contact}
      </Link>
    </footer>
  );
};

export default Footer;
