import { useState } from "react";
import { sendMessage } from "../services/api";

export default function useChat() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function launchAssistant() {
    if (!question.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      message: question,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentQuestion = question;
    setQuestion("");
    setLoading(true);

    try {
      const data = await sendMessage(currentQuestion);

      const aiMessage = {
        id: Date.now() + 1,
        sender: "assistant",
        message: data.reply,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error(err);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "assistant",
          message: "Unable to connect to backend.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function clearChat() {
    setQuestion("");
    setMessages([]);
  }

  return {
    question,
    setQuestion,
    messages,
    loading,
    launchAssistant,
    clearChat,
  };
}