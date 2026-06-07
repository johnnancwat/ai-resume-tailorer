"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- GLOBAL FAQ ACCORDION ---
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div initial={false} className="border-b border-slate-800/60 transition-colors duration-300">
      <button type="button" onClick={() => setIsOpen(!isOpen)} className="w-full py-5 flex items-center justify-between text-left font-medium text-slate-200 hover:text-cyan-400 transition-colors text-sm sm:text-base group">
        <span>{question}</span>
        <motion.span animate={{ rotate: isOpen ? 45 : 0, color: isOpen ? "#22d3ee" : "#64748b" }} transition={{ type: "spring", stiffness: 200, damping: 15 }} className="text-xl font-light">+</motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} className="overflow-hidden">
            <p className="text-sm text-slate-400 leading-relaxed font-light pb-5">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// --- 1. FULL PRE-OPTIMIZED HOMEPAGE (LANDING SCREEN) ---
function HomeScreen({ onStart }: { onStart: () => void }) {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } } };
  const itemVariants = { hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 14 } } };
  const faqs = [
    { question: "How is this different from using ChatGPT?", answer: "ChatGPT can't analyze keyword metrics against job descriptions in real-time or optimize output structural data, lacking contextual validation for corporate ATS parsers." },
    { question: "Is my resume ATS-compatible?", answer: "Yes, every tailored variation uses standard headers, clean schema metadata, and structured data layouts proven for maximum algorithmic alignment with major corporate parsers." },
    { question: "How long does tailoring a resume take?", answer: "Under 60 seconds! Once your textual data is loaded, our optimization engine synchronizes high-value metrics and parses missing frameworks instantly." },
    { question: "Can I use my existing resume?", answer: "Absolutely. Paste your current resume copy-text or drop your existing file data directly to kickstart the dynamic optimization environment." },
    { question: "What does baseline tooling cost?", answer: "Our core interactive workspace environment, semantic metric checking, and initial tailoring configurations are entirely free to deploy." },
    { question: "Is my data private?", answer: "Your information is securely encrypted using corporate standard protocols and never transmitted to external third-party training data layers." },
    { question: "Can I generate tailored outreach messages too?", answer: "Yes, the app features an AI Outreach component specifically for cold LinkedIn introductions or network follow-up emails, tailored with matching protocols." },
    { question: "Can I track multiple versions of my resume?", answer: "Yes, the workspace integrates active organization nodes to manage infinite micro-variants tied to discrete pipeline targets." },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-[#02040a] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293706_1px,transparent_1px),linear-gradient(to_bottom,#1f293706_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      <motion.div animate={{ scale: [1, 1.15, 1], x: [0, 40, 0], y: [0, -20, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 to-blue-600/5 rounded-full blur-[130px] pointer-events-none" />
      <motion.div animate={{ scale: [1, 1.2, 1], x: [0, -50, 0], y: [0, 30, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-purple-600/10 to-pink-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#02040a]/70 border-b border-slate-900/60 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <motion.div whileHover={{ scale: 1.08, rotate: 5 }} className="bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-2 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          </motion.div>
          <span className="font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent text-base">Resume Tailor</span>
        </div>
        <button onClick={onStart} className="px-5 py-2 rounded-xl text-xs font-bold tracking-wider border border-slate-800 bg-slate-950/80 hover:border-cyan-500/40 text-white shadow-lg transition-all duration-300 relative overflow-hidden group"><span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />Get Started Free</button>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-16 px-4 text-center max-w-5xl mx-auto space-y-12">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-[10px] font-black tracking-widest text-cyan-400 uppercase shadow-[0_0_15px_rgba(6,182,212,0.1)]">🚀 Dynamic ATS Optimization Environment</motion.div>
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-7xl font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.05]">Optimize your resume to match <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(168,85,247,0.15)]">high-value job specs.</span></motion.h1>
          <motion.p variants={itemVariants} className="text-slate-400 font-light text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">Instantly upload file packages, evaluate missing core technical framework parameters, and outsmart screening evaluation bots smoothly.</motion.p>
          <motion.div variants={itemVariants} className="pt-4"><motion.button whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(6,182,212,0.3)" }} whileTap={{ scale: 0.97 }} onClick={onStart} className="w-full sm:w-auto px-10 py-4 rounded-2xl font-black text-xs tracking-widest uppercase bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white shadow-xl cursor-pointer">Build your resume now</motion.button></motion.div>
        </motion.div>
      </section>

      {/* FEATURES ROW (Value Props) */}
      <section id="features" className="py-28 border-t border-slate-900/60 bg-slate-950/20 px-4 max-w-6xl mx-auto space-y-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="space-y-4 text-center"><div className="px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/5 text-[10px] font-black tracking-widest text-purple-400 uppercase inline-block mx-auto">Architecture Value</div><h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">ChatGPT can rewrite your resume. <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">It can't do this.</span></h2></motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[ { metric: "87%", title: "ATS match scoring", desc: "See exactly how your resume scores against target job specifications. Keywords matched, core gaps flagged immediately.", color: "from-cyan-400 to-blue-500" }, { metric: "⚡", title: "One-click tailoring", desc: "Edit components directly inside a modular preview dashboard with formatting anchors and fast export setups.", color: "from-purple-400 to-pink-500" }, { metric: "💾", title: "Every version, saved", desc: "Retain one fundamental base master profile text data structure. Spin up infinite micro-variants targeted to discrete pipelines.", color: "from-emerald-400 to-teal-500" } ].map((feat, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} whileHover={{ y: -5, borderColor: "rgba(147,51,234,0.3)" }} className="p-8 rounded-2xl border border-slate-900 bg-slate-950/40 backdrop-blur-sm space-y-4 relative group overflow-hidden transition-colors duration-300">
              <div className={`text-2xl font-black bg-gradient-to-r ${feat.color} bg-clip-text text-transparent`}>{feat.metric}</div>
              <h3 className="text-base font-bold text-white tracking-wide">{feat.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION (Now integrated correctly below features) */}
      <section id="faq" className="py-24 border-t border-slate-900/60 max-w-3xl mx-auto px-4 space-y-16">
        <h2 className="text-3xl sm:text-4xl font-black text-white text-center tracking-tight leading-tight">Frequently asked questions</h2>
        <div className="flex flex-col bg-slate-950/20 p-2 rounded-2xl border border-slate-900/40 backdrop-blur-sm px-6">
          {faqs.map((faq, index) => <FAQItem key={index} {...faq} />)}
        </div>
      </section>

      <footer className="border-t border-slate-900/40 py-10 text-center text-[10px] text-slate-600 font-bold tracking-widest uppercase">© 2026 Resume Tailor Inc. Optimized Next-Gen Performance Environment.</footer>
    </motion.div>
  );
}

// --- 2. DUAL-INPUT ACTIVE WORKSPACE INTERFACE (Dashboard) ---
function MainInterface({ onBack }: { onBack: () => void }) {
  const [activeMethod, setActiveMethod] = useState<'upload' | 'text'>('upload');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(true); };
  const handleDrop = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(false); if (e.dataTransfer.files && e.dataTransfer.files[0]) { setUploadedFile(e.dataTransfer.files[0]); } };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => { if (e.target.files && e.target.files[0]) { setUploadedFile(e.target.files[0]); } };
  const clearFile = (e: React.MouseEvent) => { e.stopPropagation(); setUploadedFile(null); if (fileInputRef.current) fileInputRef.current.value = ""; };

  const handleOptimize = async (e: React.FormEvent) => {
    e.preventDefault();
    if (activeMethod === "upload" && !uploadedFile) { alert("Please upload your resume binary document file!"); return; }
    if (activeMethod === "text" && !resumeText.trim()) { alert("Please paste matching resume raw content text!"); return; }
    setIsOptimizing(true);
    setTimeout(() => setIsOptimizing(false), 2500);
  };

  return (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ type: "spring", stiffness: 150, damping: 20 }} className="min-h-screen bg-[#02040a] text-slate-100 flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden animate-[fadeIn_0.6s_ease-out]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370c_1px,transparent_1px),linear-gradient(to_bottom,#1f29370c_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none"></div>
      <div className="w-full max-w-5xl relative z-10 backdrop-blur-3xl bg-slate-950/40 border border-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl">
        <motion.button whileHover={{ x: -3 }} type="button" onClick={onBack} className="absolute top-6 left-6 text-xs text-slate-500 hover:text-white transition-colors uppercase font-black tracking-widest flex items-center gap-1 cursor-pointer">← Exit Workspace</motion.button>
        <div className="space-y-3 text-center mb-10 pt-4"><div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-[11px] font-black tracking-widest text-purple-400 uppercase">Optimization Node Active</div><h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">AI Engine Workspace</h1><p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">Feed high-fidelity semantic data vectors. Choose processing path below: direct file transmission or direct raw textual profile data injection.</p></div>

        <form onSubmit={handleOptimize} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* DRAG-AND-DROP FILE INTERFACE CONTAINER */}
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between"><label className="block text-xs font-bold tracking-widest text-slate-400 uppercase">Your Resume Master</label>
                <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800/80"><button type="button" onClick={() => { setActiveMethod("upload"); setResumeText(""); }} className={`px-3 py-1 text-[10px] font-bold tracking-wider uppercase rounded-lg transition-all ${ activeMethod === "upload" ? "bg-slate-900 border border-slate-800 text-cyan-400 shadow-inner" : "text-slate-500 hover:text-slate-300" }`}>File Transfer</button><button type="button" onClick={() => { setActiveMethod("text"); setUploadedFile(null); }} className={`px-3 py-1 text-[10px] font-bold tracking-wider uppercase rounded-lg transition-all ${ activeMethod === "text" ? "bg-slate-900 border border-slate-800 text-purple-400 shadow-inner" : "text-slate-500 hover:text-slate-300" }`}>Text Paste</button></div>
              </div>
              <AnimatePresence mode="wait">
                {activeMethod === "upload" ? (
                  <motion.div key="upload-pane" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="flex-1 min-h-[16rem]">
                    <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".pdf,.docx,.txt" className="hidden" />
                    <div onDragOver={handleDragOver} onDragLeave={() => setIsDragging(false)} onDrop={handleDrop} onClick={() => fileInputRef.current?.click()} className={`w-full h-full min-h-[16rem] rounded-2xl border-2 border-dashed flex flex-col items-center justify-center p-6 text-center cursor-pointer transition-all duration-300 group ${ isDragging ? "border-cyan-400 bg-cyan-500/10 shadow-lg" : "border-slate-800 bg-slate-950/40 hover:border-slate-700 hover:bg-slate-950/60" }`}>
                      {!uploadedFile ? (
                        <div className="space-y-4 pointer-events-none"><div className="w-11 h-11 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all duration-300"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg></div><div><p className="text-sm font-semibold text-slate-200">Drag & drop resume master file</p><p className="text-xs text-slate-500 mt-0.5">PDF, DOCX, TXT format binary keys</p></div></div>
                      ) : (
                        <div className="space-y-4"><p className="text-sm font-bold text-cyan-400 truncate max-w-[200px] mx-auto">{uploadedFile.name}</p><button type="button" onClick={clearFile} className="px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-[10px] uppercase font-bold hover:bg-red-500/20">Remove</button></div>
                      )}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="text-pane" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="flex-1 min-h-[16rem]">
                    <textarea value={resumeText} onChange={(e) => setResumeText(e.target.value)} placeholder="Paste the raw matching content strings of your master resume text data directly here..." className="w-full h-full min-h-[16rem] p-4 rounded-2xl border border-slate-800 bg-slate-950/40 text-slate-200 focus:outline-none focus:border-purple-500/40 transition-colors resize-none text-sm leading-relaxed" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* JOB DESCRIPTION INPUT CONTAINER */}
            <div className="group relative space-y-2 flex flex-col"><label className="block text-xs font-bold tracking-widest text-slate-400 uppercase h-[26px] flex items-center">Target Job Metadata Description</label><div className="flex-1 min-h-[16rem]"><textarea value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} placeholder="Paste the full job specs, technical requirements, or role details here..." className="w-full h-full min-h-[16rem] p-4 rounded-2xl border border-slate-800 bg-slate-950/40 text-slate-200 focus:outline-none focus:border-purple-500/40 transition-colors resize-none text-sm leading-relaxed font-sans" required /></div></div>
          </div>

          <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} type="submit" disabled={isOptimizing} className="w-full py-5 rounded-2xl font-black text-sm tracking-widest uppercase bg-gradient-to-r from-cyan-500 to-purple-600 text-white transition-all disabled:opacity-50 cursor-pointer shadow-xl shadow-cyan-500/5 hover:opacity-95">{isOptimizing ? "Processing Alignment Engines..." : "Optimize & Tailor Resume"}</motion.button>
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
      <style>{`html { scroll-behavior: smooth; }`}</style>
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