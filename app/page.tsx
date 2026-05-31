'use client';

import { useState } from 'react';

export default function Home() {
  const [resume, setResume] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleTailorApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resume || !jobDescription) return;

    setIsLoading(true);
    setResult('');

    try {
      const response = await fetch('/api/tailor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resume, jobDescription }),
      });

      if (response.ok) {
        const data = await response.json();
        // Perfect match for the Gemini backend structure
        setResult(data.text);
      } else {
        setResult('Error: Failed to process the request on the server.');
      }
    } catch (error) {
      console.error(error);
      setResult('Error: A network error occurred while connecting to the backend.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header section */}
        <header className="border-b border-slate-800 pb-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            AI-Powered Resume Tailorer
          </h1>
          <p className="text-slate-400 text-sm mt-1">Optimize your application to align directly with target roles.</p>
        </header>

        {/* Input Form Dashboard */}
        <form onSubmit={handleTailorApplication} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-semibold text-slate-300">Your Current Resume Text</label>
            <textarea
              className="h-96 w-full p-4 rounded-lg bg-slate-900 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-teal-500 resize-none transition-colors"
              placeholder="Paste your baseline resume structure here..."
              value={resume}
              onChange={(e) => setResume(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-sm font-semibold text-slate-300">Target Job Description</label>
            <textarea
              className="h-96 w-full p-4 rounded-lg bg-slate-900 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-teal-500 resize-none transition-colors"
              placeholder="Paste the target requirements and responsibilities here..."
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              disabled={isLoading}
            />
          </div>

          {/* Process Trigger Button */}
          <div className="md:col-span-2 flex justify-center pt-2">
            <button
              type="submit"
              disabled={isLoading || !resume || !jobDescription}
              className={`w-full md:w-64 py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                isLoading 
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700' 
                  : 'bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white shadow-lg cursor-pointer'
              }`}
            >
              {isLoading ? 'Processing Optimization...' : 'Tailor Application'}
            </button>
          </div>
        </form>

        {/* Output Presentation Layer */}
        {result && (
          <section className="mt-8 border border-slate-800 bg-slate-900/50 rounded-lg p-6 space-y-4 animate-fadeIn">
            <h2 className="text-xl font-bold text-teal-400 border-b border-slate-800 pb-2">Optimization Strategy & Analysis</h2>
            <div className="whitespace-pre-wrap text-sm leading-relaxed text-slate-300 space-y-2">
              {result}
            </div>
          </section>
        )}

      </div>
    </main>
  );
}