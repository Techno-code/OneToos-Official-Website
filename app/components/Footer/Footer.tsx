import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Our Teacher', href: '/about-us' },
  { name: 'Courses', href: '/courses' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact Us', href: '/contact-us' },
];

const Footer = () => {
  return (
    <footer className="bg-transparent mt-16">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg py-10 px-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-2">
        {/* Navigation */}
        <div className="flex-1 flex flex-col items-center md:items-start w-full">
          <h3 className="text-xl font-bold mb-4 text-pink">Navigation</h3>
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
          <img src="/images/Wechat-QR-Code.jpeg" alt="WeChat QR Code" className="w-40 h-40 object-contain" />          </div>
          <span className="text-sm text-gray-500">Scan to connect</span>
        </div>
        {/* Contacts */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center w-full text-sm text-gray-700 space-y-2">
          <div className="w-full text-center md:text-left"><strong>Phone:</strong> 647-283-5514</div>
          <div className="w-full text-center md:text-left"><strong>Email:</strong> one.toos.tutoring@gmail.com</div>
          <div className="w-full text-center md:text-left"><strong>WeChat ID:</strong> avsd69</div>
          <div className="w-full text-center md:text-left"><strong>Location:</strong> 118 Tavistock Square, Oakville, ON</div>
        </div>
      </div>
      <div className="text-center text-darkgrey text-xs py-4 px-4">
        &copy; {new Date().getFullYear()} OneToos. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
