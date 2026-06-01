"use client";

import { useState } from "react";

export default function Home() {
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleTailorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeText.trim() || !jobDescription.trim()) {
      alert("Please paste your resume text and the target job description!");
      return;
    }

    setLoading(true);
    setResult(null);
    setErrorMsg(null);

    try {
      const response = await fetch("/api/tailor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resume: resumeText,
          jobDescription: jobDescription,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to communicate with AI server.");
      }

      setResult(data.text);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || "Something went wrong. Please check your setup.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 font-sans antialiased selection:bg-neutral-700 selection:text-emerald-400">
      
      {/* Premium Ambient Background Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[350px] bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="relative max-w-5xl mx-auto px-4 py-12 sm:px-8 space-y-10">
        
        {/* Header Section */}
        <header className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800/80 border border-neutral-700/50 text-xs font-medium text-emerald-400 tracking-wide backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Next Generation ATS Optimization
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
            AI Resume Tailorer
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Instantly align your professional profile with target role requirements, target missing industry keywords, and clear automated applicant filters.
          </p>
        </header>

        {/* Workspace Form split layout */}
        <form onSubmit={handleTailorSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left Input Card: Resume text */}
            <div className="flex flex-col space-y-2 bg-neutral-800/40 backdrop-blur-md border border-neutral-800 p-5 rounded-2xl shadow-xl transition-all duration-300 hover:border-neutral-700/60 group">
              <div className="flex justify-between items-center pb-2">
                <label className="text-sm font-semibold tracking-wide text-neutral-200 group-hover:text-white transition-colors">
                  Current Resume Text
                </label>
                <span className="text-[11px] text-neutral-500 bg-neutral-800 px-2 py-0.5 rounded-md">Plain text</span>
              </div>
              <textarea
                className="w-full flex-grow h-64 px-4 py-3 bg-neutral-900/90 rounded-xl border border-neutral-800 text-neutral-300 placeholder-neutral-600 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/80 transition-all resize-none shadow-inner leading-relaxed"
                placeholder="Paste the raw text content of your current resume here..."
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
              />
            </div>

            {/* Right Input Card: Job Description */}
            <div className="flex flex-col space-y-2 bg-neutral-800/40 backdrop-blur-md border border-neutral-800 p-5 rounded-2xl shadow-xl transition-all duration-300 hover:border-neutral-700/60 group">
              <div className="flex justify-between items-center pb-2">
                <label className="text-sm font-semibold tracking-wide text-neutral-200 group-hover:text-white transition-colors">
                  Target Job Description
                </label>
                <span className="text-[11px] text-neutral-500 bg-neutral-800 px-2 py-0.5 rounded-md">Role details</span>
              </div>
              <textarea
                className="w-full flex-grow h-64 px-4 py-3 bg-neutral-900/90 rounded-xl border border-neutral-800 text-neutral-300 placeholder-neutral-600 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/80 transition-all resize-none shadow-inner leading-relaxed"
                placeholder="Paste the full job specs, technical constraints, or company overview parameters here..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />
            </div>

          </div>

          {/* Centered Submit CTA Action Button */}
          <div className="max-w-md mx-auto">
            <button
              type="submit"
              disabled={loading}
              className="relative w-full h-12 bg-white text-neutral-950 font-semibold rounded-xl hover:bg-neutral-100 transition-all duration-200 flex items-center justify-center gap-2 disabled:bg-neutral-800 disabled:text-neutral-500 disabled:cursor-not-allowed shadow-lg cursor-pointer active:scale-[0.99]"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-neutral-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing Layout Keywords...
                </>
              ) : (
                "Optimize & Tailor Resume"
              )}
            </button>
          </div>
        </form>

        {/* Runtime Error Card */}
        {errorMsg && (
          <div className="max-w-3xl mx-auto bg-red-950/40 border border-red-900/50 rounded-2xl p-4 text-sm text-red-300 backdrop-blur-sm flex items-center gap-3">
            <span className="p-1 rounded-md bg-red-900/30 text-red-400 font-bold">Error</span>
            {errorMsg}
          </div>
        )}

        {