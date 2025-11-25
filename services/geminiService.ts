import { GoogleGenAI } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from '../constants';

const apiKey = process.env.API_KEY || ''; 
// Note: In a real production app, ensure API key is safe or use a proxy. 
// For this demo, we assume process.env.API_KEY is available via build tool or runtime.

let ai: GoogleGenAI | null = null;

try {
    if (apiKey) {
        ai = new GoogleGenAI({ apiKey });
    } else {
        console.warn("Gemini API Key is missing. Chat functionality will not work.");
    }
} catch (error) {
    console.error("Failed to initialize GoogleGenAI", error);
}

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!ai) return "Lo siento, mi conexión con el cerebro digital no está configurada (Falta API Key).";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "No pude procesar esa respuesta.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Tuve un error temporal al conectarme. Intenta de nuevo.";
  }
};
