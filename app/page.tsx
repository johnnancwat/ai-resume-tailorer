"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- GLOBAL ACCORDION ITEM COMPONENT WITH DETAILED SPRING TRANSITIONS ---
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div 
      initial={false}
      className="border-b border-slate-800/60 transition-colors duration-300"
    >
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
            <p className="text-sm text-slate-400 leading-relaxed font-light pb-5">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// --- 1. VISUALLY BEAUTIFIED PREMIUM LANDING PAGE SCREEN ---
function HomeScreen({ onStart }: { onStart: () => void }) {
  // Staggered child variants configuration matrix
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 14 }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#02040a] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden"
    >
      {/* Hyper-Vibrant Dynamic Ambient Background Lighting */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293706_1px,transparent_1px),linear-gradient(to_bottom,#1f293706_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          x: [0, 40, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 to-blue-600/5 rounded-full blur-[130px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-purple-600/10 to-pink-500/5 rounded-full blur-[150px] pointer-events-none"
      />

      {/* HEADER NAVIGATION PIPELINE */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#02040a]/70 border-b border-slate-900/60 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <motion.div 
            whileHover={{ scale: 1.08, rotate: 5 }}
            className="bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-2 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </motion.div>
          <span className="font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent text-base">Resume Tailor</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest text-slate-400 uppercase">
          <a href="#features" className="hover:text-cyan-400 transition-colors duration-300">Features</a>
          <a href="#testimonials" className="hover:text-purple-400 transition-colors duration-300">Reviews</a>
          <a href="#faq" className="hover:text-pink-400 transition-colors duration-300">FAQ</a>
        </nav>
        <motion.button 
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={onStart} 
          className="px-5 py-2 rounded-xl text-xs font-bold tracking-wider border border-slate-800 bg-slate-950/80 hover:border-cyan-500/40 text-white shadow-lg transition-all duration-300 relative overflow-hidden group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          Get Started Free
        </motion.button>
      </header>

      {/* HERO HERO BRAND DISPLAY CONTAINER */}
      <section className="relative pt-24 pb-16 px-4 text-center max-w-5xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          <div className="space-y-6">
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-[10px] font-black tracking-widest text-cyan-400 uppercase shadow-[0_0_15px_rgba(6,182,212,0.1)]"
            >
              🚀 The Ultimate ATS Cheat Code
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-7xl font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.05]"
            >
              Optimize your resume to match{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(168,85,247,0.15)]">
                high-value job specs.
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-slate-400 font-light text-base sm:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Instantly upload file packages, evaluate missing core technical framework parameters, and outsmart screening evaluation bots smoothly.
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(6,182,212,0.3)" }}
              whileTap={{ scale: 0.97 }}
              onClick={onStart} 
              className="w-full sm:w-auto px-10 py-4 rounded-2xl font-black text-xs tracking-widest uppercase bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white shadow-xl shadow-cyan-500/10 transition-all duration-300 cursor-pointer"
            >
              Build your resume now
            </motion.button>
          </motion.div>

          {/* Interactive Core Mockup Dashboard Shell */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-2xl border border-slate-800/80 bg-slate-950/40 p-4 shadow-[0_0_50px_rgba(0,0,0,0.7)] max-w-4xl mx-auto backdrop-blur-sm group"
          >
            {/* Multi-Colored Glowing Top Border Overlay Anchor */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="flex items-center gap-2 pb-3 border-b border-slate-900/80 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
              <div className="ml-4 bg-slate-900/40 rounded-md text-[10px] text-slate-500 px-6 py-1 border border-slate-800/20 font-mono">resumetailor.ai/workspace</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left font-sans min-h-[280px]">
              <div className="border-r border-slate-900/60 pr-4 space-y-3 text-xs text-slate-500 font-medium">
                <p className="text-[9px] tracking-widest text-slate-600 uppercase font-bold">Resumes Array</p>
                <div className="p-2.5 bg-slate-900/80 border border-cyan-500/20 text-cyan-400 rounded-xl text-[11px] font-semibold">DevOps Eng — Stripe</div>
                <div className="p-2.5 bg-slate-950/20 text-slate-500 rounded-xl text-[11px] hover:text-slate-300 hover:bg-slate-900/30 transition duration-300">Frontend Arc — Vercel</div>
              </div>
              <div className="md:col-span-2 flex flex-col items-center justify-center bg-slate-900/10 rounded-xl border border-slate-900/60 p-6 text-center text-xs">
                <div className="w-full max-w-xs bg-slate-950/80 border border-slate-800 rounded-xl p-5 text-slate-300 shadow-xl space-y-3.5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/10 rounded-full blur-xl" />
                  <div className="h-3 bg-purple-500/20 rounded w-2/3"></div>
                  <div className="h-2 bg-slate-800 rounded w-5/6"></div>
                  <div className="h-2 bg-slate-800 rounded w-4/5"></div>
                  <hr className="border-slate-900" />
                  <div className="flex justify-between text-[11px] font-bold text-white"><p>Senior Architect</p><p className="text-purple-400 font-mono">Stripe</p></div>
                  <div className="h-1.5 bg-slate-800 rounded w-full"></div>
                </div>
              </div>
              <div className="pl-2 flex flex-col justify-between py-1">
                <div className="text-center p-4 rounded-xl bg-gradient-to-b from-slate-900/50 to-slate-950 border border-slate-900/80 shadow-md">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500 mb-1">Fit Index Score</p>
                  <p className="text-4xl font-black text-emerald-400 tracking-tight">87<span className="text-xs text-slate-600 font-normal">/100</span></p>
                  <p className="text-[10px] text-emerald-400/80 font-bold tracking-wide mt-1 bg-emerald-500/5 py-0.5 rounded-md border border-emerald-500/10">Verified Safe Match</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* VALUE COMPARISON GRID MATRIX ROW */}
      <section id="features" className="py-28 border-t border-slate-900/60 bg-gradient-to-b from-transparent via-slate-950/10 to-transparent px-4 max-w-6xl mx-auto space-y-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-center"
        >
          <div className="px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/5 text-[10px] font-black tracking-widest text-purple-400 uppercase inline-block mx-auto">Why This Architecture</div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            ChatGPT can rewrite your resume. <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">It can't do this.</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { metric: "87%", title: "ATS match scoring", desc: "See exactly how your resume scores against target job specifications. Keywords matched, core gaps flagged immediately.", color: "from-cyan-400 to-blue-500" },
            { metric: "⚡", title: "One-click tailoring", desc: "Edit components directly inside a modular preview dashboard with formatting anchors and fast export setups.", color: "from-purple-400 to-pink-500" },
            { metric: "💾", title: "Every version, saved", desc: "Retain one fundamental base master profile text data structure. Spin up infinite micro-variants targeted to discrete pipelines.", color: "from-emerald-400 to-teal-500" }
          ].map((feat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, borderColor: "rgba(147,51,234,0.3)" }}
              className="p-8 rounded-2xl border border-slate-900 bg-slate-950/40 backdrop-blur-sm space-y-4 relative group overflow-hidden transition-colors duration-300"
            >
              <div className={`text-2xl font-black bg-gradient-to-r ${feat.color} bg-clip-text text-transparent`}>{feat.metric}</div>
              <h3 className="text-base font-bold text-white tracking-wide">{feat.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION ACCORDION MODULE */}
      <section id="faq" className="py-24 border-t border-slate-900/60 max-w-3xl mx-auto px-4 space-y-16">
        <h2 className="text-3xl sm:text-4xl font-black text-white text-center tracking-tight">Frequently asked questions</h2>
        <div className="flex flex-col bg-slate-950/20 p-2 rounded-2xl border border-slate-900/40 backdrop-blur-sm px-6">
          <FAQItem question="How is this different from using ChatGPT?" answer="Standard LLM inputs lack contextual validation parameters. This application profiles precise algorithmic scores matching keyword proximity, frequency weights, and specific role index guidelines seamlessly." />
          <FAQItem question="Is my resume fully ATS-compatible?" answer="Yes. The structural formatting generator produces clean data layouts without tracking layers, complex column divisions, or invalid components that break baseline enterprise parsing frameworks." />
          <FAQItem question="Can I drop my resume file directly into the portal?" answer="Absolutely! You can choose between dragging in your PDF/DOCX file or pasting raw text strings using our updated dual-input container tabs." />
        </div>
      </section>

      <footer className="border-t border-slate-900/40 py-10 text-center text-[10px] text-slate-600 font-bold tracking-widest uppercase">
        © 2026 Resume Tailor Inc. Optimized Next-Gen Performance Environment.
      </footer>
    </motion.div>
  );
}

