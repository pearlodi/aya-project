
import { ThemeProvider } from 'next-themes';
import { cn } from '@/lib/utils'; 
import localFont from 'next/font/local';
import './globals.css';
import DarkModeToggle from '@/components/DarkModeToggle';
import Image from 'next/image';
const myFont = localFont({
    src: '/fonts/Uncut-Sans-Regular.woff2',
  display: 'swap', 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(myFont.className)} suppressHydrationWarning>
      <body className="">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div>
            <header>
              <DarkModeToggle />
            <Image src='images/3d-top.svg' width={284} height={16.68} alt="image" />

            </header>
            <main>{children}</main>

          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
