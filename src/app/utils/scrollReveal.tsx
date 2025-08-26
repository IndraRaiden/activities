'use client';

import { useEffect } from 'react';

// Scroll reveal utility function
export function initScrollReveal(): () => void {
  // Function to check if element is in viewport
  function isInViewport(element: Element): boolean {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }

  // Function to handle scroll and reveal elements
  function handleScroll(): void {
    const revealElements = document.querySelectorAll('.reveal');
    
    revealElements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add('active');
      }
    });
  }

  // Initial check on page load
  window.addEventListener('load', handleScroll);
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
  
  // Return cleanup function
  return () => {
    window.removeEventListener('load', handleScroll);
    window.removeEventListener('scroll', handleScroll);
  };
}

// Export a React hook for components
export function useScrollReveal(): void {
  useEffect(() => {
    // Only run on client-side
    if (typeof window !== 'undefined') {
      return initScrollReveal();
    }
  }, []);
}
