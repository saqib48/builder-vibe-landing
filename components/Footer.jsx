'use client';

import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const customScrollTo = (id, duration = 1000) => {
  const target = document.getElementById(id);
  if (!target) return;

  const targetPosition = target.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime = null;

  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed / duration) * distance + startPosition;
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};

export default function Footer() {
  const handleScroll = (sectionId) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      customScrollTo(sectionId);
    }
  };

  return (
    <footer className=" text-center py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 flex justify-center">
          <Link href='/'>
            <h1 className=' text-3xl font-bold'>
              <span className='text-[#e0c840] cursor-pointer'>ARSLAN</span> EDIT'Z
            </h1>
          </Link>
        </div>

        <nav className="mb-6">
          <ul className="flex flex-wrap justify-center gap-6 text-white font-medium ">
            <li>
              <button onClick={() => handleScroll('home')} className="hover:text-[#e0c840] cursor-pointer transition-colors">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll('about')} className="hover:text-[#e0c840] cursor-pointer transition-colors">
                About
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll('portfolio')} className="hover:text-[#e0c840] cursor-pointer transition-colors">
                Portfolio
              </button>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#e0c840] cursor-pointer transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        <p className="text-[#b9b4b4] max-w-xl mx-auto mb-6">
          At Arslan Edits, we believe every story deserves to be told with passion and precision. From dynamic edits to cinematic visuals, we’re dedicated to delivering high-quality video content that leaves a lasting impact.
        </p>

        <div className="flex justify-center gap-4 mb-6">
          <Link href="https://www.facebook.com/arsl0341" className="text-white hover:text-blue-600 text-xl">
            <FaFacebookF />
          </Link>
          <Link href="https://www.instagram.com/arslaneditz5/" className="text-white hover:text-pink-500 text-xl">
            <FaInstagram />
          </Link>
        </div>

        <hr className="border-t border-gray-300 mb-4" />

        <p className="text-sm text-[#b9b4b4]">
          Copyright 2025 © All Right Reserved. Design by Rometheme
        </p>
      </div>
    </footer>
  );
}
