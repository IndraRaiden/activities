'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 px-6 md:px-12 flex justify-between items-center">
      <div className="font-bold text-2xl">ELITE CHARTERS</div>
      
      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-8">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <Link href="/#services" className="hover:text-gray-300">Services</Link>
        <Link href="/#fleet" className="hover:text-gray-300">Fleet</Link>
        <Link href="/#destinations" className="hover:text-gray-300">Destinations</Link>
        <Link href="/#about" className="hover:text-gray-300">About</Link>
      </nav>
      
      {/* Contact Button */}
      <Link href="/#contact" className="hidden md:block px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-300">
        Contact Us
      </Link>
    </footer>
  );
};

export default Footer;
