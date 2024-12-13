import { ThemeProvider } from 'next-themes';
import { cn } from '@/lib/utils';
import './globals.css';  // Import global styles where the font is defined
import DarkModeToggle from '@/components/DarkModeToggle';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn('font-sans')} suppressHydrationWarning>
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
