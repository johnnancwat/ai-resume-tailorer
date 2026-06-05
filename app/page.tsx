"use client";

import React, { useState } from "react";

export default function Home() {
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [isOptimizing, setIsOptimizing] = useState(false);

  const handleOptimize = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsOptimizing(true);
    // Optimization logic will connect here
    setTimeout(() => setIsOptimizing(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col items-center justify-center p-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black">
      <div className="w-full max-w-3xl backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl space-y-8">
        
        {/* Header Section */}
        <div className="space-y-2 text-center">
          <p className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
            Next Generation ATS Optimization
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            AI Resume Tailorer
          </h1>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Instantly align your professional profile with target role requirements, target missing industry keywords, and clear automated applicant filters.
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleOptimize} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Resume Input */}
            <div className="space-y-2">
              <label className="block text-xs font-medium tracking-wide text-slate-300 uppercase">
                Current Resume Text
              </label>
              <textarea
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                placeholder="Paste the raw text content of your current resume here..."
                className="w-full h-48 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none text-sm"
                required
              />
            </div>

            {/* Job Description Input */}
            <div className="space-y-2">
              <label className="block text-xs font-medium tracking-wide text-slate-300 uppercase">
                Target Job Description
              </label>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the full job specs, technical requirements, or role details here..."
                className="w-full h-48 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none text-sm"
                required
              />
            </div>
          </div>

          {/* Action Button */}
          <button
            type="submit"
            disabled={isOptimizing}
            className="w-full py-4 rounded-xl font-semibold text-sm tracking-wide bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20 active:scale-[0.99] transition-all disabled:opacity-50 disabled:pointer-events-none"
          >
            {isOptimizing ? "Analyzing Layout Engine..." : "Optimize & Tailor Resume"}
          </button>
        </form>
      </div>
    </div>
  );
}