'use client'

import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const faqs = [
  {
    question: "What is Theory of Knowledge (TOK)?",
    answer: "Theory of Knowledge (TOK) is a core component of the International Baccalaureate (IB) Diploma Programme. It challenges students to reflect on the nature of knowledge, and on how we know what we claim to know."
  },
  {
    question: "How does TokMaster help with the TOK Exhibition?",
    answer: "TokMaster provides a comprehensive Exhibition preparation toolkit, including artifact brainstorming tools, exemplar galleries with rubric overlays, and AI-assisted prompts to help you connect your artifacts to TOK concepts."
  },
  {
    question: "Can I use the AI writing assistant for my TOK Essay?",
    answer: "Yes! Our AI writing assistant helps with idea generation, essay structuring, and provides instant feedback. However, it's designed to enhance your thinking process, not write the essay for you, ensuring academic integrity."
  },
  {
    question: "How do I get started with TokMaster?",
    answer: "You can start with our free tier, which gives you access to the first Theme and AOK. When you're ready for full access, upgrade to Pro for complete access to all features, including AI assistance and human coaching."
  },
  {
    question: "Is TokMaster aligned with the new TOK curriculum?",
    answer: "Absolutely! TokMaster is fully aligned with the current TOK curriculum (first assessment 2022). We regularly update our content and features to reflect any changes in the IB requirements."
  }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function FAQ() {
  return (
    <div id="faq" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <motion.div 
          className="mx-auto max-w-4xl divide-y divide-gray-900/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 text-center mb-10">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pt-6 first:pt-0"
              >
                <Disclosure as="div">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7 hover:text-indigo-700 transition-colors">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            <ChevronDownIcon
                              className={classNames(
                                open ? '-rotate-180' : 'rotate-0',
                                'h-6 w-6 transform transition-transform duration-200 text-indigo-700'
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-base leading-7 text-gray-900"
                        >
                          {faq.answer}
                        </motion.p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  )
} 