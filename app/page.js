import Banner from '../components/Banner';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Header from '@/components/Header';
import OurServicesSection from '@/components/OurServicesSection';
import Vide0Promotion from '@/components/VideoPromotion';
import Aboutcounter from '@/components/Aboutcounter';
import Aboutskill from '@/components/Aboutskill';
import { Suspense } from 'react';

// Loading component for sections
const SectionLoader = () => (
  <div className="bg-[#101010] py-16">
    <div className="max-w-6xl mx-auto px-6">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-700 rounded mb-4"></div>
        <div className="h-4 bg-gray-700 rounded mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <>
      <Header/>
      <main className="bg-[#101010] text-white">
        <div id='home'>
          <Banner />
        </div>
        
        <div id='about'>
          <Suspense fallback={<SectionLoader />}>
            <Aboutskill/>
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Aboutcounter/>
          </Suspense>
        </div>
        
        <div id='portfolio'>
          <Suspense fallback={<SectionLoader />}>
            <Portfolio />
          </Suspense>
        </div>
        
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <OurServicesSection/>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Vide0Promotion/>
        </Suspense>
        
        <Footer />
      </main>
    </>
  );
}
