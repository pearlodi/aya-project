'use client';

import { useTheme } from 'next-themes';

export default function DarkModeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="fixed top-4 right-4 p-2 bg-gray-800 text-white rounded-full"
        >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
}
