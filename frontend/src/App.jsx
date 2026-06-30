import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import MainContent from "./components/layout/MainContent";
import InputArea from "./components/conversation/InputArea";

import useChat from "./hooks/useChat";
import useConversation from "./hooks/useConversation";

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

    setQuestion("");
  }

  return (
    <div className="app">
      <Sidebar clearChat={clearConversation} />

      <main className="main">

        <Header />

        <MainContent
          messages={messages}
          loading={loading}
        />

        {messages?.length > 0 && (
          <InputArea
            question={question}
            setQuestion={setQuestion}
            loading={loading}
            onSend={handleSend}
          />
        )}

      </main>
    </div>
  );
}

export default App;