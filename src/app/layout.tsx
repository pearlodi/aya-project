
import localFont from 'next/font/local'
import { ThemeProvider } from 'next-themes'

import './globals.css';
import DarkModeToggle from '@/components/DarkModeToggle';
const myFont = localFont({
    src: '../../public/fonts/Uncut-Sans-regular.woff2',
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={myFont.className} suppressHydrationWarning>
            <body>
                <ThemeProvider attribute="class" defaultTheme='light'>
                    <div>
                        <DarkModeToggle />
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}