import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TokMaster - Your Complete IB Theory of Knowledge Solution",
  description: "Master IB Theory of Knowledge with our comprehensive platform featuring AI-assisted learning, expert guidance, and a complete suite of TOK resources.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm">
          <nav className="mx-auto max-w-7xl flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  TokMaster
                </span>
              </a>
            </div>
            <div className="hidden md:flex gap-x-12">
              <a href="#features" className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors">
                Pricing
              </a>
              <a href="#faq" className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors">
                FAQ
              </a>
            </div>
            <div className="flex flex-1 justify-end">
              <a 
                href="#" 
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors"
              >
                Log in <span aria-hidden="true">→</span>
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
