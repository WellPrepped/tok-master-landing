import { Metadata } from 'next'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'TokMaster - Master IB Theory of Knowledge',
  description: 'The ultimate platform for IB Theory of Knowledge (TOK) students. Master concepts, study exemplars, and get AI-assisted drafting help.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  )
}
