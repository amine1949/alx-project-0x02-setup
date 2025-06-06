import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Header = () => {
    const router = useRouter();

    // Define navigation items
    const navItems = [
        { path: '/home', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/posts', label: 'Posts' },
    ];

    return (
        <header className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-3">
                <nav className="flex items-center justify-between">
                    <div className="text-xl font-bold">
                        <Link href="/home">ALX Project</Link>
                    </div>

                    <ul className="flex space-x-6">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    href={item.path}
                                    className={`hover:underline transition ${
                                        router.pathname === item.path ? 'font-bold underline' : ''
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;