'use client';

import React, { useEffect } from 'react';

export default function Seven() {
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
    <section id="contact" className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6 reveal animate-fade-in-left">GET IN TOUCH</h2>
            <p className="text-lg mb-8 reveal animate-fade-in delay-100">Ready to embark on your luxury charter experience? Our charter specialists are standing by to assist you in planning your perfect journey.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 reveal animate-fade-in-left delay-300">
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-gray-400">info@elitecharters.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 reveal animate-fade-in-left delay-300">
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-gray-400">+1 (800) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 reveal animate-fade-in-left delay-300">
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Visit Us</h3>
                  <p className="text-gray-400">123 Harbor Drive, Marina Bay, FL 33019</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-900 p-8 rounded-lg reveal animate-fade-in delay-300">
            <h3 className="text-2xl font-bold mb-6 reveal animate-fade-in delay-400">Request Information</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="interest" className="block text-sm font-medium mb-1">I'm interested in</label>
                <select 
                  id="interest" 
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <option value="">Select an option</option>
                  <option value="yacht">Yacht Charter</option>
                  <option value="jet">Private Jet</option>
                  <option value="helicopter">Helicopter</option>
                  <option value="car">Luxury Car</option>
                  <option value="package">Custom Package</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Tell us about your charter requirements"
                ></textarea>
              </div>
              
              <button type="submit" className="w-full px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition duration-300 reveal animate-fade-in delay-500 animate-attention">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
