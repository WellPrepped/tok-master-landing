'use client'

import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/outline'

const tiers = [
  {
    name: 'Freemium',
    id: 'tier-free',
    href: '#',
    price: { monthly: '$0' },
    description: 'Perfect for getting started with TOK.',
    features: [
      'Access to first Theme',
      'Access to first AOK',
      'Community read-only access',
      'Basic learning resources',
    ],
    featured: false,
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    href: '#',
    price: { monthly: '$20', lifetime: '$120' },
    description: 'Everything you need for TOK mastery.',
    features: [
      'Full access to all Modules',
      'Complete Hub exemplars',
      'AI bot (5 generations/week)',
      'Community full access',
      'Priority support',
    ],
    featured: true,
  },
]

export default function Pricing() {
  return (
    <div id="pricing" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-700">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose your learning path
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-900">
          Start for free, upgrade when you&apos;re ready. Cancel anytime.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8 xl:gap-x-12">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-3xl p-8 ring-1 ${
                tier.featured
                  ? 'bg-indigo-900 ring-indigo-900'
                  : 'bg-white ring-gray-200'
              }`}
            >
              <h3
                className={`text-lg font-semibold leading-8 ${
                  tier.featured ? 'text-white' : 'text-gray-900'
                }`}
              >
                {tier.name}
              </h3>
              <p className={`mt-4 text-sm leading-6 ${
                tier.featured ? 'text-gray-300' : 'text-gray-900'
              }`}>
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className={`text-4xl font-bold tracking-tight ${
                  tier.featured ? 'text-white' : 'text-gray-900'
                }`}>
                  {tier.price.monthly}
                </span>
                <span className={`text-sm font-semibold leading-6 ${
                  tier.featured ? 'text-gray-300' : 'text-gray-900'
                }`}>
                  /month
                </span>
              </p>
              {tier.price.lifetime && (
                <p className={`mt-1 text-sm ${
                  tier.featured ? 'text-gray-300' : 'text-gray-900'
                }`}>
                  or {tier.price.lifetime} for lifetime access
                </p>
              )}
              <a
                href={tier.href}
                className={`mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.featured
                    ? 'bg-white text-indigo-900 hover:bg-gray-50 focus-visible:outline-white'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:outline-indigo-600'
                }`}
              >
                Get started
              </a>
              <ul
                role="list"
                className={`mt-8 space-y-3 text-sm leading-6 ${
                  tier.featured ? 'text-gray-300' : 'text-gray-900'
                }`}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className={`h-6 w-5 flex-none ${
                        tier.featured ? 'text-white' : 'text-indigo-600'
                      }`}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 