'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-indigo-900 px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Start your TOK journey today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white"
          >
            Join thousands of IB students who are mastering Theory of Knowledge with tokmaster.com
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-900 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
            >
              Get started for free
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="text-sm font-semibold leading-6 text-white hover:text-gray-200 transition-colors"
            >
              Learn more <span aria-hidden="true">→</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 