'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Contactbanner() {
  return (
    <section className="relative w-full py-20 px-6 md:px-20 overflow-hidden text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/L-6.jpg" 
          alt="Contact Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase">
          Contact <span className="text-[#e0c840]">US</span>
        </h2>

        <p className="mt-4 text-sm">
          <Link href="/">Home</Link> / <Link href="/contact" className=" hover:text-[#e0c840] transition-colors">Contact</Link>
        </p>
      </div>
    </section>
  );
}
