import React from "react";
import Link from "next/link";

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Our Teacher', href: '/about-us' },
    { name: 'Courses', href: '/courses' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact Us', href: '/contact-us' },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Data = () => {
    return (
        <div className="rounded-md max-w-sm w-full mx-auto">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-1 px-5 pt-2 pb-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    'text-black hover:bg-gray-700 hover:text-pink',
                                    'block py-2 rounded-md text-base font-medium'
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
