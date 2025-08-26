'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  // State for mobile menu toggle and scroll position
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 py-5 px-8 md:px-16 flex justify-between items-center z-50 transition-all duration-500 ${scrolled ? 'bg-black bg-opacity-85 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'}`}>
        <div className="font-light tracking-widest text-2xl">ELITE <span className="font-bold italic">CHARTERS</span></div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          <Link href="/" className="text-sm uppercase tracking-widest hover:text-gray-300 relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/#services" className="text-sm uppercase tracking-widest hover:text-gray-300 relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/#fleet" className="text-sm uppercase tracking-widest hover:text-gray-300 relative group">
            Fleet
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/#destinations" className="text-sm uppercase tracking-widest hover:text-gray-300 relative group">
            Destinations
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/#about" className="text-sm uppercase tracking-widest hover:text-gray-300 relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
        
        {/* Contact Button (desktop) */}
        <button className="hidden md:block px-6 py-2 border border-white/50 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 hover:border-white">Contact Us</button>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 border border-white/30 rounded-sm" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </header>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-md z-40 animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link href="/" className="text-lg uppercase tracking-widest hover:text-gray-300 relative group" onClick={() => setMobileMenuOpen(false)}>
              Home
              <span className="absolute -bottom-1 left-1/4 w-1/2 h-px bg-white/30"></span>
            </Link>
            <Link href="/#services" className="text-lg uppercase tracking-widest hover:text-gray-300 relative group" onClick={() => setMobileMenuOpen(false)}>
              Services
              <span className="absolute -bottom-1 left-1/4 w-1/2 h-px bg-white/30"></span>
            </Link>
            <Link href="/#fleet" className="text-lg uppercase tracking-widest hover:text-gray-300 relative group" onClick={() => setMobileMenuOpen(false)}>
              Fleet
              <span className="absolute -bottom-1 left-1/4 w-1/2 h-px bg-white/30"></span>
            </Link>
            <Link href="/#destinations" className="text-lg uppercase tracking-widest hover:text-gray-300 relative group" onClick={() => setMobileMenuOpen(false)}>
              Destinations
              <span className="absolute -bottom-1 left-1/4 w-1/2 h-px bg-white/30"></span>
            </Link>
            <Link href="/#about" className="text-lg uppercase tracking-widest hover:text-gray-300 relative group" onClick={() => setMobileMenuOpen(false)}>
              About
              <span className="absolute -bottom-1 left-1/4 w-1/2 h-px bg-white/30"></span>
            </Link>
            <Link href="/#contact" className="mt-4 px-8 py-2 border border-white/50 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300" onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
