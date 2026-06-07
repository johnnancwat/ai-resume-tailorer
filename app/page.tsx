'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqItem {
  question: string;
  answer: string;
}

export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "How is this different from using ChatGPT?",
      answer: "While ChatGPT can rewrite text, it doesn't know the specific rules of Applicant Tracking Systems (ATS). This platform analyzes your resume against a target job description in real-time, calculates a precise match score, identifies missing hard and soft keywords, and formats the output structural data perfectly for recruiters."
    },
    {
      question: "Is my resume ATS-compatible?",
      answer: "Yes. Every resume optimized and generated here uses clean data structures, standard web semantic headings, and a layout tested directly against major enterprise ATS platforms to ensure your data parses flawlessly without getting rejected by filters."
    },
    {
      question: "How long does tailoring a resume take?",
      answer: "Under a minute! Once you paste your current resume text and the target job description, our AI engines process the keyword gap analysis and generate an optimized profile almost instantly."
    },
    {
      question: "Can I use my existing resume?",
      answer: "Absolutely. Just copy the raw text content from your current Word document or PDF, paste it into our editor, and the AI will handle the rest of the parsing and alignment automatically."
    },
    {
      question: "What does it cost?",
      answer: "You can start tailoring your resumes completely free with no credit card required. Upgraded tiers are available if you are managing a heavy volume of applications or tracking metrics across dozens of active job pipelines."
    },
    {
      question: "Is my data private?",
      answer: "Your privacy is our highest priority. Your personal information, work history, and uploaded documents are fully encrypted, securely processed, and never sold to third parties or used to train open public AI models."
    },
    {
      question: "Can I generate tailored outreach messages too?",
      answer: "Yes! In addition to optimization, the app features an AI Outreach suite that drafts hyper-personalized cold emails and LinkedIn messages referencing the exact technical overlaps between your profile and the role."
    },
    {
      question: "Can I track multiple versions of my resume?",
      answer: "Yes. Every single tailored variation you build is automatically saved and linked directly to its specific target job description, ensuring you stay completely organized throughout your entire interview loop."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white flex flex-col items-center justify-between p-6 md:p-24">
      {/* Hero Section Container */}
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col lg:flex-row mb-12">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-800 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-850">
          AI-Powered Resume Tailorer App Development Pipeline&nbsp;
        </p>
      </div>

      {/* Main Workspace Frame Placeholder */}
      <div className="flex flex-1 flex-col items-center justify-center text-center my-12 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Optimize Resumes Instantly.
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
          Match keyword gaps, align metrics, and bypass Applicant Tracking System blocks with pinpoint AI precision.
        </p>
      </div>

      {/* FAQ Accordion Component Layout Block */}
      <section className="w-full max-w-4xl mx-auto px-4 py-16 border-t border-gray-800 mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Frequently asked questions
          </h2>
          <p className="text-gray-450 text-base">
            Everything you need to know about the AI matching process.
          </p>
        </div>

        <div className="space-y-2 divide-y divide-gray-850">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="pt-4 pb-2 border-b border-gray-850/50">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center text-left py-4 font-medium text-lg md:text-xl text-gray-200 hover:text-white transition-colors focus:outline-none group"
                >
                  <span className="pr-4">{faq.question}</span>
                  <span className="ml-4 flex-shrink-0 text-gray-400 group-hover:text-white transition-colors text-2xl font-light">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 text-base md:text-lg text-gray-400 leading-relaxed max-w-3xl">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}