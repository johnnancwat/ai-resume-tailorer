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
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans p-6 sm:p-12">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="text-center sm:text-left space-y-2 border-b border-zinc-200 pb-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-950">
            AI-Powered Resume Tailorer
          </h1>
          <p className="text-zinc-600 text-lg">
            Paste your resume and target role details below to instantly optimize for Applicant Tracking Systems (ATS).
          </p>
        </header>

        {/* Main Workspace Form */}
        <form onSubmit={handleTailorSubmit} className="space-y-6 bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
          
          {/* Resume Text Box */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-zinc-800">
              Paste Your Current Resume Content
            </label>
            <textarea
              className="w-full h-40 px-4 py-3 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:border-transparent resize-y text-sm"
              placeholder="Select and copy all text from your resume document and paste it here..."
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
            />
          </div>

          {/* Job Description Box */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-zinc-800">
              Target Job Description
            </label>
            <textarea
              className="w-full h-40 px-4 py-3 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:border-transparent resize-y text-sm"
              placeholder="Paste the target job description or role requirements here..."
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
          </div>

          {/* Action Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-zinc-950 text-white font-medium rounded-xl hover:bg-zinc-800 transition-colors flex items-center justify-center disabled:bg-zinc-400 disabled:cursor-not-allowed shadow-md"
          >
            {loading ? "Analyzing and Tailoring..." : "Optimize for ATS"}
          </button>
        </form>

        {/* Error Notification */}
        {errorMsg && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-sm text-red-800">
            <span className="font-bold">Deployment Status Error:</span> {errorMsg}
          </div>
        )}

        {/* AI Result Section */}
        {result && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-emerald-950">ATS-Optimized Tailoring Results</h3>
            <div className="text-sm text-emerald-900 whitespace-pre-wrap">{result}</div>
          </div>
        )}

      </div>
    </div>
  );
}