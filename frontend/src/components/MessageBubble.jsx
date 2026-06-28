import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function MessageBubble({ sender, message }) {
  return (
    <div
      className={
        sender === "user"
          ? "message user-message"
          : "message ai-message"
      }
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {message}
      </ReactMarkdown>
    </div>
  );
}

export default MessageBubble;