import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tokmaster.com - Your Complete IB Theory of Knowledge Solution",
  description: "Master IB Theory of Knowledge with our comprehensive platform featuring AI-assisted learning, expert guidance, and a complete suite of TOK resources.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${inter.className} antialiased`}
        suppressHydrationWarning={true}
      >
        <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm">
          <nav className="mx-auto max-w-7xl flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5 text-lg font-semibold leading-6 text-gray-900">
                tokmaster.com
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <a href="#features" className="text-sm font-semibold leading-6 text-gray-900">
                Features
              </a>
              <a href="#pricing" className="text-sm font-semibold leading-6 text-gray-900">
                Pricing
              </a>
            </div>
          </nav>
        </header>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
