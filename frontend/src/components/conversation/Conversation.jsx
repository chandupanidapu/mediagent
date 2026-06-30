import MessageBubble from "./MessageBubble";

function Conversation({ messages, loading }) {

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

export default Conversation;