'use client';

import Link from 'next/link';
import React from 'react'; 
import { FaBuilding, FaRegSun, FaTags, FaMobileAlt } from 'react-icons/fa'; 

export default function OurServicesSection() {
  return ( 
    <section className="flex flex-col-reverse md:flex-row md:gap-12 gap-10 bg-[#101010] py-16 px-6 md:px-20 items-center">
      <div className="flex-1 grid grid-cols-2 gap-8">
        <div className="flex flex-col items-start text-left">
          <div className="text-3xl text-[#e0c840] mb-4">
            <FaBuilding />
          </div>
          <h3 className="text-xl font-semibold mb-2">Company Profile Videos</h3>
          <p className="text-sm text-[#b9b4b4]">
            We craft sleek and engaging company profile videos that tell your brand’s story with clarity and style—perfect for websites, investor decks, and social media presence.
          </p>
        </div>
        <div className="flex flex-col items-start text-left">
          <div className="text-3xl text-[#e0c840] mb-4">
            <FaRegSun />
          </div>
          <h3 className="text-xl font-semibold mb-2">Cinematic Wedding Films</h3>
          <p className="text-sm text-[#b9b4b4]">
            Your special day deserves more than just a recording. We create cinematic wedding films that capture emotions, moments, and memories you’ll treasure forever.
          </p>
        </div>
        <div className="flex flex-col items-start text-left">
          <div className="text-3xl text-[#e0c840] mb-4">
            <FaTags />
          </div>
          <h3 className="text-xl font-semibold mb-2">Brand Commercials & Promos</h3>
          <p className="text-sm text-[#b9b4b4]">
            From concept to final cut, we produce high-impact promotional videos that boost your brand visibility and convert viewers into customers.
          </p>
        </div>
        <div className="flex flex-col items-start text-left">
          <div className="text-3xl text-[#e0c840] mb-4">
            <FaMobileAlt />
          </div>
          <h3 className="text-xl font-semibold mb-2">Social Media & Influencer Edits</h3>
          <p className="text-sm text-[#b9b4b4]">
            Grab attention fast with scroll-stopping edits for Instagram, TikTok, and YouTube—tailored for creators, influencers, and brands who want to stand out.
          </p>
        </div>
      </div>

      <div className="flex-1">
        <h5 className="text-[#e0c840] text-sm font-semibold uppercase mb-2">OUR SERVICES</h5>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">WE CREATE AMAZING VIDEO</h3>
        <p className="text-[#b9b4b4] mb-6">We craft visually stunning videos that tell your story with creativity and clarity—perfect for businesses, events, and personal brands.
From concept to final cut, we ensure every frame leaves a lasting impression.
        </p>
        <p className="text-[#b9b4b4] mb-6">
          From idea to final edit, we deliver professional-grade visuals using cinematic techniques that grab attention and leave a strong impact.
        </p>
        <span className="cursor-pointer inline-block bg-[#e0c840] text-black py-2 px-6 rounded hover:bg-yellow-300 transition-all">
          View Services
        </span>
      </div>
    </section>
  );
}
