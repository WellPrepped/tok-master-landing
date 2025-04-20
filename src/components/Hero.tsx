'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { supabase, isSupabaseConfigured } from '@/lib/supabase'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!isSupabaseConfigured) {
      setStatus('error')
      setMessage('System is currently under maintenance. Please try again later.')
      return
    }

    setStatus('loading')

    try {
      const { error: supabaseError } = await supabase
        .from('waitlist')
        .insert([{ email }])

      if (supabaseError) throw supabaseError

      setStatus('success')
      setMessage('Thanks for joining! We\'ll keep you updated.')
      setEmail('')
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <motion.div
          className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex">
            <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <span className="font-semibold text-indigo-700">Coming Soon</span>
              <span className="h-4 w-px bg-gray-900/10" aria-hidden="true" />
              <a href="#pricing" className="flex items-center gap-x-1">
                <span className="absolute inset-0" aria-hidden="true" />
                Join waitlist
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Master{' '}
            <span className="text-indigo-700">
              Theory of Knowledge
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-900">
            tokmaster.com delivers a seamless end-to-end experience that guides students through the complete TOK learning journey.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 flex max-w-md gap-x-4">
            <motion.div
              className="min-w-0 flex-auto"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <input
                type="email"
                required
                className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </motion.div>
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              className="flex-none rounded-md bg-indigo-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 transition-colors"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Waitlist
            </motion.button>
          </form>
          {status !== 'idle' && (
            <motion.p
              className={`mt-4 text-sm font-medium ${status === 'success' ? 'text-green-800' : 'text-red-800'}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {message}
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  )
} 