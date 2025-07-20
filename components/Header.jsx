"use client";
import Link from 'next/link';
import { useState, useCallback, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Custom Smooth Scroll Function
const customScrollTo = (id, duration = 1000) => {
  const target = document.getElementById(id);
  if (!target) return;

  const targetPosition = target.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime = null;

  const easeInOutQuad = (t) => {
    return t < 0.5
      ? 2 * t * t
      : -1 + (4 - 2 * t) * t;
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

const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Portfolio', href: '/#portfolio' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [menuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest('header')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  const handleNavClick = useCallback((href) => {
    if (window.location.pathname !== '/') {
      window.location.href = href;
    } else {
      customScrollTo(href.replace('/#', ''));
    }
    setMenuOpen(false);
  }, []);

  return (
    <header className={`bg-[#101010] text-white sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-lg backdrop-blur-sm bg-[#101010]/95' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href='/' className="focus:outline-none focus:ring-2 focus:ring-[#e0c840] rounded">
          <h1 className='text-3xl font-bold'>
            <span className='text-[#e0c840]'>ARSLAN</span> EDIT'Z
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, i) => (
            <button
              key={i}
              onClick={() => handleNavClick(item.href)}
              className="hover:text-[#e0c840] font-medium cursor-pointer transition-colors duration-200 focus:outline-none focus:text-[#e0c840] rounded px-2 py-1"
            >
              {item.label}
            </button>
          ))}
          <Link
            href="/contact"
            className="ml-4 bg-[#e0c840] text-black px-4 py-2 rounded hover:bg-yellow-300 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#e0c840]"
          >
            CONTACT US
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-[#e0c840] rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm px-4 pb-4 transition-all duration-300 animate-in slide-in-from-top-2">
          {navItems.map((item, i) => (
            <button
              key={i}
              onClick={() => handleNavClick(item.href)}
              className="block text-white py-3 border-b border-gray-700 w-full text-left hover:text-[#e0c840] transition-colors focus:outline-none focus:text-[#e0c840] rounded"
            >
              {item.label}
            </button>
          ))}

          <Link
            href="/contact"
            className="block mt-4 bg-[#e0c840] hover:bg-yellow-300 text-black text-center px-4 py-3 rounded text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#e0c840]"
            onClick={() => setMenuOpen(false)}
          >
            CONTACT US
          </Link>
        </div>
      )}
    </header>
  );
}
