"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [isOptimizing, setIsOptimizing] = useState(false);
  
  // States for intro screen and mouse tracking
  const [showIntro, setShowIntro] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle intro screen countdown
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2500); // Intro screen displays for 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  // Track cursor movement for the ambient glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleOptimize = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsOptimizing(true);
    setTimeout(() => setIsOptimizing(false), 3500);
  };

  // --- 1. INTRO SCREEN ---
  if (showIntro) {
    return (
      <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-[120px] animate-pulse"></div>
        
        <div className="text-center space-y-6 relative z-10 p-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-xs text-cyan-400 tracking-widest uppercase animate-bounce">
            System Initializing
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-white uppercase bg-gradient-to-r from-cyan-400 via-teal-200 to-purple-500 bg-clip-text text-transparent animate-pulse">
            AI Resume Tailorer
          </h1>
          <p className="text-slate-400 text-sm max-w-sm mx-auto tracking-wide animate-[fadeIn_1.5s_ease-out]">
            Preparing next-generation ATS layout optimization environment...
          </p>
          
          {/* High-tech custom progress bar loader */}
          <div className="w-48 h-[3px] bg-slate-800 rounded-full mx-auto overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-purple-600 w-full animate-[loadingBar_2.5s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>
    );
  }

  // --- 2. MAIN APPLICATION WORKSPACE ---
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#030712] text-slate-100 flex flex-col items-center justify-center p-4 sm:p-6 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Custom Interactive Mouse Pointer Aura Effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.06), transparent 80%)`
        }}
      />

      {/* Cinematic Animated Canvas Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none animate-[pulse_8s_infinite]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none animate-[pulse_10s_infinite]"></div>
      
      {/* Geometric Architecture Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370c_1px,transparent_1px),linear-gradient(to_bottom,#1f29370c_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"></div>

      {/* Main Glassmorphic Panel Container */}
      <div className="w-full max-w-5xl relative z-10 opacity-0 animate-[workspaceReveal_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards] backdrop-blur-2xl bg-slate-900/40 border border-slate-800/60 rounded-3xl p-6 sm:p-10 shadow-[0_0_80px_-20px_rgba(6,182,212,0.15)]">
        
        {/* Neon Laser Accent Strip */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 via-purple-500 to-transparent shadow-[0_1px_10px_rgba(6,182,212,0.5)]"></div>

        {/* Branding Title Area */}
        <div className="space-y-3 text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-[11px] font-bold tracking-widest text-cyan-400 uppercase shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            Next-Gen ATS Engine v4.0
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white drop-shadow-md">
            AI Resume{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
              Tailorer
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            Instantly adapt your professional profile to match job requirements, inject high-value keywords, and smash automated filtering algorithms.
          </p>
        </div>

        {/* Input Form Fields */}
        <form onSubmit={handleOptimize} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Input Box 1: Resume */}
            <div className="group relative space-y-2">
              <label className="block text-xs font-bold tracking-widest text-slate-400 group-focus-within:text-cyan-400 uppercase transition-colors duration-300">
                Your Current Resume
              </label>
              <div className="relative rounded-2xl border border-slate-800 bg-slate-950/60 p-1 transition-all duration-500 group-focus-within:border-cyan-500/50 group-focus-within:shadow-[0_0_30px_rgba(6,182,212,0.08)]">
                <textarea
                  value={resumeText}
                  onChange={(e) => setResumeText(e.target.value)}
                  placeholder="Paste the raw text content of your current resume here..."
                  className="w-full h-64 p-4 bg-transparent border-0 text-slate-200 placeholder-slate-600 focus:outline-none text-sm leading-relaxed resize-none font-medium"
                  required
                />
              </div>
            </div>

            {/* Input Box 2: Job Description */}
            <div className="group relative space-y-2">
              <label className="block text-xs font-bold tracking-widest text-slate-400 group-focus-within:text-purple-400 uppercase transition-colors duration-300">
                Target Job Description
              </label>
              <div className="relative rounded-2xl border border-slate-800 bg-slate-950/60 p-1 transition-all duration-500 group-focus-within:border-purple-500/50 group-focus-within:shadow-[0_0_30px_rgba(168,85,247,0.08)]">
                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Paste the full job specs, technical stack, or role details here..."
                  className="w-full h-64 p-4 bg-transparent border-0 text-slate-200 placeholder-slate-600 focus:outline-none text-sm leading-relaxed resize-none font-medium"
                  required
                />
              </div>
            </div>

          </div>

          {/* Action Trigger Button */}
          <div className="relative pt-4">
            <button
              type="submit"
              disabled={isOptimizing}
              className="w-full relative group/btn overflow-hidden py-5 rounded-2xl font-extrabold text-sm tracking-widest uppercase bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:opacity-95 text-white shadow-2xl shadow-cyan-500/20 active:scale-[0.995] transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
            >
              {/* Internal Laser Shimmer Highlight */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.2s_infinite]"></div>
              
              <span className="flex items-center justify-center gap-3">
                {isOptimizing ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Running Multi-Layer Keyword Extraction...
                  </>
                ) : (
                  "Optimize & Tailor Resume"
                )}
              </span>
            </button>
          </div>
        </form>
      </div>

      {/* Global CSS Inject Layer for Special Effects Animation Keyframes */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes loadingBar {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
        @keyframes workspaceReveal {
          from { opacity: 0; transform: scale(0.98) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}