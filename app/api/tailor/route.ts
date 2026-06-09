import { GoogleGenAI } from '@google/genai';

export async function POST(request: Request) {
  try {
    // 1. Destructure using the exact keys sent by the frontend
    const { resumeText, jobDescription } = await request.json();

    const apiKey = process.env.AI_API_KEY || process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return Response.json({ error: "API Key configuration missing on server." }, { status: 500 });
    }

    // Initialize the official Google Gen AI SDK
    const ai = new GoogleGenAI({ apiKey: apiKey });

    // 2. Inject your variables cleanly into the AI prompt template
    const prompt = `
      You are an expert technical recruiter and ATS resume optimization engine.
      Take this resume text and tailor it completely to the job description provided.
      Highlight core technical framework matches, insert relevant action verbs, and fix keyword gaps.

      RESUME TEXT:
      """
      ${resumeText}
      """

      JOB DESCRIPTION:
      """
      ${jobDescription}
      """

      Return only the optimized resume text in clear, beautifully structured Markdown. Do not add intro or outro conversation.
    `;

    // Call the reliable gemini-2.5-flash model
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    const aiText = response.text || "Could not extract or optimize resume content.";

    // 3. Return the payload using the 'output' key the frontend expects
    return Response.json({ output: aiText });

  } catch (error: any) {
    console.error("Backend Error:", error);
    return Response.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}