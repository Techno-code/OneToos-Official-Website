"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      const y = aboutRef.current.getBoundingClientRect().top + window.pageYOffset - 180; 
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen flex flex-col justify-between">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center flex-1 py-24 px-4 md:px-16 bg-white gap-12">
        {/* Text Side */}
        <div className="flex-1 flex flex-col items-center md:items-start order-2 md:order-1">
          <h1 className="text-5xl font-bold mb-4 text-center md:text-left">Unlock Your Potential in Math & Science</h1>
          <p className="text-xl text-gray-600 mb-8 text-center md:text-left max-w-xl">Learn high-end math and science courses online or in person at OneToos. Classes and one-on-one tutoring available.</p>
          <div className="flex gap-6">
            <Link href="/courses" className="bg-pink hover:bg-pink/90 text-white font-bold py-2 px-4 border-b-4 border-pink/60 hover:border-pink/50 rounded">Book Courses Now!</Link>
            <button onClick={scrollToAbout} className="bg-bgpink hover:bg-blue-50 text-pink font-bold py-2 px-4 border-b-4 border-bgpink/60 hover:border-blue-100 rounded">About Us</button>
          </div>
        </div>
        {/* Image Side */}
        <div className="flex-1 flex justify-center mb-8 md:mb-0 order-1 md:order-2">
          <Image src="/images/Kelvin-Teaching-Alt.png" alt="Hero" width={500} height={350} className="rounded-lg shadow" />
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-24 bg-gray-50 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8">About OneToos</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="flex-1 flex justify-center mb-8 md:mb-0">
            <Image src="/images/OneToos-Teaching.png" alt="Teaching" width={500} height={350} className="rounded-lg shadow" />
          </div>
          {/* About Text */}
          <div className="flex-1">
            <p className="text-lg text-gray-700 max-w-2xl text-center md:text-left px-4 md:px-0">
              OneToos is a tutoring service offering group courses and one-on-ones, both online and in person. We specialize in STEM subjects such as math, physics, and chemistry, taught by our experienced instructor, Dr. Kelvin Yang. We also offer competition math (AMC, Waterloo) and AP courses (Calculus BC, AP Physics, etc.). Our mission is to empower students to excel academically and in competitions, as well as preparing them for university and boosting their grades to improve their academic performance.
            </p>
            <p className="text-lg text-gray-700 mt-6 text-center md:text-left">
              Don't believe us? <Link href="/testimonials" className="text-pink hover:underline hover:font-bold transition">View our testimonials</Link> from satisfied parents.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
