'use client';

import React, { useEffect } from 'react';

export default function Five() {
  // Initialize scroll reveal animations
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
    
    // Initial check
    checkScroll();
    
    // Add event listener
    window.addEventListener('scroll', checkScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);
  return (
    <section className="py-24 px-6 md:px-12 bg-black text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 reveal animate-scale-in">
          SPECIAL OFFER<br />
          FOR<br />
          FIRST-TIME CLIENTS
        </h2>
        <p className="text-lg mb-8 reveal animate-fade-in delay-200">
          We're excited to offer a special welcome discount to all our new clients. Book your first charter experience with us today and receive a complimentary upgrade package worth up to $5,000, including premium amenities and services tailored to your journey.
        </p>
        <button className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition duration-300 reveal animate-fade-in delay-300 animate-attention">
          Claim Your Offer
        </button>
      </div>
    </section>
  );
}
