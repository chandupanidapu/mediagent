import { useState } from "react";
import { askQuestion } from "../services/api";

export default function useChat() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendQuestion(message) {
    setLoading(true);

    try {
      const reply = await askQuestion(message);

      setQuestion("");

      return reply;
    } catch (error) {
      console.error(error);

      return "Unable to connect to backend.";
    } finally {
      setLoading(false);
    }
  }

  return {
    question,
    setQuestion,
    loading,
    sendQuestion,
  };
}