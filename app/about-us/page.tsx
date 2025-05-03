import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function AboutUs() {
  return (
    <main className="max-w-5xl mx-auto py-16 px-4">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Image Side */}
        <div className="flex-1 flex justify-center">
          <Image src="/images/Picture-of-Kelvin.jpg" alt="About Us" width={400} height={300} className="rounded-lg shadow" />
        </div>
        {/* Text Side */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2">Our Teacher</h1>
          <h2 className="text-2xl font-semibold mb-4">Dr. Kelvin Yang, PhD</h2>
          <p className="text-lg mb-6">
          The courses are taught by Dr. Kelvin Yang, who earned all his physics degrees—from bachelor's to doctorate—at the University of Science and Technology of China. After completing his education, he conducted physics research as a postdoctoral fellow at Hong Kong University of Science and Technology.
          Dr. Yang teaches science and math subjects for students in grades 3-12 following Ontario and British Columbia curriculums. His teaching covers physics, math, chemistry, college math courses like calculus and linear algebra, mechanics, and he also coaches students for math and physics competitions.          </p>
          <p className="text-base text-gray-600">
            At OneToos, we believe in personalized education, small group learning, and building a supportive community for all students.
          </p>
          <div className="mt-8">
            <Link href="/courses" className="bg-pink hover:bg-pink/90 text-white font-bold py-2 px-4 border-b-4 border-pink/60 hover:border-pink/50 rounded">View Courses</Link>
          </div>
        </div>
      </div>
    </main>
  );
} 