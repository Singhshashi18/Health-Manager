import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/messages";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const model = new ChatOpenAI({
  temperature: 0.3,
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/diagnose", async (req, res) => {
  const { symptoms } = req.body;
  const prompt = `You are a medical assistant. Based on the following symptoms, suggest possible conditions and advice:\n\nSymptoms: ${symptoms}`;
  try {
    const response = await model.invoke([new HumanMessage(prompt)]);
    res.json({ diagnosis: response.content });
  } catch (err) {
    res.status(500).json({ diagnosis: "Error generating diagnosis." });
  }
});

app.listen(3001, () => console.log("🩺 GenAI Medical backend running on port 3001"));
