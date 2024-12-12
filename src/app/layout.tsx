'use client'

import DarkModeToggle from '@/components/DarkModeToggle';

import './globals.css';

import React, { useEffect } from 'react';
interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const { theme, toggleTheme } = DarkModeToggle();

    useEffect(() => {
        document.documentElement.classList.remove(theme === 'light' ? 'dark' : 'light');
        document.documentElement.classList.add(theme);
    }, [theme]);

    return (
        <html lang="en" className={theme}>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Uncut+Sans:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <title>My Next.js App</title>
            </head>
            <body className={`${theme === 'dark' ? 'background-dark text-white' : 'bg-white text-black'} transition-colors`}>
                <div>
                    <button
                        onClick={toggleTheme}
                        className="fixed top-4 right-4 p-2 bg-gray-800 text-white rounded-full"
                    >
                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </button>
                    {children}
                </div>
            </body>
        </html>
    );
}
