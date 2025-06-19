"use client";
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signindialog from './Signindialog';
import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/', current: false },
    { name: 'Our Teacher', href: '/about-us', current: false },
    { name: 'Courses', href: '/courses', current: false },
    { name: 'Testimonials', href: '/testimonials', current: false },
    { name: 'Contact Us', href: '/contact-us', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const { language, toggleLanguage } = useLanguage();

    return (
        <Disclosure as="nav" className="navbar bg-lightpink">
            <>
                <div className="mx-auto max-w-7xl px-3 md:px-6 lg:px-8">
                    <div className="relative flex h-12 sm:h-20 items-center">
                        <div className="flex flex-1 items-center sm:justify-between">

                            {/* LOGO */}

                            <div className="flex sm:hidden flex-shrink-0 items-center border-right">
                                <Image src="/images/Logo/Logo.png" alt="logo" width={85} height={36} />
                            </div>
                            <div className="hidden sm:flex flex-shrink-0 items-center border-right">
                                <Image src="/images/Logo/Logo.png" alt="logo" width={132} height={56} />
                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:flex items-center border-right">
                                <div className="flex justify-end space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-black' : 'navlinks hover:opacity-100',
                                                'px-3 py-2 rounded-md text-lg font-normal opacity-50 hover:text-black space-links'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                    <button
                                        onClick={toggleLanguage}
                                        className="px-3 py-2 rounded-md text-lg font-normal opacity-50 hover:opacity-100 hover:text-black space-links"
                                    >
                                        {language === 'en' ? '中文' : 'English'}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}
                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6 cursor-pointer" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>


                        {/* DRAWER LINKS DATA */}
                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
