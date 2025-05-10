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

      {/* Benefits Section */}
      <section className="py-15 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="p-8 bg-pink/5 border-2 border-pink/20 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold text-pink mb-8 text-center">Why Choose OneToos?</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-pink mr-2">✓</span>
                <span><b>Guaranteed Results:</b> Personalized learning for better grades</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink mr-2">✓</span>
                <span><b>University Ready:</b> Help you roadmap your child with the right courses for university</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink mr-2">✓</span>
                <span><b>Competition Success:</b> Expert prep for AMC & Waterloo competitions</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink mr-2">✓</span>
                <span><b>Individual Focus:</b> Small groups & one-on-one attention</span>
              </li>
            </ul>
            <div className="text-center">
              <Link href="/testimonials" className="inline-block bg-pink hover:bg-pink/90 text-white font-bold py-3 px-8 border-b-4 border-pink/60 hover:border-pink/50 rounded-lg transition-all hover:scale-105">
                See What Parents Say About Us
              </Link>
            </div>
          </div>
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
              OneToos offers comprehensive tutoring services for Grades 4-12 & University Prep. We specialize in:
            </p>
            <ul className="text-lg text-gray-700 max-w-2xl text-center md:text-left px-4 md:px-0 mt-4 list-disc pl-6 space-y-4">
              <li><b>Mathematics</b>: Curriculum Courses, AP Calculus AB/BC, IB HL/SL, AMC (AMC8-AMC12) and Waterloo Competitions (Gauss, Pascal, Cayley, Fryer, Galois, Hypatia, Fermat, Euclid, CSMC)</li>
              <li><b>Physics</b>: Grade 11-12 Physics, AP Physics 1 & C, IB HL/SL</li>
              <li><b>University Bridge Courses</b>: Core subjects such as Calculus, Classical Mechanics, and Introduction to Quantum Physics</li>
            </ul>
            <p className="text-lg text-gray-700 max-w-2xl text-center md:text-left px-4 md:px-0 mt-4">
              Our classes are offered in small groups or one-on-one sessions, with flexible online/offline options 💻
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
