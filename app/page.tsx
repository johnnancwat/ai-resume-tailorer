"use client";

import React, { useState } from "react";

export default function Home() {
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [isOptimizing, setIsOptimizing] = useState(false);

  const handleOptimize = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsOptimizing(true);
    setTimeout(() => setIsOptimizing(false), 3000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#030712] text-slate-100 flex flex-col items-center justify-center p-4 sm:p-6 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Premium Cinematic Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[6000ms]"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[8000ms]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Main Workspace Container with Entry Fade Animation */}
      <div className="w-full max-w-4xl relative z-10 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards] backdrop-blur-xl bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-[0_0_50px_-12px_rgba(6,182,212,0.15)]">
        
        {/* Dynamic Glow Header Border */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

        {/* Header Branding */}
        <div className="space-y-3 text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-[11px] font-medium tracking-wider text-cyan-400 uppercase shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Next-Gen ATS Engine v4.0
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent drop-shadow-sm">
            AI Resume Tailorer
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Instantly adapt your professional profile to match job requirements, include high-value keywords, and beat automated filtering algorithms.
          </p>
        </div>

        {/* Interface Form */}
        <form onSubmit={handleOptimize} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Input Box 1: Resume */}
            <div className="group relative space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-semibold tracking-wider text-slate-400 group-focus-within:text-cyan-400 uppercase transition-colors">
                  Your Current Resume
                </label>
              </div>
              <div className="relative rounded-2xl border border-slate-800 bg-slate-950/50 transition-all duration-300 group-focus-within:border-cyan-500/40 group-focus-within:shadow-[0_0_20px_rgba(6,182,212,0.05)]">
                <textarea
                  value={resumeText}
                  onChange={(e) => setResumeText(e.target.value)}
                  placeholder="Paste the raw text content of your current resume here..."
                  className="w-full h-56 p-4 bg-transparent border-0 text-slate-200 placeholder-slate-600 focus:outline-none text-sm leading-relaxed resize-none"
                  required
                />
              </div>
            </div>

            {/* Input Box 2: Job Spec */}
            <div className="group relative space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-semibold tracking-wider text-slate-400 group-focus-within:text-purple-400 uppercase transition-colors">
                  Target Job Description
                </label>
              </div>
              <div className="relative rounded-2xl border border-slate-800 bg-slate-950/50 transition-all duration-300 group-focus-within:border-purple-500/40 group-focus-within:shadow-[0_0_20px_rgba(168,85,247,0.05)]">
                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Paste the full job specs, technical stack, or role details here..."
                  className="w-full h-56 p-4 bg-transparent border-0 text-slate-200 placeholder-slate-600 focus:outline-none text-sm leading-relaxed resize-none"
                  required
                />
              </div>
            </div>

          </div>

          {/* Action Trigger Button */}
          <div className="relative pt-2">
            <button
              type="submit"
              disabled={isOptimizing}
              className="w-full relative group/btn overflow-hidden py-4 rounded-xl font-bold text-sm tracking-wide bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:opacity-95 text-white shadow-xl shadow-cyan-500/10 active:scale-[0.99] transition-all disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
            >
              {/* Dynamic Mouse Hover Pointer Micro-Effects */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>
              
              <span className="flex items-center justify-center gap-2">
                {isOptimizing ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Running AI Keyword Extraction Engine...
                  </>
                ) : (
                  "Optimize & Tailor Resume"
                )}
              </span>
            </button>
          </div>
        </form>
      </div>

      {/* Global CSS Inject Layer for Core Keyframes Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}