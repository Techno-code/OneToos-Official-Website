"use client";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/about-us' },
    { name: t.nav.courses, href: '/courses' },
    { name: t.nav.testimonials, href: '/testimonials' },
    { name: t.nav.contact, href: '/contact-us' },
  ];

  return (
    <footer className="bg-transparent mt-16">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg py-10 px-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-2">
        {/* Navigation */}
        <div className="flex-1 flex flex-col items-center md:items-start w-full">
          <h3 className="text-xl font-bold mb-4 text-pink">{t.footer.navigation}</h3>
          <div className="flex flex-wrap gap-4 w-full justify-center md:justify-start">
            {navLinks.map(link => (
              <Link key={link.name} href={link.href} className="text-footerlinks text-base font-semibold hover:text-pink transition px-2 py-1">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        {/* Logo */}
        <div className="flex-1 flex flex-col items-center justify-center w-full">
          <Image src="/images/Logo/Logo.png" alt="logo" width={180} height={76} className="mb-2" />
        </div>
        {/* QR code */}
        <div className="flex-1 flex flex-col items-center justify-center w-full">
          <div className="bg-gray-100 border border-gray-300 rounded-xl w-40 h-40 flex items-center justify-center text-gray-400 text-lg font-semibold mb-2">
            <Image src="/images/Wechat-QR-Code.jpeg" alt="WeChat QR Code" width={160} height={160} className="object-contain" />
          </div>
          <span className="text-sm text-gray-500">{t.footer.scanToConnect}</span>
        </div>
        {/* Contacts */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center w-full text-sm text-gray-700 space-y-2">
          <div className="w-full text-center md:text-left"><strong>{t.footer.phone}:</strong> 647-283-5514</div>
          <div className="w-full text-center md:text-left"><strong>{t.footer.email}:</strong> one.toos.tutoring@gmail.com</div>
          <div className="w-full text-center md:text-left"><strong>{t.footer.wechat}:</strong> ahtmict20</div>
        </div>
      </div>
      <div className="text-center text-darkgrey text-xs py-4 px-4">
        &copy; {new Date().getFullYear()} OneToos. {t.footer.copyright}
      </div>
    </footer>
  );
};

export default Footer;
