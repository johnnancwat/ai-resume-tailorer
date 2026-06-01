import { GoogleGenAI } from '@google/genai';

export async function POST(request: Request) {
  try {
    const { resume, jobDescription } = await request.json();

    const apiKey = process.env.AI_API_KEY;
    if (!apiKey) {
      return Response.json({ error: "API Key configuration missing on server." }, { status: 500 });
    }

    // Initialize the official Google Gen AI SDK
    const ai = new GoogleGenAI({ apiKey: apiKey });

    // Call the reliable gemini-2.5-flash model
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are an expert ATS resume optimizer. Take this resume and tailor it to the job description, highlighting keyword matches and improving professional impact metrics.\n\nJOB DESCRIPTION:\n${jobDescription}\n\nRESUME TEXT:\n${resume}`,
    });

    const aiText = response.text || "Could not extract or optimize resume content.";

    return Response.json({ text: aiText });
  } catch (error: any) {
    console.error("Backend Error:", error);
    return Response.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}

// trigger deploy