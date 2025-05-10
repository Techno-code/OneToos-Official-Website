import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactUs() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <p className="text-lg mb-8">Interested in booking a course? Contact us right now!</p>
      <div className="w-full max-w-md space-y-4">
        <div className="text-lg text-center">
          <strong>Phone:</strong> 647-283-5514
        </div>
        <div className="text-lg text-center">
          <strong>Email:</strong> one.toos.tutoring@gmail.com
        </div>
        <div className="text-lg text-center">
          <strong>WeChat ID:</strong> ahtmict20
        </div>
      </div>
      <div className="flex flex-col items-center mt-8">
        <div className="bg-gray-100 border border-gray-300 rounded-lg w-40 h-40 flex items-center justify-center text-gray-400 mb-2">
          <Image src="/images/Wechat-QR-Code.jpeg" alt="WeChat QR Code" width={160} height={160} className="object-contain" />
        </div>
        <span className="text-sm text-gray-500">Scan to connect on WeChat</span>
      </div>
    </main>
  );
} 