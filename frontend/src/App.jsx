import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import InputArea from "./components/InputArea";

import useChat from "./hooks/useChat";
import useConversation from "./hooks/useConversation";

import "./App.css";

function App() {
  const {
    question,
    setQuestion,
    loading,
    sendQuestion,
  } = useChat();

  const {
    messages,
    addUserMessage,
    addAssistantMessage,
    clearConversation,
  } = useConversation();

  async function handleSend() {
    if (!question.trim()) return;

    const currentQuestion = question;

    addUserMessage(currentQuestion);

    const reply = await sendQuestion(currentQuestion);

    addAssistantMessage(reply);
  }

  return (
    <div className="app">
      <Sidebar clearChat={clearConversation} />

      <main className="main">
        <Header />

        <section className="hero">
          <h1>Clinical Intelligence Platform</h1>

          <p>
            Evidence-Based Clinical Reasoning • Differential Diagnosis •
            Clinical Decision Support • Medical Literature Analysis
          </p>
        </section>

        <ChatWindow
          messages={messages}
          loading={loading}
        />

        <InputArea
          question={question}
          setQuestion={setQuestion}
          loading={loading}
          onSend={handleSend}
        />
      </main>
    </div>
  );
}

export default App;