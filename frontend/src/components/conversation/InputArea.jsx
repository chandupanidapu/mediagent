import { Send, Loader2, Paperclip, Mic } from "lucide-react";

function InputArea({
  question,
  setQuestion,
  onSend,
  loading,
}) {
  return (
    <section className="input-area">

      <div className="composer">

        <textarea
          rows={3}
          placeholder="Describe a patient, symptoms, laboratory findings, imaging results, or a research question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <div className="composer-footer">

          <div className="composer-tools">

            <button
              type="button"
              className="tool-btn"
              title="Attach (Coming Soon)"
            >
              <Paperclip size={18} />
            </button>

            <button
              type="button"
              className="tool-btn"
              title="Voice (Coming Soon)"
            >
              <Mic size={18} />
            </button>

          </div>

          <button
            className="send-btn"
            onClick={onSend}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 size={18} className="spin" />
                Analyzing...
              </>
            ) : (
              <>
                Analyze
                <Send size={18} />
              </>
            )}
          </button>

        </div>

      </div>

    </section>
  );
}

export default InputArea;