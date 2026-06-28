import { Send, Loader2 } from "lucide-react";

function InputArea({
  question,
  setQuestion,
  launchAssistant,
  loading,
}) {
  return (
    <section className="input-area">
      <textarea
        rows={4}
        placeholder="Ask a clinical or medical research question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <div className="buttons">
        <button
          className="send-btn"
          onClick={launchAssistant}
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2
                size={18}
                className="spin"
              />
              Thinking...
            </>
          ) : (
            <>
              <Send size={18} />
              Send
            </>
          )}
        </button>
      </div>
    </section>
  );
}

export default InputArea;