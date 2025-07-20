'use client';

import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image'; 

export default function VideoPromotion() {
  return (
    <section className="relative w-full py-20 px-6 md:px-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/L-9.jpg" 
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
    
        <h5 className="text-sm text-[#e0c840] font-semibold mb-2 tracking-wide">
          VIDEO PROMOTION
        </h5>

        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Explore resources for creating successful video ads.
        </h3>

        <div className=" h-6" />

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#e0c840] text-black py-2 px-6 rounded hover:bg-yellow-300 transition-transform transform hover:scale-105"
        >
          <span>GET STARTED</span>
          <FaArrowRight />
        </Link>
      </div>
    </section>
  );
}
