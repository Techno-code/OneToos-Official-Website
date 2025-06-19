"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export default function AboutUs() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="max-w-5xl mx-auto py-16 px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">{t.about.hero.title}</h1>
        <p className="text-xl text-gray-600">{t.about.hero.subtitle}</p>
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
              <p className="font-bold">{t.about.hero.experience}</p>
            </div>
          </div>
        </div>

        {/* Qualifications Side */}
        <div className="flex-1">
          <div className="bg-pink/5 p-6 rounded-lg border-2 border-pink/20">
            <h2 className="text-2xl font-bold mb-4">{t.about.qualifications.title}</h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-pink mr-2">✓</span>
                <span>{t.about.qualifications.degrees}</span>
              </li>
              <li className="flex items-center">
                <span className="text-pink mr-2">✓</span>
                <span>{t.about.qualifications.research}</span>
              </li>
              <li className="flex items-center">
                <span className="text-pink mr-2">✓</span>
                <span>{t.about.qualifications.languages}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Teaching Highlights Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{t.about.highlights.title} ✨</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <span className="text-pink mr-2">📚</span>
              {t.about.highlights.curriculum.title}
            </h3>
            <p className="text-gray-600">{t.about.highlights.curriculum.desc}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <span className="text-pink mr-2">📝</span>
              {t.about.highlights.materials.title}
            </h3>
            <p className="text-gray-600">{t.about.highlights.materials.desc}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <span className="text-pink mr-2">⏰</span>
              {t.about.highlights.scheduling.title}
            </h3>
            <p className="text-gray-600">{t.about.highlights.scheduling.desc}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <span className="text-pink mr-2">📈</span>
              {t.about.highlights.performance.title}
            </h3>
            <p className="text-gray-600">{t.about.highlights.performance.desc}</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <p className="text-lg text-gray-600 mb-6">{t.about.cta.text}</p>
        <Link 
          href="/courses" 
          className="inline-block bg-pink hover:bg-pink/90 text-white font-bold py-3 px-8 border-b-4 border-pink/60 hover:border-pink/50 rounded-lg transition-all hover:scale-105"
        >
          {t.about.cta.button}
        </Link>
      </div>
    </main>
  );
} 