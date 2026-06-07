"use client";

import React, { useState, useEffect } from "react";

// --- GLOBAL ACORDION ITEM COMPONENT FOR THE FAQ ---
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-800/80 transition-colors duration-300">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left font-medium text-slate-200 hover:text-white transition-colors text-sm sm:text-base group"
      >
        <span>{question}</span>
        <span className={`text-xl font-light text-slate-500 group-hover:text-cyan-400 transition-transform duration-300 transform ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-sm text-slate-400 leading-relaxed font-light">{answer}</p>
      </div>
    </div>
  );
}

// --- 1. PREMIUM SAAS LANDING PAGE (HOME SCREEN) ---
function HomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      {/* FIXED HEADER NAVIGATION */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#030712]/70 border-b border-slate-900 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <div className="bg-gradient-to-br from-cyan-500 to-purple-600 p-2 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <span className="font-bold tracking-tight text-white text-base">Resume Tailor</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider text-slate-400 uppercase">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#testimonials" className="hover:text-white transition">Reviews</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </nav>
        <button onClick={onStart} className="px-5 py-2 rounded-xl text-xs font-bold tracking-wide border border-slate-800 bg-slate-950 hover:border-cyan-500/30 text-white transition-all duration-300">
          Get Started Free
        </button>
      </header>

      {/* HERO HERO CONTAINER VISUALS - Inspired by Screenshot (61).png */}
      <section className="relative pt-20 pb-16 px-4 text-center max-w-5xl mx-auto space-y-12">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/5 text-[10px] font-bold tracking-widest text-purple-400 uppercase">
            🚀 The Ultimate ATS Cheat Code
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white max-w-3xl mx-auto leading-[1.1]">
            Optimize your resume to match high-value job specs.
          </h1>
          <p className="text-slate-400 font-light text-base sm:text-lg max-w-xl mx-auto">
            Instantly adapt your professional profile, inject missing technical metrics, and beat corporate automated screening algorithms.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={onStart} className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-xs tracking-wider uppercase bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-95 text-white shadow-xl shadow-cyan-500/10 active:scale-98 transition">
            Build your resume now
          </button>
        </div>

        {/* Mockup Interactive Builder Board Blueprint Preview */}
        <div className="relative rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 shadow-[0_0_60px_rgba(0,0,0,0.8)] max-w-4xl mx-auto animate-[fadeIn_1.2s_ease-out]">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-900 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
            <div className="ml-4 bg-slate-900/60 rounded-md text-[10px] text-slate-500 px-6 py-1 border border-slate-800/40">resumetailor.ai/builder</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left font-sans min-h-[300px]">
            <div className="border-r border-slate-900/80 pr-4 space-y-4 text-xs text-slate-500 font-medium">
              <p className="text-[10px] tracking-wider text-slate-600 uppercase font-bold">Resumes</p>
              <div className="p-2 bg-slate-900 border border-cyan-500/30 text-cyan-400 rounded-lg text-[11px]">Product Manager — Stripe</div>
              <div className="p-2 bg-slate-950 text-slate-400 rounded-lg text-[11px] hover:bg-slate-900/40 transition">Frontend — Vercel</div>
            </div>
            <div className="md:col-span-2 flex flex-col items-center justify-center bg-slate-900/20 rounded-xl border border-slate-900 p-6 text-center text-xs text-slate-600">
              <div className="w-full max-w-xs bg-white rounded-xl p-6 text-slate-800 shadow-md space-y-4">
                <div className="h-4 bg-purple-600/20 rounded w-2/3 mx-auto"></div>
                <div className="h-2 bg-slate-200 rounded w-5/6 mx-auto"></div>
                <div className="h-2 bg-slate-200 rounded w-4/5 mx-auto"></div>
                <hr className="border-slate-100" />
                <p className="text-[10px] font-bold tracking-wider text-purple-600 uppercase">Experience</p>
                <div className="flex justify-between text-[11px] font-bold"><p>Senior Product Manager</p><p className="text-slate-400">Stripe</p></div>
                <div className="h-1.5 bg-slate-100 rounded w-full"></div>
                <div className="h-1.5 bg-slate-100 rounded w-5/6"></div>
              </div>
            </div>
            <div className="pl-2 space-y-5 text-xs">
              <div className="text-center p-4 rounded-xl bg-slate-900/40 border border-slate-900">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Fit Score</p>
                <p className="text-3xl font-black text-emerald-400">87<span className="text-[11px] text-slate-500 font-normal">/100</span></p>
                <p className="text-[10px] text-emerald-500/80 font-bold tracking-wide mt-1">Great match</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Key Parameters</p>
                <div className="flex items-center justify-between text-[11px]"><span className="text-slate-400">Keywords</span><span className="text-cyan-400 font-bold">90%</span></div>
                <div className="flex items-center justify-between text-[11px]"><span className="text-slate-400">Metrics</span><span className="text-emerald-400 font-bold">78%</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND COMPARISON VALUE PROPOSITION SECTION - Inspired by Screenshot (62).png */}
      <section id="features" className="py-24 border-t border-slate-900 bg-slate-950/20 px-4 text-center max-w-6xl mx-auto space-y-16">
        <div className="space-y-3">
          <div className="px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-[10px] font-bold tracking-widest text-cyan-400 uppercase inline-block mx-auto">Why This Architecture</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            ChatGPT can rewrite your resume. <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">It can't do this.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-8 rounded-2xl border border-slate-900 bg-slate-900/30 space-y-4">
            <div className="text-cyan-400 text-xl font-bold">87%</div>
            <h3 className="text-base font-bold text-white">ATS match scoring</h3>
            <p className="text-sm text-slate-400 font-light leading-relaxed">See exactly how your resume scores against target job specifications. Keywords matched, core gaps flagged immediately.</p>
          </div>
          <div className="p-8 rounded-2xl border border-slate-900 bg-slate-900/30 space-y-4">
            <div className="text-purple-400 text-xl font-bold">⚡</div>
            <h3 className="text-base font-bold text-white">One-click tailoring</h3>
            <p className="text-sm text-slate-400 font-light leading-relaxed">Edit components directly inside a modular preview dashboard with formatting anchors and fast export setups.</p>
          </div>
          <div className="p-8 rounded-2xl border border-slate-900 bg-slate-900/30 space-y-4">
            <div className="text-emerald-400 text-xl font-bold">💾</div>
            <h3 className="text-base font-bold text-white">Every version, saved</h3>
            <p className="text-sm text-slate-400 font-light leading-relaxed">Retain one fundamental base master profile text data structure. Spin up infinite micro-variants targeted to discrete pipelines.</p>
          </div>
        </div>
      </section>

      {/* THREE STEPS ROADMAP MAP VIEW - Inspired by Screenshot (63).png */}
      <section className="py-20 px-4 text-center max-w-5xl mx-auto space-y-16">
        <div className="space-y-2">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Execution Stack</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white">Three steps. One perfect resume.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left relative">
          <div className="space-y-3 relative z-10 bg-[#030712] p-2">
            <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 flex items-center justify-center font-bold text-xs">01</div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Upload or start fresh</h3>
            <p className="text-xs text-slate-400 font-light leading-relaxed">Paste your current engineering profiles or project summaries. We handle structural standard configurations.</p>
          </div>
          <div className="space-y-3 relative z-10 bg-[#030712] p-2">
            <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 text-purple-400 flex items-center justify-center font-bold text-xs">02</div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Paste any job specs</h3>
            <p className="text-xs text-slate-400 font-light leading-relaxed">Insert target criteria details or framework keywords. The analyzer parses requirements in real-time.</p>
          </div>
          <div className="space-y-3 relative z-10 bg-[#030712] p-2">
            <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 flex items-center justify-center font-bold text-xs">03</div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Tailor and apply</h3>
            <p className="text-xs text-slate-400 font-light leading-relaxed">Regenerate optimized summaries instantly. Download optimized structured records with maximum algorithmic parity.</p>
          </div>
        </div>
        <button onClick={onStart} className="px-10 py-4 rounded-xl font-bold text-xs tracking-wider uppercase bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-600/10 transition inline-block">
          Start tailoring free
        </button>
      </section>

      {/* METRIC ACCURACY DATA HIGHLIGHT VISUALIZATIONS - Inspired by Screenshot (64).png & Screenshot (65).png */}
      <section className="py-20 border-t border-slate-900 bg-slate-950/40 px-4 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-[10px] font-bold tracking-widest text-emerald-400 uppercase inline-block">Score Intelligence</div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight leading-tight">Know your score before you click submit.</h2>
          <p className="text-sm text-slate-400 font-light leading-relaxed">
            Run your technical summaries directly through targeted keyword alignment engines. Spot validation mismatches, discover missing framework tags, and patch flaws instantly.
          </p>
          <div className="p-4 rounded-xl border border-slate-900 bg-slate-900/20 space-y-2 max-w-sm">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">AI Cold Outreach Engine included</p>
            <p className="text-xs text-slate-300 font-light">Generate tailored network introductory copy or cold LinkedIn connection text scripts tailored to matching protocols.</p>
          </div>
        </div>
        <div className="p-6 rounded-2xl border border-slate-900 bg-slate-950 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-900 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Keyword Coverage Metrics</span>
            <span className="text-xs text-emerald-400 font-mono font-bold bg-emerald-500/10 px-2 py-0.5 rounded">87 / 100 Verified</span>
          </div>
          <div className="space-y-2.5 font-mono text-xs">
            <div className="flex justify-between p-2.5 bg-slate-900/60 rounded-xl border border-slate-900"><span className="text-slate-300">Next.js & React Ecosystem</span><span className="text-emerald-400 font-bold">✓ matched</span></div>
            <div className="flex justify-between p-2.5 bg-slate-900/60 rounded-xl border border-slate-900"><span className="text-slate-300">Tailwind CSS Setup Architecture</span><span className="text-emerald-400 font-bold">✓ matched</span></div>
            <div className="flex justify-between p-2.5 bg-slate-900/60 rounded-xl border border-slate-900"><span className="text-slate-400">TypeScript Type Compilation</span><span className="text-emerald-400 font-bold">✓ matched</span></div>
            <div className="flex justify-between p-2.5 bg-slate-900/60 rounded-xl border border-slate-900/40 opacity-60"><span className="text-slate-500">GraphQL Server Resolvers</span><span className="text-red-400 font-bold">✗ missing</span></div>
            <div className="flex justify-between p-2.5 bg-slate-900/60 rounded-xl border border-slate-900/40 opacity-60"><span className="text-slate-500">Docker Container Swarms</span><span className="text-red-400 font-bold">✗ missing</span></div>
          </div>
        </div>
      </section>

      {/* USER SOCIAL PROOF REVIEWS TESTIMONIALS SECTION - Inspired by Screenshot (66).png */}
      <section id="testimonials" className="py-24 border-t border-slate-900 px-4 text-center max-w-5xl mx-auto space-y-16">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">From filtered out to scheduled interviews.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 rounded-xl border border-slate-900 bg-slate-950 space-y-4">
            <div className="text-amber-400 text-xs tracking-widest">★★★★★</div>
            <p className="text-xs text-slate-300 font-light leading-relaxed">"I was mass-applying with the same baseline document for months. After using the optimization breakdown mapping here, I locked in multiple tracking callbacks within my first week."</p>
            <p className="text-[11px] font-bold text-white">Sarah M. <span className="text-slate-500 font-normal block mt-0.5">Product Designer</span></p>
          </div>
          <div className="p-6 rounded-xl border border-slate-900 bg-slate-950 space-y-4">
            <div className="text-amber-400 text-xs tracking-widest">★★★★★</div>
            <p className="text-xs text-slate-300 font-light leading-relaxed">"The interactive key parameter checking is a game-changer. I could immediately see which API descriptions were dragging down alignment algorithms."</p>
            <p className="text-[11px] font-bold text-white">James K. <span className="text-slate-500 font-normal block mt-0.5">Software Engineer</span></p>
          </div>
          <div className="p-6 rounded-xl border border-slate-900 bg-slate-950 space-y-4">
            <div className="text-amber-400 text-xs tracking-widest">★★★★★</div>
            <p className="text-xs text-slate-300 font-light leading-relaxed">"Instead of burning nearly an hour manually modifying text variations for structural data tracking matches, I deploy customized layouts cleanly in under a minute."</p>
            <p className="text-[11px] font-bold text-white">Priya R. <span className="text-slate-500 font-normal block mt-0.5">Marketing Specialist</span></p>
          </div>
        </div>
      </section>

      {/* BOTTOM ACTION CTA WRAPPER SECTION - Inspired by Screenshot (67).png */}
      <section className="py-20 border-t border-slate-900 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-950/10 via-transparent to-transparent px-4 text-center max-w-4xl mx-auto space-y-6">
        <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">Every generic transmission sent is an opportunity lost.</p>
        <h2 className="text-4xl font-black text-white tracking-tight">Your next team interview is one resume away.</h2>
        <p className="text-xs text-slate-400 max-w-sm mx-auto font-light">Free blueprint environment access. No payment configuration card required.</p>
        <div className="pt-4">
          <button onClick={onStart} className="px-10 py-4 rounded-xl font-bold text-xs tracking-wider uppercase bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-95 text-white shadow-xl shadow-cyan-500/10 transition">
            Build your resume now
          </button>
        </div>
      </section>

      {/* INTERACTIVE FREQUENTLY ASKED QUESTIONS ACCORDION MODULE - Inspired by Screenshot (68).png */}
      <section id="faq" className="py-20 border-t border-slate-900 max-w-3xl mx-auto px-4 space-y-12">
        <h2 className="text-3xl font-extrabold text-white text-center tracking-tight">Frequently asked questions</h2>
        <div className="flex flex-col">
          <FAQItem question="How is this different from using ChatGPT?" answer="Standard LLM inputs lack contextual validation parameters. This application profiles precise algorithmic scores matching keyword proximity, frequency weights, and specific role index guidelines seamlessly." />
          <FAQItem question="Is my resume fully ATS-compatible?" answer="Yes. The structural formatting generator produces clean data layouts without tracking layers, complex column divisions, or invalid components that break baseline enterprise parsing frameworks." />
          <FAQItem question="How long does tailoring take?" answer="Once your master textual framework parameters are filled out, parsing individual targeted optimization outputs takes less than 60 seconds." />
          <FAQItem question="Can I upload my existing master doc text?" answer="Absolutely. Paste raw structural summaries directly into the dashboard interface box to spin up targeted parsing setups immediately." />
          <FAQItem question="What does baseline tooling cost?" answer="Core interactive workspace builds, verification mapping profiles, and evaluation analytics are entirely open access for up-and-coming developers." />
        </div>
      </section>

      {/* FOOTER ACCENTS */}
      <footer className="border-t border-slate-900/60 py-8 text-center text-[11px] text-slate-600 font-medium tracking-wider uppercase">
        © 2026 Resume Tailor Inc. Optimized Next-Gen Performance Environment.
      </footer>
    </div>
  );
}

// --- 2. THE ADVANCED REFACTOR WORKSPACE INTERFACE ---
function MainInterface({ onBack }: { onBack: () => void }) {
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [isOptimizing, setIsOptimizing] = useState(false);

  const handleOptimize = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsOptimizing(true);
    setTimeout(() => setIsOptimizing(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden animate-[fadeIn_0.6s_ease-out]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370c_1px,transparent_1px),linear-gradient(to_bottom,#1f29370c_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-5xl relative z-10 backdrop-blur-2xl bg-slate-900/40 border border-slate-800/60 rounded-3xl p-6 sm:p-10 shadow-2xl">
        
        {/* Navigation Action Back Hook */}
        <button 
          onClick={onBack}
          className="absolute top-6 left-6 text-xs text-slate-500 hover:text-white transition uppercase font-bold tracking-widest flex items-center gap-1"
        >
          ← Exit Workspace
        </button>

        <div className="space-y-3 text-center mb-10 pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-[11px] font-bold tracking-widest text-cyan-400 uppercase">
            Optimization Node Active
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">AI Engine Workspace</h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Feed data vectors below. Processing metrics instantly synchronizes structured semantic targets.
          </p>
        </div>

        <form onSubmit={handleOptimize} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative space-y-2">
              <label className="block text-xs font-bold tracking-widest text-slate-400 uppercase">Your Current Resume</label>
              <textarea
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                placeholder="Paste the raw text content of your current resume here..."
                className="w-full h-64 p-4 rounded-2xl border border-slate-800 bg-slate-950/60 text-slate-200 focus:outline-none focus:border-cyan-500/50 transition resize-none text-sm leading-relaxed"
                required
              />
            </div>
            <div className="group relative space-y-2">
              <label className="block text-xs font-bold tracking-widest text-slate-400 uppercase">Target Job Description</label>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the full job specs, technical stack, or role details here..."
                className="w-full h-64 p-4 rounded-2xl border border-slate-800 bg-slate-950/60 text-slate-200 focus:outline-none focus:border-purple-500/50 transition resize-none text-sm leading-relaxed"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isOptimizing}
            className="w-full py-5 rounded-2xl font-extrabold text-sm tracking-widest uppercase bg-gradient-to-r from-cyan-500 to-purple-600 text-white transition-all disabled:opacity-50"
          >
            {isOptimizing ? "Synchronizing Context Vectors..." : "Optimize & Tailor Resume"}
          </button>
        </form>
      </div>
    </div>
  );
}

// --- 3. ROOT ROOT APPLICATION ROUTER CONTROL PANEL ---
export default function Home() {
  const [view, setView] = useState<'landing' | 'workspace'>('landing');

  return (
    <main className="bg-[#030712] min-h-screen relative">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        html { scroll-behavior: smooth; }
      `}</style>
      
      {view === 'landing' ? (
        <HomeScreen onStart={() => setView('workspace')} />
      ) : (
        <MainInterface onBack={() => setView('landing')} />
      )}
    </main>
  );
}