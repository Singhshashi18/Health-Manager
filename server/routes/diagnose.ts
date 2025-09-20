     

import express from "express";
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/messages";

const router = express.Router();

const model = new ChatOpenAI({
  temperature: 0.3,
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/", async (req, res) => {
  const { symptoms } = req.body;
  const prompt = `You are a medical assistant. Based on the following symptoms, suggest possible conditions and advice:\n\nSymptoms: ${symptoms}`;
  try {
    const response = await model.invoke([new HumanMessage(prompt)]);
    res.json({ diagnosis: response.content });
  } catch (err) {
    res.status(500).json({ diagnosis: "Error generating diagnosis." });
  }
});

export default router;