// --- 2. WORKSPACE INTERFACE PANEL WITH HYBRID INTEGRATIONS ---
type InputMethod = "upload" | "text";

function MainInterface({ onBack }: { onBack: () => void }) {
  const [activeMethod, setActiveMethod] = useState<InputMethod>("upload");
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
      alert("Please paste your resume layout content strings!");
      return;
    }
    setIsOptimizing(true);
    setTimeout(() => setIsOptimizing(false), 2500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
      className="min-h-screen bg-[#02040a] text-slate-100 flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none"></div>

      <div className="w-full max-w-5xl relative z-10 backdrop-blur-3xl bg-slate-950/40 border border-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl">
        
        <motion.button 
          whileHover={{ x: -3 }}
          type="button"
          onClick={onBack}
          className="absolute top-6 left-6 text-xs text-slate-500 hover:text-white transition-colors duration-300 uppercase font-black tracking-widest flex items-center gap-1 cursor-pointer"
        >
          ← Exit Workspace
        </motion.button>

        <div className="space-y-3 text-center mb-10 pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-[11px] font-black tracking-widest text-purple-400 uppercase">
            Optimization Node Active
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">AI Engine Workspace</h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Choose your processing track. Supply binary documents or insert direct structural profile text blocks.
          </p>
        </div>

        <form onSubmit={handleOptimize} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold tracking-widest text-slate-400 uppercase">Your Resume</label>
                
                <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-900/80">
                  <button
                    type="button"
                    onClick={() => { setActiveMethod("upload"); setResumeText(""); }}
                    className={`px-3 py-1 text-[10px] font-bold tracking-wider uppercase rounded-lg transition-all ${
                      activeMethod === "upload" 
                        ? "bg-slate-900 border border-slate-800 text-cyan-400 shadow-inner" 
                        : "text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    File Upload
                  </button>
                  <button
                    type="button"
                    onClick={() => { setActiveMethod("text"); setUploadedFile(null); }}
                    className={`px-3 py-1 text-[10px] font-bold tracking-wider uppercase rounded-lg transition-all ${
                      activeMethod === "text" 
                        ? "bg-slate-900 border border-slate-800 text-purple-400 shadow-inner" 
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
                    key="upload-pane"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="flex-1 min-h-[16rem]"
                  >
                    <input 
                      type="file" 
                      ref={fileInputRef}
                      onChange={(e) => { if(e.target.files?.[0]) setUploadedFile(e.target.files[0]) }}
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
                          : "border-slate-800 bg-slate-950/40 hover:border-slate-700 hover:bg-slate-950/60"
                      }`}
                    >
                      {!uploadedFile ? (
                        <div className="space-y-4 pointer-events-none">
                          <div className="w-11 h-11 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all duration-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-200">Drag & drop resume file</p>
                            <p className="text-xs text-slate-500 mt-0.5">PDF, DOCX, TXT format keys</p>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <p className="text-sm font-bold text-cyan-400 truncate max-w-[200px] mx-auto">{uploadedFile.name}</p>
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setUploadedFile(null); }}
                            className="px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-[10px] uppercase font-bold hover:bg-red-500/20"
                          >
                            Remove
                          </button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="text-pane"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="flex-1 min-h-[16rem]"
                  >
                    <textarea
                      value={resumeText}
                      onChange={(e) => setResumeText(e.target.value)}
                      placeholder="Paste the raw text content of your profile data directly here..."
                      className="w-full h-full min-h-[16rem] p-4 rounded-2xl border border-slate-800 bg-slate-950/40 text-slate-200 focus:outline-none focus:border-purple-500/40 transition-colors resize-none text-sm font-sans"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="group relative space-y-2 flex flex-col">
              <label className="block text-xs font-bold tracking-widest text-slate-400 uppercase h-[26px] flex items-center">
                Target Job Description
              </label>
              <div className="flex-1 min-h-[16rem]">
                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Paste the full job specs, technical requirements, or role metadata tags here..."
                  className="w-full h-full min-h-[16rem] p-4 rounded-2xl border border-slate-800 bg-slate-950/40 text-slate-200 focus:outline-none focus:border-purple-500/40 transition-colors resize-none text-sm font-sans"
                  required
                />
              </div>
            </div>

          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            disabled={isOptimizing}
            className="w-full py-5 rounded-2xl font-black text-sm tracking-widest uppercase bg-gradient-to-r from-cyan-500 to-purple-600 text-white transition-all disabled:opacity-50 cursor-pointer shadow-xl shadow-cyan-500/5 hover:opacity-95"
          >
            {isOptimizing ? "Processing Alignment Engines..." : "Optimize & Tailor Resume"}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}

// --- 3. ROOT APPLICATION ROUTER CONTROL PANEL ---
export default function Home() {
  const [view, setView] = useState<'landing' | 'workspace'>('landing');

  return (
    <main className="bg-[#02040a] min-h-screen relative overflow-x-hidden">
      <style>{`
        html { scroll-behavior: smooth; }
      `}</style>
      
      <AnimatePresence mode="wait">
        {view === 'landing' ? (
          <HomeScreen key="landing-page" onStart={() => setView('workspace')} />
        ) : (
          <MainInterface key="workspace-page" onBack={() => setView('landing')} />
        )}
      </AnimatePresence>
    </main>
  );
}