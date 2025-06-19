"use client";
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations';

const Drawerdata = () => {
    const { language, toggleLanguage } = useLanguage();
    const t = translations[language];

    const navigation = [
        { name: t.nav.home, href: '/' },
        { name: t.nav.about, href: '/about-us' },
        { name: t.nav.courses, href: '/courses' },
        { name: t.nav.testimonials, href: '/testimonials' },
        { name: t.nav.contact, href: '/contact-us' },
    ];

    return (
        <div className="container">
            <div className="w-full h-full flex flex-col py-4 md:py-4 px-5">
                <div className="flex flex-col space-y-6">
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href} className="text-base text-black hover:text-pink">
                            {item.name}
                        </Link>
                    ))}
                    <button
                        onClick={toggleLanguage}
                        className="text-base text-black hover:text-pink"
                    >
                        {language === 'en' ? '中文' : 'English'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Drawerdata;
