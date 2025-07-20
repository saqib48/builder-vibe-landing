'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'YouTube Creator',
      company: 'TechReview Channel',
      avatar: '/images/F1-1.png',
      content: 'Alex transformed my raw footage into viral content that increased my subscriber count by 300%. His editing style perfectly captures the energy I want to convey.',
      rating: 5,
      project: 'YouTube Channel Editing',
      results: '+300% subscribers',
    },
    {
      id: 2,
      name: 'Marcus Chen',
      role: 'Marketing Director',
      company: 'StartupCo',
      avatar: '/images/F2-1.jpg',
      content: 'The commercial Alex created for our product launch exceeded all expectations. The video generated 2M+ views and significantly boosted our conversion rates.',
      rating: 5,
      project: 'Product Launch Video',
      results: '2M+ views',
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Content Creator',
      company: 'Fashion Influencer',
      avatar: '/images/L-4.jpg',
      content: 'Working with Alex was a game-changer for my Instagram presence. His reels consistently go viral and have helped me land major brand partnerships.',
      rating: 5,
      project: 'Instagram Reels',
      results: 'Viral content',
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Film Director',
      company: 'Independent Films',
      avatar: '/images/L-6.jpg',
      content: 'Alex\'s cinematic editing brought our documentary to life. His attention to detail and storytelling ability is exceptional. Highly recommended!',
      rating: 5,
      project: 'Documentary Editing',
      results: 'Award winner',
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Brand Manager',
      company: 'Fashion Brand',
      avatar: '/images/L-9.jpg',
      content: 'The brand video Alex created perfectly captured our aesthetic and values. It\'s been our most successful marketing asset to date.',
      rating: 5,
      project: 'Brand Video',
      results: 'Best performing asset',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section id="testimonials" className="section-padding bg-bg-accent">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold gradient-text mb-6">
            Client Love
          </h2>
          <p className="text-xl text-text-secondary font-body max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients say about working with me 
            and the results we've achieved together.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="card p-8 md:p-12 text-center relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-accent-primary/20">
              <Quote size={48} />
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={24} className="text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-xl md:text-2xl font-body text-text-primary mb-8 leading-relaxed">
              "{testimonials[currentIndex].content}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <div className="font-heading font-semibold text-text-primary text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-text-secondary font-body">
                  {testimonials[currentIndex].role}
                </div>
                <div className="text-accent-primary font-body text-sm">
                  {testimonials[currentIndex].company}
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <div className="bg-accent-primary/10 text-accent-primary px-4 py-2 rounded-full font-accent">
                {testimonials[currentIndex].project}
              </div>
              <div className="bg-accent-secondary/10 text-accent-secondary px-4 py-2 rounded-full font-accent">
                {testimonials[currentIndex].results}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full bg-bg-secondary border border-border-color hover:bg-accent-primary hover:text-white hover:border-accent-primary transition-all duration-300 flex items-center justify-center"
          >
            ←
          </button>
          
          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-accent-primary w-8' 
                    : 'bg-border-color hover:bg-accent-primary/50'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full bg-bg-secondary border border-border-color hover:bg-accent-primary hover:text-white hover:border-accent-primary transition-all duration-300 flex items-center justify-center"
          >
            →
          </button>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { number: '100+', label: 'Happy Clients' },
            { number: '500+', label: 'Projects Completed' },
            { number: '50M+', label: 'Total Views Generated' },
            { number: '4.9/5', label: 'Average Rating' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-text-secondary font-body">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}