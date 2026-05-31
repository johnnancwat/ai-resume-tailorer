import { GoogleGenAI } from '@google/genai';

export async function POST(request: Request) {
  try {
    const { resume, jobDescription } = await request.json();
    const apiKey = process.env.AI_API_KEY;

    // Initialize the official Google Gen AI SDK
    const ai = new GoogleGenAI({ apiKey: apiKey });

    // Call the reliable gemini-2.5-flash model
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are an expert ATS resume optimizer. Take this resume and tailor it to the job description, highlighting keyword gaps and creating a tailored cover letter.\n\nRESUME:\n${resume}\n\nJOB DESCRIPTION:\n${jobDescription}`,
    });

    // The official SDK guarantees a clean text extraction bypasses HTML errors
    const aiText = response.text;

    return Response.json({ text: aiText });
  } catch (error) {
    console.error("Backend Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}