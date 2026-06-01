"use client";

import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleTailorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !jobDescription.trim()) {
      alert("Please upload a resume file and paste a job description!");
      return;
    }

    setLoading(true);
    setResult(null);

    // TODO: Connect this to our backend API route next!
    setTimeout(() => {
      setResult("### ATS-Optimized Summary\n\n- Successfully optimized keywords for the target role.\n- Enhanced professional impact metrics.");
      setLoading(false);
    }, 2000);
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
            Automate the tedious process of editing resumes to match target jobs and beat Applicant Tracking Systems (ATS).
          </p>
        </header>

        {/* Main Workspace Form */}
        <form onSubmit={handleTailorSubmit} className="space-y-6 bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
          
          {/* File Upload Section */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-zinc-800">
              Upload Existing Resume (PDF or DOCX)
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-zinc-300 rounded-xl cursor-pointer bg-zinc-50 hover:bg-zinc-100/50 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <p className="mb-2 text-sm text-zinc-500">
                    {file ? (
                      <span className="font-semibold text-emerald-600">Selected: {file.name}</span>
                    ) : (
                      <span><span className="font-semibold">Click to upload</span> or drag and drop</span>
                    )}
                  </p>
                  <p className="text-xs text-zinc-400">PDF, DOCX up to 10MB</p>
                </div>
                <input type="file" accept=".pdf,.docx" className="hidden" onChange={handleFileChange} />
              </label>
            </div>
          </div>

          {/* Job Description Box */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-zinc-800">
              Target Job Description
            </label>
            <textarea
              className="w-full h-40 px-4 py-3 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:border-transparent resize-y text-sm"
              placeholder="Paste the entire job description here..."
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

        {/* AI Result Section */}
        {result && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-emerald-950">Tailoring Results</h3>
            <div className="text-sm text-emerald-900 whitespace-pre-wrap">{result}</div>
          </div>
        )}

      </div>
    </div>
  );
}