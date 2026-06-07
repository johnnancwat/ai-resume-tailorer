"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- FAQ ACCORDION ITEM WITH FRAMER MOTION DYNAMICS ---
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-800/80 transition-colors duration-300">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left font-medium text-slate-200 hover:text-cyan-400 transition-colors text-sm sm:text-base group"
      >
        <span>{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0, color: isOpen ? "#22d3ee" : "#64748b" }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="text-xl font-light"
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
            <p className="text-sm text-slate-400 leading-relaxed font-light pb-5">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- 1. THE COMPLETE HIGH-END INTRO SCREEN (LANDING PAGE) ---
function HomeScreen({ onStart }: { onStart: () => void }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 14 } }
  };

  const faqs = [
    {
      question: "How is this different from using ChatGPT?",
      answer: "While ChatGPT can rewrite text, it doesn't know the specific rules of Applicant Tracking Systems (ATS). This platform analyzes your resume against a target job description in real-time, calculates a precise match score, identifies missing hard and soft keywords, and formats the output structural data perfectly for recruiters."
    },
    {
      question: "Is my resume fully ATS-compatible?",
      answer: "Yes. Every resume optimized and generated here uses clean data structures, standard web semantic headings, and a layout tested directly against major enterprise ATS platforms to ensure your data parses flawlessly without getting rejected by filters."
    },
    {
      question: "Can I drop my resume file directly into the portal?",
      answer: "Absolutely. You can choose between dragging in your PDF/DOCX file or pasting raw text strings using our updated dual-input container tabs in the active workspace."
    },
    {
      question: "How long does tailoring a resume take?",
      answer: "Under a minute! Once you paste your current resume text or upload your file alongside the target job description, our AI engines process the keyword gap analysis and generate an optimized profile almost instantly."
    },
    {
      question: "What does baseline tooling cost?",
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
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none"></div>

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

      <section className="relative pt-20 pb-16 px-4 text-center max-w-5xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
          <div className="space-y-4">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/5 text-[10px] font-bold tracking-widest text-purple-400 uppercase">
              🚀 The Ultimate ATS Cheat Code
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl font-black tracking-tight text-white max-w-3xl mx-auto leading-[1.1]">
              Optimize your resume to match high-value job specs.
            </motion.h1>
            <motion.p variants={itemVariants} className="text-slate-400 font-light text-base sm:text-lg max-w-xl mx-auto">
              Instantly upload your profile, inject missing technical metrics, and beat corporate automated screening algorithms.
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={onStart} className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-xs tracking-wider uppercase bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-95 text-white shadow-xl shadow-cyan-500/10 active:scale-98 transition">
              Build your resume now
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="relative rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 shadow-[0_0_60px_rgba(0,0,0,0.8)] max-w-4xl mx-auto text-left font-sans min-h-[300px]">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-900 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
              <div className="ml-4 bg-slate-900/60 rounded-md text-[10px] text-slate-500 px-6 py-1 border border-slate-800/40">resumetailor.ai/builder</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="border-r border-slate-900/80 pr-4 space-y-4 text-xs text-slate-500 font-medium">
                <p className="text-[10px] tracking-wider text-slate-600 uppercase font-bold">Resumes</p>
                <div className="p-2 bg-slate-900 border border-cyan-500/30 text-cyan-400 rounded-lg text-[11px]">DevOps Eng — Stripe</div>
                <div className="p-2 bg-slate-950 text-slate-400 rounded-lg text-[11px]">Frontend Arc — Vercel</div>
              </div>
              <div className="md:col-span-2 flex flex-col items-center justify-center bg-slate-900/20 rounded-xl border border-slate-900 p-6 text-center text-xs text-slate-600">
                <div className="w-full max-w-xs bg-white rounded-xl p-6 text-slate-800 shadow-md space-y-4">
                  <div className="h-4 bg-purple-600/20 rounded w-2/3 mx-auto"></div>
                  <div className="h-2 bg-slate-200 rounded w-5/6 mx-auto"></div>
                  <hr className="border-slate-100" />
                  <p className="text-[10px] font-bold tracking-wider text-purple-600 uppercase">Experience</p>
                  <div className="flex justify-between text-[11px] font-bold"><p>Senior Architect</p><p className="text-slate-400">Stripe</p></div>
                </div>
              </div>
              <div className="pl-2 space-y-5 text-xs">
                <div className="text-center p-4 rounded-xl bg-slate-900/40 border border-slate-900">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Fit Index Score</p>
                  <p className="text-3xl font-black text-emerald-400">87<span className="text-[11px] text-slate-500 font-normal">/100</span></p>
                  <p className="text-[10px] text-emerald-500 font-bold mt-1">Verified Safe Match</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

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

      <section className="py-20 px-4 text-center max-w-5xl mx-auto space-y-16">
        <div className="space-y-2">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Execution Stack</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white">Three steps. One perfect resume.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left relative">
          <div className="space-y-3 relative z-10 bg-[#030712] p-2">
            <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 flex items-center justify-center font-bold text-xs">01</div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Drop your File</h3>
            <p className="text-xs text-slate-400 font-light leading-relaxed">Upload your PDF or Word document directly. Our engine extracts the text automatically.</p>
          </div>
          <div className="space-y-3 relative z-10 bg-[#030712] p-2">
            <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 text-purple-400 flex items-center justify-center font-bold text-xs">02</div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Paste job specs</h3>
            <p className="text-xs text-slate-400 font-light leading-relaxed">Insert target criteria details or framework keywords. The analyzer parses requirements in real-time.</p>
          </div>
          <div className="space-y-3 relative z-10 bg-[#030712] p-2">
            <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 flex items-center justify-center font-bold text-xs">03</div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Tailor and apply</h3>
            <p className="text-xs text-slate-400 font-light leading-relaxed">Regenerate optimized summaries instantly. Download optimized structured records with maximum parity.</p>
          </div>
        </div>
        <button onClick={onStart} className="px-10 py-4 rounded-xl font-bold text-xs tracking-wider uppercase bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-600/10 transition inline-block">
          Start tailoring free
        </button>
      </section>

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

      <section id="faq" className="py-20 border-t border-slate-900 max-w-3xl mx-auto px-4 space-y-12">
        <h2 className="text-3xl font-extrabold text-white text-center tracking-tight">Frequently asked questions</h2>
        <div className="flex flex-col bg-slate-950/20 p-2 rounded-2xl border border-slate-900/40 backdrop-blur-sm px-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-900/60 py-8 text-center text-[11px] text-slate-600 font-medium tracking-wider uppercase">
        © 2026 Resume Tailor Inc. Optimized Next-Gen Performance Environment.
      </footer>
    </div>
  );
}

