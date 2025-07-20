"use client";
import { useState, useEffect } from 'react';

export default function Aboutcounter() {
  const [counts, setCounts] = useState({
    experience: 0,
    awards: 0,
    projects: 0,
    clients: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about-counter');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targets = {
      experience: 3,
      awards: 15,
      projects: 70,
      clients: 50
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        experience: Math.floor(targets.experience * progress),
        awards: Math.floor(targets.awards * progress),
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section id="about-counter" className="section-padding animated-bg">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary-light/15 rounded-full blur-3xl animate-float delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">OUR ACHIEVEMENTS</h2>
          <p className="section-subtitle">
            Numbers that speak volumes about our dedication to excellence and creative innovation
          </p>
        </div>

        <div className="grid-auto-fit">
          {/* Experience Card */}
          <div className="card group p-8 hover-scale hover-glow">
            <div className="text-5xl md:text-6xl font-extrabold mb-3 group-hover:scale-110 transition-transform duration-300">
              {counts.experience}<span className="text-primary-light text-3xl md:text-4xl align-top">+</span>
            </div>
            <p className="text-xl font-semibold text-primary-light mb-2">Years Experience</p>
            <p className="text-sm text-text-secondary">Professional expertise</p>
          </div>

          {/* Awards Card */}
          <div className="card group p-8 hover-scale hover-glow">
            <div className="text-5xl md:text-6xl font-extrabold mb-3 group-hover:scale-110 transition-transform duration-300">
              {counts.awards}<span className="text-primary-light text-3xl md:text-4xl align-top">+</span>
            </div>
            <p className="text-xl font-semibold text-primary-light mb-2">Best Awards</p>
            <p className="text-sm text-text-secondary">Recognition & excellence</p>
          </div>

          {/* Projects Card */}
          <div className="card group p-8 hover-scale hover-glow">
            <div className="text-5xl md:text-6xl font-extrabold mb-3 group-hover:scale-110 transition-transform duration-300">
              {counts.projects}<span className="text-primary-light text-3xl md:text-4xl align-top">+</span>
            </div>
            <p className="text-xl font-semibold text-primary-light mb-2">Projects Complete</p>
            <p className="text-sm text-text-secondary">Successful deliveries</p>
          </div>

          {/* Clients Card */}
          <div className="card group p-8 hover-scale hover-glow">
            <div className="text-5xl md:text-6xl font-extrabold mb-3 group-hover:scale-110 transition-transform duration-300">
              {counts.clients}<span className="text-primary-light text-3xl md:text-4xl align-top">+</span>
            </div>
            <p className="text-xl font-semibold text-primary-light mb-2">Happy Clients</p>
            <p className="text-sm text-text-secondary">Satisfied customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
