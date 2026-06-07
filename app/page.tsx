"use client";

import React, { useState, useEffect } from "react";

// --- 1. CAPTIVATING HOME SCREEN (LANDING PAGE) ---
function HomeScreen({ onStart }: { onStart: () => void }) {
  const [typedText, setTypedText] = useState("");
  const fullText = "Tailoring resumes for maximum impact with AI precision.";
  
  // Simple typing effect for dynamic engagement
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTypedText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) clearInterval(intervalId);
    }, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#020617] text-slate-100 flex flex-col items-center justify-center p-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370c_1px,transparent_1px),linear-gradient(to_bottom,#1f29370c_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Pulsing Cinematic Glows */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-cyan-600/10 rounded-full blur-[110px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-purple-700/10 rounded-full blur-[110px] animate-pulse duration-[6000ms]"></div>

      {/* Content Container (Fade in) */}
      <div className="text-center relative z-10 max-w-2xl space-y-10 animate-[fadeIn_1.2s_ease-out]">
        
        {/* Intro Branding Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-xs text-cyan-400 font-medium tracking-widest uppercase">
            AI Platform v4.0
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-white uppercase drop-shadow-lg">
            AI Resume{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-200 to-purple-500 bg-clip-text text-transparent">
              Tailorer
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 font-light max-w-xl mx-auto h-16 leading-relaxed">
            {typedText}
          </p>
        </div>

        {/* Start Button Area with Captivating effects */}
        <div className="relative group p-[2px] rounded-2xl">
          {/* Neon Border Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-70"></div>
          
          <button 
            onClick={onStart}
            className="w-full sm:w-auto relative px-12 py-5 rounded-2xl font-bold text-sm tracking-widest bg-slate-950 border border-slate-800 hover:border-cyan-500/40 text-white uppercase transition-all duration-300 transform active:scale-95 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
          >
            <span className="flex items-center gap-3 justify-center">
              Optimize My Resume
              <svg className="w-4 h-4 text-cyan-400 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
          </button>
        </div>

        {/* Feature Teasers */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-10 text-xs text-slate-500 tracking-wide uppercase font-medium">
          <p>Instant ATS Alignment</p>
          <p>Keyword Extraction</p>
          <p className="md:col-span-1 col-span-2">Tailored Performance Summary</p>
        </div>
      </div>
    </div>
  );
}


// --- 2. MAIN APPLICATION INTERFACE (The Workspace) ---
// (This component remains the same as previously configured in Image_11.png)
function MainInterface({ onBack }: { onBack: () => void }) {
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [isOptimizing, setIsOptimizing] = useState(false);

  const handleOptimize = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsOptimizing(true);
    setTimeout(() => setIsOptimizing(false), 2000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#030712] text-slate-100 flex flex-col items-center justify-center p-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black animate-[fadeIn_0.8s_ease-out]">
      {/* Background components unchanged from Image_11.png */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370c_1px,transparent_1px),linear-gradient(to_bottom,#1f29370c_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>
      
      <div className="w-full max-w-3xl relative z-10 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl space-y-8">
        {/* Neon laser accent line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        
        {/* Header Section */}
        <div className="space-y-2 text-center">
          {/* Back Button added */}
          <button 
            onClick={onBack}
            className="absolute top-8 left-8 text-xs text-slate-500 hover:text-white transition uppercase font-medium tracking-wide flex items-center gap-1.5"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back
          </button>
          
          <p className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">Next Generation ATS Optimization</p>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">AI Resume Tailorer</h1>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">Instantly adapt your professional profile to match job requirements, include high-value keywords, and beat automated filtering algorithms.</p>
        </div>

        {/* Input Form Fields unchanged from Image_11.png */}
        <form onSubmit={handleOptimize} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-xs font-medium tracking-wide text-slate-300 uppercase">Your Current Resume</label>
              <textarea value={resumeText} onChange={(e) => setResumeText(e.target.value)} placeholder="Paste the raw text content of your current resume here..." className="w-full h-48 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition resize-none text-sm" required/>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-medium tracking-wide text-slate-300 uppercase">Target Job Description</label>
              <textarea value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} placeholder="Paste the full job specs, technical requirements, or role details here..." className="w-full h-48 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition resize-none text-sm" required/>
            </div>
          </div>

          {/* Action Button unchanged from Image_11.png */}
          <button type="submit" disabled={isOptimizing} className="w-full py-4 rounded-xl font-semibold text-sm tracking-wide bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20 active:scale-[0.99] transition disabled:opacity-50 disabled:pointer-events-none">
            {isOptimizing ? "Running Optimization Engine..." : "Optimize & Tailor Resume"}
          </button>
        </form>
      </div>
    </div>
  );
}


// --- 3. ROOT PAGE EXPORT (State Manager) ---
export default function Home() {
  const [activeView, setActiveView] = useState<'home' | 'interface'>('home');

  return (
    <div className="min-h-screen">
      {/* Global CSS Inject Layer for Keyframes */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      
      {activeView === 'home' && (
        <HomeScreen onStart={() => setActiveView('interface')} />
      )}
      
      {activeView === 'interface' && (
        <MainInterface onBack={() => setActiveView('home')} />
      )}
    </div>
  );
}