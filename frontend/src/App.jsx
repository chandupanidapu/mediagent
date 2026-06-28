import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import InputArea from "./components/InputArea";
import MessageBubble from "./components/MessageBubble";

import useChat from "./hooks/useChat";

import "./App.css";

import { MessageSquare } from "lucide-react";

function App() {
  const {
    question,
    setQuestion,
    messages,
    loading,
    launchAssistant,
    clearChat,
  } = useChat();

  return (
    <div className="app">
      <Sidebar clearChat={clearChat} />

      <main className="main">
        <Header />

        {messages.length === 0 ? (
          <section className="chat-window">
            <div className="placeholder">
              <MessageSquare size={60} />

              <h2>Start a conversation</h2>

              <p>
                Ask any medical or clinical research question to begin.
              </p>
            </div>
          </section>
        ) : (
          <section className="response-area">
            {messages.map((msg) => (
              <MessageBubble
                key={msg.id}
                sender={msg.sender}
                message={msg.message}
              />
            ))}
          </section>
        )}

        <InputArea
          question={question}
          setQuestion={setQuestion}
          launchAssistant={launchAssistant}
          loading={loading}
        />
      </main>
    </div>
  );
}

export default App;