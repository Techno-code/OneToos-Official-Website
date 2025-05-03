"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  '/images/Testimonials/Testimonial 1.jpg',
  '/images/Testimonials/Testimonial 2.jpg',
  '/images/Testimonials/Testimonial 3.jpg',
  '/images/Testimonials/Testimonial 4.jpg',
  '/images/Testimonials/Testimonial 5.jpg',
  '/images/Testimonials/Testimonial 6.jpg',
  '/images/Testimonials/Testimonial 7.jpg',
  '/images/Testimonials/Testimonial 8.jpg',
  '/images/Testimonials/Testimonial 9.jpg',
  '/images/Testimonials/Testimonial 9A.jpg',
  '/images/Testimonials/Testimonial 9B.jpg',
  '/images/Testimonials/Testimonial 9C.jpg'
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <main className="max-w-4xl mx-auto py-16 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">Testimonials</h1>
      <p className="text-center text-lg text-gray-600 mb-6">Swipe through our great reviews from satisfied parents!</p>
      <div className="relative w-full max-w-2xl">
        <button 
          onClick={prev} 
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-pink hover:bg-pink/90 text-white font-bold py-3 px-4 border-b-4 border-pink/60 hover:border-pink/50 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        >
          &#8592;
        </button>
        <div className="flex flex-col items-center">
          <Image
            src={testimonials[index]}
            alt={`Testimonial ${index + 1}`}
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <div className="mt-4 text-lg font-medium text-gray-600">
            {index + 1} / {testimonials.length}
          </div>
        </div>
        <button 
          onClick={next} 
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-pink hover:bg-pink/90 text-white font-bold py-3 px-4 border-b-4 border-pink/60 hover:border-pink/50 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        >
          &#8594;
        </button>
      </div>
    </main>
  );
} 