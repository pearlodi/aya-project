
import { ThemeProvider } from 'next-themes';
import { cn } from '@/lib/utils'; 
import localFont from 'next/font/local';
import './globals.css';
import DarkModeToggle from '@/components/DarkModeToggle';

const myFont = localFont({
  src: './Uncut-Sans-regular.woff2',
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
            </header>
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
