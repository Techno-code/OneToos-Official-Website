import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Courses() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">Course Timetables for 2025-2026</h1>
      <Link href="/contact-us" className="bg-pink hover:bg-pink/90 text-white font-bold py-2 px-4 border-b-4 border-pink/60 hover:border-pink/50 rounded mb-8">Sign Up Now!</Link>
      
      <div className="w-full space-y-12">
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-center">Summer Schedule</h2>
          <Image 
            src="/images/Summer-Schedule-Onetoos.png" 
            alt="Summer Course Timetable" 
            width={1200} 
            height={800} 
            className="w-full h-auto"
          />
          <div className="mt-4 text-center">
            <a 
              href="/images/Summer-Schedule-Onetoos.png" 
              download 
              className="inline-flex items-center px-6 py-3 bg-pink hover:bg-pink/90 text-white font-bold rounded-lg border-b-4 border-pink/60 hover:border-pink/50 transition-all hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Download Summer Schedule
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-6 text-center">Fall Schedule</h2>
          <Image 
            src="/images/Fall-Schedule-Onetoos.png" 
            alt="Fall Course Timetable" 
            width={1200} 
            height={800} 
            className="w-full h-auto"
          />
          <div className="mt-4 text-center">
            <a 
              href="/images/Fall-Schedule-Onetoos.png" 
              download 
              className="inline-flex items-center px-6 py-3 bg-pink hover:bg-pink/90 text-white font-bold rounded-lg border-b-4 border-pink/60 hover:border-pink/50 transition-all hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Download Fall Schedule
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 