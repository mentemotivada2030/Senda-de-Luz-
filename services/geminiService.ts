
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function generateSpiritualContent(prompt: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.7,
        topP: 0.95,
        topK: 64,
      },
    });
    
    return response.text;
  } catch (error) {
    console.error("Error generating content with Gemini API:", error);
    throw new Error("Failed to generate spiritual content.");
  }
}
