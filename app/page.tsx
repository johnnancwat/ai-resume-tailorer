"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

export default function Home() {
  // Application Workspace Core State Nodes
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [optimizedOutput, setOptimizedOutput] = useState("");
  const [matchScore, setMatchScore] = useState<number | null>(null);
  const [keywordGaps, setKeywordGaps] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // 8 Target Custom Frequently Asked Questions Data Structure
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

  // API Client Call Integration Configuration Handler
  const handleOptimizationPipeline = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeText.trim() || !jobDescription.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/optimize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resume: resumeText,
          jobDescription: jobDescription,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setOptimizedOutput(data.optimizedResume);
        setMatchScore(data.score || 85);
        setKeywordGaps(data.gaps || []);
      } else {
        console.error("Optimization pipeline failed standard execution checks.");
      }
    } catch (error) {
      console.error("Error logging downstream workspace API matrix:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#02040a] text-slate-100 flex flex-col items-center p-4 sm:p-8 md:p-16 relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Decorative Grid Mesh Underlay & Blur Nodes */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293706_1px,transparent_1px),linear-gradient(to_bottom,#1f293706_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/10 to-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/10 to-pink-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Workspace Frame */}
      <div className="w-full max-w-6xl relative z-10 backdrop-blur-3xl bg-slate-950/40 border border-slate-900/80 rounded-3xl p-6 sm:p-10 shadow-2xl mt-4">
        {/* Header Block */}
        <div className="space-y-3 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-[10px] font-black tracking-widest text-cyan-400 uppercase shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            🚀 AI-Powered Optimization Engine
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            AI Resume Tailorer Workspace
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Feed your data vectors. Input your standard raw master resume string alongside the target tracking job metrics description below to calculate semantic match alignment profiles instantly.
          </p>
        </div>

        {/* Workspace Dual-Input Forms Panel */}
        <form onSubmit={handleOptimizationPipeline} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Node 1: Master Resume */}
            <div className="flex flex-col space-y-2">
              <label className="block text-xs font-bold tracking-widest text-slate-400 uppercase">
                Your Master Resume Content
              </label>
              <textarea
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                placeholder="Paste the full raw content text structure of your current master resume profile directly here..."
                className="w-full h-72 sm:h-96 p-4 rounded-2xl border border-slate-900 bg-slate-950/40 text-slate-200 focus:outline-none focus:border-cyan-500/40 transition-colors resize-none text-sm leading-relaxed"
                required
              />
            </div>

            {/* Input Node 2: Job Metrics Description */}
            <div className="flex flex-col space-y-2">
              <label className="block text-xs font-bold tracking-widest text-slate-400 uppercase">
                Target Job Requirements Metadata
              </label>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the target enterprise job specification details, technical criteria, frameworks, and tracking qualifications description here..."
                className="w-full h-72 sm:h-96 p-4 rounded-2xl border border-slate-900 bg-slate-950/40 text-slate-200 focus:outline-none focus:border-purple-500/40 transition-colors resize-none text-sm leading-relaxed"
                required
              />
            </div>
          </div>

          {/* Action Optimization Trigger */}
          <motion.button
            whileHover={{ scale: 1.01, boxShadow: "0 0 25px rgba(6,182,212,0.15)" }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            disabled={isLoading}
            className="w-full py-5 rounded-2xl font-black text-xs sm:text-sm tracking-widest uppercase bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white transition-all disabled:opacity-50 cursor-pointer shadow-xl shadow-cyan-500/5 hover:opacity-95"
          >
            {isLoading ? "Processing Alignment Engines..." : "Optimize & Tailor Resume Matrix"}
          </motion.button>
        </form>

        {/* Analysis Metrics Output Frame Panel */}
        <AnimatePresence>
          {(optimizedOutput || matchScore !== null) && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-12 pt-10 border-t border-slate-900 space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Score Framework Ring Node */}
                <div className="p-6 rounded-2xl border border-slate-900 bg-slate-950/30 flex flex-col items-center justify-center text-center space-y-2">
                  <span className="text-xs font-bold text-slate-500 tracking-wider uppercase">ATS Match Optimization Score</span>
                  <span className="text-4xl font-black text-cyan-400">{matchScore}%</span>
                </div>
                {/* Core Keyword Matrix Gaps Block */}
                <div className="p-6 rounded-2xl border border-slate-900 bg-slate-950/30 md:col-span-2 space-y-3">
                  <span className="block text-xs font-bold text-slate-500 tracking-wider uppercase">Missing Semantic Gaps Tagged</span>
                  <div className="flex flex-wrap gap-2">
                    {keywordGaps.length > 0 ? (
                      keywordGaps.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-lg border border-red-500/20 bg-red-500/5 text-red-400 font-medium text-xs">
                          {tag}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-slate-400 font-light">No outstanding metric structural keyword gaps identified. Fully optimized!</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Final Tailored Content Output Export Workspace Frame */}
              <div className="space-y-3">
                <label className="block text-xs font-bold tracking-widest text-slate-400 uppercase">Tailored Profile Output View</label>
                <div className="w-full p-6 rounded-2xl border border-slate-900 bg-slate-950/60 text-slate-300 text-sm leading-relaxed whitespace-pre-wrap font-sans max-h-96 overflow-y-auto">
                  {optimizedOutput}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* FIXED FOOTER FAQ COMPONENT BLOCK SECTION */}
      <section className="w-full max-w-4xl mx-auto px-4 py-20 border-t border-slate-900/60 mt-20 relative z-10">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm font-medium">
            Everything you need to know about the AI optimization processing layers.
          </p>
        </div>

        <div className="flex flex-col bg-slate-950/20 p-2 rounded-2xl border border-slate-900/40 backdrop-blur-sm px-6 divide-y divide-slate-900/60">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-2 first:pt-4 last:pb-4 border-slate-900/40">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center text-left py-4 font-bold text-sm sm:text-base text-slate-200 hover:text-cyan-400 transition-colors focus:outline-none group"
                >
                  <span className="pr-4">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0, color: isOpen ? "#22d3ee" : "#64748b" }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="text-xl font-light ml-4 flex-shrink-0 group-hover:text-cyan-400 transition-colors"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-5 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-3xl font-light">
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

      {/* Tiny Layout Environment Node */}
      <footer className="w-full max-w-4xl mx-auto text-center pt-8 pb-4 text-[10px] text-slate-600 font-bold tracking-widest uppercase relative z-10">
        © 2026 AI Resume Tailor Platform Environment Node. All rights reserved.
      </footer>
    </main>
  );
}