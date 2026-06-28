import { useState } from "react";

export default function useConversation() {
  const [messages, setMessages] = useState([]);

  function addUserMessage(message) {
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        message,
      },
    ]);
  }

  function addAssistantMessage(message) {
    setMessages((prev) => [
      ...prev,
      {
        sender: "assistant",
        message,
      },
    ]);
  }

  function clearConversation() {
    setMessages([]);
  }

  return {
    messages,
    addUserMessage,
    addAssistantMessage,
    clearConversation,
  };
}