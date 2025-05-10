import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <main className="max-w-5xl mx-auto py-16 px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Meet Dr. Kelvin Yang</h1>
        <p className="text-xl text-gray-600">Department of Physics, University of Science and Technology of China</p>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-12 mb-16">
        {/* Image Side */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <Image 
              src="/images/Picture-of-Kelvin.jpg" 
              alt="Dr. Kelvin Yang" 
              width={400} 
              height={300} 
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" 
            />
            <div className="absolute -bottom-4 -right-4 bg-pink text-white px-4 py-2 rounded-lg shadow-lg">
              <p className="font-bold">30+ Years Teaching Experience</p>
            </div>
          </div>
        </div>

        {/* Qualifications Side */}
        <div className="flex-1">
          <div className="bg-pink/5 p-6 rounded-lg border-2 border-pink/20">
            <h2 className="text-2xl font-bold mb-4">Qualifications 🎓</h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-pink mr-2">✓</span>
                <span>Undergraduate Degree, Master&apos;s, and PhD from University of Science and Technology of China (USTC)</span>
              </li>
              <li className="flex items-center">
                <span className="text-pink mr-2">✓</span>
                <span>Postdoctoral Research at Hong Kong University of Science and Technology (HKUST)</span>
              </li>
              <li className="flex items-center">
                <span className="text-pink mr-2">✓</span>
                <span>Can teach in English and Chinese</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Teaching Highlights Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Teaching Highlights 🎯</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <span className="text-pink mr-2">📚</span>
              Rigorous Curriculum
            </h3>
            <p className="text-gray-600">Based on Ontario curriculum, integrated with U.S. and Singapore math modeling methods for extra training</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <span className="text-pink mr-2">📝</span>
              Custom Materials
            </h3>
            <p className="text-gray-600">Focuses on both modeling logic and mathematical expression to ensure academic and practical strength</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <span className="text-pink mr-2">⏰</span>
              Flexible Scheduling
            </h3>
            <p className="text-gray-600">Easily switch or skip levels once fundamentals are strong</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <span className="text-pink mr-2">📈</span>
              Performance Boost
            </h3>
            <p className="text-gray-600">Closely aligned with school assessments to rapidly improve grades and competition results</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <p className="text-lg text-gray-600 mb-6">Ready to experience Dr. Yang&apos;s teaching methodology?</p>
        <Link 
          href="/courses" 
          className="inline-block bg-pink hover:bg-pink/90 text-white font-bold py-3 px-8 border-b-4 border-pink/60 hover:border-pink/50 rounded-lg transition-all hover:scale-105"
        >
          Explore Our Courses 📚
        </Link>
      </div>
    </main>
  );
} 