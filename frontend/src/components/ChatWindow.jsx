import MessageBubble from "./MessageBubble";

function ChatWindow({ messages, loading }) {
  if (messages.length === 0) {
    return (
      <section className="chat-window">
        <div className="placeholder">
          <h2>Start a conversation</h2>
          <p>Ask any medical or clinical research question to begin.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="chat-window">
      {messages.map((msg, index) => (
        <MessageBubble
          key={index}
          sender={msg.sender}
          message={msg.message}
        />
      ))}

      {loading && (
        <div className="loading">
          Thinking...
        </div>
      )}
    </section>
  );
}

export default ChatWindow;