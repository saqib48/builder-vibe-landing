'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Banner() {
  const [mounted, setMounted] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = "WELCOME TO ARSLAN EDIT'Z";

  // Ensure component is mounted on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (!mounted) return;
    
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setIsTypingComplete(true);
      }, 500);
    }
  }, [currentIndex, fullText, mounted]);

  // Blinking cursor effect
  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 600);
    return () => clearInterval(interval);
  }, [mounted]);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center py-32 animated-bg">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/L-4.jpg"
            alt="Studio Art"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-bg-primary/95 via-bg-secondary/90 to-bg-accent/95" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-float delay-500"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center space-y-16">
            {/* Main Heading with Typewriter Effect */}
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 gradient-text">
                <span>{fullText}</span>
              </h1>
            </div>

            {/* Subtitle */}
            <div>
              <h2 className="text-2xl md:text-4xl font-semibold mb-8 leading-relaxed">
                LET&apos;S <span className="text-primary animate-pulse">MAKE</span> YOUR VIDEO LOOK MORE{' '}
                <span className="text-accent animate-pulse-slow">COOL</span>
              </h2>
            </div>

            {/* Description */}
            <div>
              <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                At Arslan Edit'z, we turn your raw footage into cinematic masterpieces. Whether for social
                media, YouTube, or personal moments — we add style, emotion, and a professional finish
                that makes your content shine.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {/* Experience Card */}
              <div className="card group p-8 hover-scale hover-glow">
                <div className="text-5xl md:text-6xl font-extrabold mb-3 group-hover:scale-110 transition-transform duration-300">
                  3<span className="text-primary text-3xl md:text-4xl align-top">+</span>
                </div>
                <p className="text-xl font-semibold text-primary mb-2">Years Experience</p>
                <p className="text-sm text-text-secondary">Professional expertise</p>
              </div>
              
              {/* Awards Card */}
              <div className="card group p-8 hover-scale hover-glow">
                <div className="text-5xl md:text-6xl font-extrabold mb-3 group-hover:scale-110 transition-transform duration-300">
                  15<span className="text-primary text-3xl md:text-4xl align-top">+</span>
                </div>
                <p className="text-xl font-semibold text-primary mb-2">Best Awards</p>
                <p className="text-sm text-text-secondary">Recognition & excellence</p>
              </div>
              
              {/* Projects Card */}
              <div className="card group p-8 hover-scale hover-glow">
                <div className="text-5xl md:text-6xl font-extrabold mb-3 group-hover:scale-110 transition-transform duration-300">
                  70<span className="text-primary text-3xl md:text-4xl align-top">+</span>
                </div>
                <p className="text-xl font-semibold text-primary mb-2">Projects Complete</p>
                <p className="text-sm text-text-secondary">Successful deliveries</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center py-32 animated-bg">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/L-4.jpg"
          alt="Studio Art"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-bg-primary/95 via-bg-secondary/90 to-bg-accent/95" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-float delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center space-y-16">
          {/* Main Heading with Typewriter Effect */}
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 gradient-text">
              <span>{displayText}</span>
              {!isTypingComplete && showCursor && (
                <span className="text-primary animate-pulse">|</span>
              )}
            </h1>
          </div>

          {/* Subtitle */}
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold mb-8 leading-relaxed">
              LET&apos;S <span className="text-primary animate-pulse">MAKE</span> YOUR VIDEO LOOK MORE{' '}
              <span className="text-accent animate-pulse-slow">COOL</span>
            </h2>
          </div>

          {/* Description */}
          <div>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              At Arslan Edit'z, we turn your raw footage into cinematic masterpieces. Whether for social
              media, YouTube, or personal moments — we add style, emotion, and a professional finish
              that makes your content shine.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Experience Card */}
            <div className="card group p-8 hover-scale hover-glow">
              <div className="text-5xl md:text-6xl font-extrabold mb-3 group-hover:scale-110 transition-transform duration-300">
                3<span className="text-primary text-3xl md:text-4xl align-top">+</span>
              </div>
              <p className="text-xl font-semibold text-primary mb-2">Years Experience</p>
              <p className="text-sm text-text-secondary">Professional expertise</p>
            </div>
            
            {/* Awards Card */}
            <div className="card group p-8 hover-scale hover-glow">
              <div className="text-5xl md:text-6xl font-extrabold mb-3 group-hover:scale-110 transition-transform duration-300">
                15<span className="text-primary text-3xl md:text-4xl align-top">+</span>
              </div>
              <p className="text-xl font-semibold text-primary mb-2">Best Awards</p>
              <p className="text-sm text-text-secondary">Recognition & excellence</p>
            </div>
            
            {/* Projects Card */}
            <div className="card group p-8 hover-scale hover-glow">
              <div className="text-5xl md:text-6xl font-extrabold mb-3 group-hover:scale-110 transition-transform duration-300">
                70<span className="text-primary text-3xl md:text-4xl align-top">+</span>
              </div>
              <p className="text-xl font-semibold text-primary mb-2">Projects Complete</p>
              <p className="text-sm text-text-secondary">Successful deliveries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
