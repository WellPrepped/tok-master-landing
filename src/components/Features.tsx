'use client'

import { motion } from 'framer-motion'
import {
  AcademicCapIcon,
  BookOpenIcon,
  SparklesIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Concept Acquisition',
    description: 'Master TOK concepts through video lessons, interactive flashcards, and a comprehensive RLS library.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Exemplar Study',
    description: 'Access a searchable gallery of exemplars with rubric overlay, artifact brainstorming tools, and essay planners.',
    icon: BookOpenIcon,
  },
  {
    name: 'AI-assisted Drafting',
    description: 'Generate ideas, structure your essays, and get instant feedback with our advanced AI writing assistant.',
    icon: SparklesIcon,
  },
  {
    name: 'Human Coaching',
    description: 'Connect with experienced TOK tutors for personalized guidance and feedback.',
    icon: UserGroupIcon,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Features() {
  return (
    <div id="features" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-700">Complete TOK Solution</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to excel in Theory of Knowledge
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-900">
            Our comprehensive platform combines cutting-edge technology with expert guidance to help you master TOK concepts and ace your assessments.
          </p>
        </motion.div>
        <motion.div 
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                variants={item}
                className="flex flex-col items-start"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="rounded-lg bg-indigo-100 p-2 ring-1 ring-indigo-900/20">
                  <feature.icon className="h-6 w-6 text-indigo-700" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-gray-900">{feature.name}</dt>
                <dd className="mt-2 leading-7 text-gray-900">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  )
} 