'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import One from "./components/One";
import Two from "./components/Two";
import Three from "./components/Three";
import Four from "./components/Four";
import Five from "./components/Five";
import Six from "./components/Six";
import Seven from "./components/Seven";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-[#1C0770] text-white min-h-screen pt-16">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <One />

      {/* About Section */}
      <Two />

      {/* Fleet Section */}
      <Three />
      
      {/* Services Section */}
      <Four />

      {/* Special Offer Section */}
      <Five />
      
      {/* Destinations Section */}
      <Six />
      
      {/* Contact Form */}
      <Seven />

      {/* Footer */}
      <Footer />
    </div>
  );
}
