'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Eight() {
  // Initialize scroll reveal animations
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    function checkScroll() {
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85) {
          element.classList.add('active');
        }
      });
    }
    
    // Initial check
    checkScroll();
    
    // Add event listener
    window.addEventListener('scroll', checkScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);
  return (
    <footer className="py-12 px-6 md:px-12 bg-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="reveal animate-fade-in">
          <h3 className="text-xl font-bold mb-4">ELITE CHARTERS</h3>
          <p className="text-gray-400">Luxury charter experiences tailored to perfection.</p>
        </div>
        <div className="reveal animate-fade-in delay-100">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/" className="hover:text-white transition duration-300">Home</Link></li>
            <li><Link href="/#about" className="hover:text-white transition duration-300">About Us</Link></li>
            <li><Link href="/#fleet" className="hover:text-white transition duration-300">Our Fleet</Link></li>
            <li><Link href="/#services" className="hover:text-white transition duration-300">Services</Link></li>
            <li><Link href="/#destinations" className="hover:text-white transition duration-300">Destinations</Link></li>
            <li><Link href="/#contact" className="hover:text-white transition duration-300">Contact</Link></li>
          </ul>
        </div>
        <div className="reveal animate-fade-in delay-200">
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/#services" className="hover:text-white transition duration-300">Yacht Charters</Link></li>
            <li><Link href="/#services" className="hover:text-white transition duration-300">Private Jets</Link></li>
            <li><Link href="/#services" className="hover:text-white transition duration-300">Helicopter Transfers</Link></li>
            <li><Link href="/#services" className="hover:text-white transition duration-300">Luxury Car Rentals</Link></li>
            <li><Link href="/#services" className="hover:text-white transition duration-300">Custom Itineraries</Link></li>
          </ul>
        </div>
        <div className="reveal animate-fade-in delay-300">
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
          <p className="text-gray-400 text-sm">Sign up for our newsletter for exclusive offers.</p>
          <div className="mt-4 flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-white/50 w-full"
            />
            <button className="bg-white text-black px-4 py-2 rounded-r-lg hover:bg-gray-200 transition duration-300 animate-attention">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-gray-400 text-sm reveal animate-fade-in delay-500">
        <p>© {new Date().getFullYear()} Elite Charters. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link href="/privacy" className="hover:text-white transition duration-300">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition duration-300">Terms of Service</Link>
          <Link href="/cookies" className="hover:text-white transition duration-300">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
