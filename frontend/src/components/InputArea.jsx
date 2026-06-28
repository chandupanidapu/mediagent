import { Send, Loader2 } from "lucide-react";

function InputArea({
  question,
  setQuestion,
  onSend,
  loading,
}) {
  return (
    <section className="input-area">
      <textarea
        rows={4}
        placeholder="Describe a patient, symptoms, laboratory findings, imaging results, or a research question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <div className="buttons">
        <button
          className="send-btn"
          onClick={onSend}
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2
                size={18}
                className="spin"
              />
              Analyzing...
            </>
          ) : (
            <>
              <Send size={18} />
              Analyze
            </>
          )}
        </button>
      </div>
    </section>
  );
}

export default InputArea;