'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const testimonials = [
  {
    content: "Arslan delivered beyond expectations. The transitions and pacing were perfect!",
    name: 'Colt Porter',
    title: 'CEO | Vision Films',
    country: '🇺🇸 USA',
    rating: 5,
  },
  {
    content: "Very professional and easy to work with. Our promo video turned out fantastic.",
    name: 'Allison Brooks',
    title: 'Marketing Head | BrightEdge',
    country: '🇨🇦 Canada',
    rating: 4,
  },
  {
    content: "Creative and precise edits. Really brought our product story to life.",
    name: 'Zechariah Lewis',
    title: 'Founder | TechNest',
    country: '🇦🇺 Australia',
    rating: 5,
  },
  {
    content: "Loved the motion graphics and clean cuts. Great attention to detail.",
    name: 'Emily Hart',
    title: 'Director | Wave Studios',
    country: '🇬🇧 UK',
    rating: 4,
  },
  {
    content: "Quick turnaround and solid communication. Definitely hiring again!",
    name: 'Ryan Clark',
    title: 'Owner | RC Films',
    country: '🇩🇪 Germany',
    rating: 5,
  },
  {
    content: "Excellent work! Took our raw footage and made it into a masterpiece.",
    name: 'Sara Jennings',
    title: 'Content Lead | BrandLoop',
    country: '🇨🇭 Switzerland',
    rating: 5,
  },
];

export default function TestimonialS() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16 px-4 md:px-12"
      style={{ backgroundImage: "url('/bg-overlay.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-0 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
        <h5 className="text-sm md:text-base tracking-widest mb-2 text-[#ecbe3e]">TESTIMONIALS</h5>
        <h3 className="text-3xl md:text-4xl font-semibold mb-4">WHAT CLIENTS SAY</h3>
        <p className="max-w-2xl mx-auto mb-10 text-gray-200">
          Discover what our clients have to say about working with us — from seamless collaborations to impressive final results that exceeded expectations. Your vision, our mission.
        </p>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={4000}
          spaceBetween={15}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 15 },
          }}
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white/10 backdrop-blur-sm text-left rounded-xl shadow-lg w-full p-6 min-h-[260px] flex flex-col justify-between">
                <div className="text-3xl text-[#ecbe3e] mb-4">“</div>
                <p className="text-gray-100 text-sm mb-4">{testimonial.content}</p>
                <div className="mb-3 text-yellow-400 text-sm">
                  {'★'.repeat(testimonial.rating)}
                  {'☆'.repeat(5 - testimonial.rating)}
                </div>
                <div>
                  <strong className="block text-white">{testimonial.name}</strong>
                  <span className="text-sm text-gray-300">{testimonial.title}</span><br />
                  <span className="text-xs text-gray-400">{testimonial.country}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
