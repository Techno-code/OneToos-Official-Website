import React from 'react';
import Link from 'next/link';

export default function Courses() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">Course Timetables for 2025-2026</h1>
      <Link href="/contact-us" className="bg-pink hover:bg-pink/90 text-white font-bold py-2 px-4 border-b-4 border-pink/60 hover:border-pink/50 rounded mb-8">Sign Up Now!</Link>
      <img src="/images/Courses-2025-2026.jpeg" alt="Course Timetable" className="w-full h-auto" />
    </main>
  );
} 