// --- 2. THE DUAL-INPUT ACTIVE WORKSPACE DASHBOARD ---
interface MainInterfaceProps {
  onBack: () => void;
  optimizedOutput: string;
  setOptimizedOutput: React.Dispatch<React.SetStateAction<string>>;
}

function MainInterface({ onBack, optimizedOutput, setOptimizedOutput }: MainInterfaceProps) {
  const [activeMethod, setActiveMethod] = useState<"upload" | "text">("text");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleOptimize = async (e: React.FormEvent) => {
    e.preventDefault();
    if (activeMethod === "upload" && !uploadedFile) {
      alert("Please upload your resume file first!");
      return;
    }
    if (activeMethod === "text" && !resumeText.trim()) {
      alert("Please paste your resume text layout string content!");
      return;
    }
    
    setIsOptimizing(true);
    
    // Simulate API generation delay
    setTimeout(() => {
      setIsOptimizing(false);
      setOptimizedOutput(
        `# JUMPER\n\n## PROFESSIONAL SUMMARY\nHighly disciplined Cyber Security and Software Engineering student at Bingham University. Proven expertise in deploying optimized Next.js web solutions, building clean utility interfaces with Tailwind CSS, and configuring secure automated database connections via Supabase pipelines.\n\n## CORE TECH CRITERIA ALIGNED\n* Next.js App Router Core Frameworks\n* Tailwind CSS Semantic Dark Themes\n* Database Management via Supabase Secure Vector Nodes`
      );
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col items-center justify-start p-4 sm:p-6 relative overflow-y-auto w-full py-16">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370c_1px,transparent_1px),linear-gradient(to_bottom,#1f29370c_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none"></div>

      <div className="w-full max-w-5xl relative z-10 backdrop-blur-2xl bg-slate-900/40 border border-slate-800/60 rounded-3xl p-6 sm:p-10 shadow-2xl">
        <button 
          type="button"
          onClick={onBack}
          className="absolute top-6 left-6 text-xs text-slate-500 hover:text-white transition uppercase font-bold tracking-widest flex items-center gap-1 cursor-pointer"
        >
          ← Exit Workspace
        </button>

        <div className="space-y-3 text-center mb-10 pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-[11px] font-bold tracking-widest text-cyan-400 uppercase">
            Optimization Node Active
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">AI Engine Workspace</h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Choose your preferred input layout. Drop a digital file or paste matching raw profile text.
          </p>
        </div>

        <form onSubmit={handleOptimize} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* HYBRID RESUME SWITCH TAB */}
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold tracking-widest text-slate-400 uppercase">Your Resume</label>
                <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800/80">
                  <button
                    type="button"
                    onClick={() => setActiveMethod("upload")}
                    className={`px-3 py-1 text-[10px] font-bold tracking-wider uppercase rounded-lg transition-all cursor-pointer ${
                      activeMethod === "upload" 
                        ? "bg-slate-900 border border-slate-800 text-cyan-400 shadow-sm" 
                        : "text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    File Upload
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveMethod("text")}
                    className={`px-3 py-1 text-[10px] font-bold tracking-wider uppercase rounded-lg transition-all cursor-pointer ${
                      activeMethod === "text" 
                        ? "bg-slate-900 border border-slate-800 text-purple-400 shadow-sm" 
                        : "text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    Paste Text
                  </button>
                </div>
              </div>
              
              <AnimatePresence mode="wait">
                {activeMethod === "upload" ? (
                  <motion.div
                    key="upload-tab"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="flex-1 min-h-[16rem]"
                  >
                    <input 
                      type="file" 
                      ref={fileInputRef}
                      onChange={(e) => { if (e.target.files?.[0]) setUploadedFile(e.target.files[0]); }}
                      accept=".pdf,.docx,.txt"
                      className="hidden" 
                    />
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={() => setIsDragging(false)}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`w-full h-full min-h-[16rem] rounded-2xl border-2 border-dashed flex flex-col items-center justify-center p-6 text-center cursor-pointer transition-all duration-300 group ${
                        isDragging 
                          ? "border-cyan-400 bg-cyan-500/10 shadow-lg" 
                          : "border-slate-800 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-950/80"
                      }`}
                    >
                      {!uploadedFile ? (
                        <div className="space-y-4 pointer-events-none">
                          <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800/80 flex items-center justify-center mx-auto text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors duration-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-200">Drag & drop file here</p>
                            <p className="text-xs text-slate-500 mt-1">Supports PDF, DOCX, TXT</p>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <p className="text-sm font-bold text-white truncate max-w-[240px] mx-auto">{uploadedFile.name}</p>
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setUploadedFile(null); }}
                            className="px-4 py-1.5 bg-red-500/10 border border-red-500/20 text-red-400 font-semibold rounded-lg text-[11px] uppercase tracking-wide hover:bg-red-500/20 transition cursor-pointer"
                          >
                            Remove File
                          </button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="text-tab"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="flex-1 min-h-[16rem]"
                  >
                    <textarea
                      value={resumeText}
                      onChange={(e) => setResumeText(e.target.value)}
                      placeholder="Paste the raw text content of your resume directly here..."
                      className="w-full h-full min-h-[16rem] p-4 rounded-2xl border border-slate-800 bg-slate-950/60 text-slate-200 focus:outline-none focus:border-purple-500/50 transition resize-none text-sm leading-relaxed font-sans"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* TARGET SPEC JOB DESCRIPTION FIELD */}
            <div className="group relative space-y-2 flex flex-col">
              <label className="block text-xs font-bold tracking-widest text-slate-400 uppercase h-[26px] flex items-center">
                Target Job Description
              </label>
              <div className="flex-1 min-h-[16rem]">
                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Paste the full job specs, technical stack, or role details here..."
                  className="w-full h-full min-h-[16rem] p-4 rounded-2xl border border-slate-800 bg-slate-950/60 text-slate-200 focus:outline-none focus:border-purple-500/50 transition resize-none text-sm leading-relaxed font-sans"
                  required
                />
              </div>
            </div>

          </div>

          <button
            type="submit"
            disabled={isOptimizing}
            className="w-full py-5 rounded-2xl font-extrabold text-sm tracking-widest uppercase bg-gradient-to-r from-cyan-500 to-purple-600 text-white transition-all disabled:opacity-50 cursor-pointer shadow-xl shadow-cyan-500/5 hover:opacity-95"
          >
            {isOptimizing ? "Processing Alignment Engines..." : "Optimize & Tailor Resume"}
          </button>
        </form>

        {/* EXPORT AND FILE DOWNLOAD MATRIX SECTION */}
        <AnimatePresence>
          {optimizedOutput && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="space-y-4 mt-12 pt-8 border-t border-slate-800/80"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <label className="block text-xs font-bold tracking-widest text-slate-400 uppercase">
                    Tailored Profile Output View
                  </label>
                  <p className="text-[11px] text-slate-500 font-light mt-0.5">
                    Export your tracking-optimized profile securely to your local machine.
                  </p>
                </div>
                
                <div className="flex items-center gap-2.5 self-start sm:self-auto">
                  <button
                    type="button"
                    onClick={() => {
                      const blob = new Blob([optimizedOutput], { type: "text/markdown;charset=utf-8;" });
                      const url = URL.createObjectURL(blob);
                      const link = document.createElement("a");
                      link.href = url;
                      link.setAttribute("download", "optimized_resume_matrix.md");
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="px-3.5 py-2 rounded-xl text-[11px] font-bold tracking-wider uppercase border border-slate-800 bg-slate-950 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Markdown
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      const blob = new Blob([optimizedOutput], { type: "text/plain;charset=utf-8;" });
                      const url = URL.createObjectURL(blob);
                      const link = document.createElement("a");
                      link.href = url;
                      link.setAttribute("download", "ats_optimized_resume.txt");
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="px-3.5 py-2 rounded-xl text-[11px] font-bold tracking-wider uppercase bg-slate-900 border border-slate-800 text-slate-300 hover:text-purple-400 hover:border-purple-500/30 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Text (ATS Safe)
                  </button>
                </div>
              </div>

              <div className="w-full p-6 rounded-2xl border border-slate-800/60 bg-slate-950/60 text-slate-300 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap font-mono max-h-96 overflow-y-auto selection:bg-purple-500/30">
                {optimizedOutput}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

// --- 3. ROOT APPLICATION CONTAINER OVERSEER ---
export default function Home() {
  const [view, setView] = useState<"landing" | "workspace">("landing");
  // Shared structural context housing variable securely
  const [optimizedOutput, setOptimizedOutput] = useState("");

  return (
    <main className="bg-[#030712] min-h-screen relative overflow-x-hidden">
      <AnimatePresence mode="wait">
        {view === "landing" ? (
          <HomeScreen key="landing-screen" onStart={() => setView("workspace")} />
        ) : (
          <MainInterface 
            key="workspace-screen" 
            onBack={() => setView("landing")} 
            optimizedOutput={optimizedOutput}
            setOptimizedOutput={setOptimizedOutput}
          />
        )}
      </AnimatePresence>
    </main>
  );
}