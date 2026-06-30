import {
  Send,
  Paperclip,
  Mic,
  FileText,
  Image,
  Activity
} from "lucide-react";

function Composer() {

  return (

    <section className="workspace-composer">

      <textarea
        placeholder="Describe a patient, paste laboratory values, upload imaging, ECG findings, or ask a clinical question..."
      />

      <div className="composer-toolbar">

        <div className="composer-left">

          <button className="tool-btn">
            <Paperclip size={18}/>
            <span>Attach</span>
          </button>

          <button className="tool-btn">
            <FileText size={18}/>
            <span>PDF</span>
          </button>

          <button className="tool-btn">
            <Image size={18}/>
            <span>Image</span>
          </button>

          <button className="tool-btn">
            <Activity size={18}/>
            <span>ECG</span>
          </button>

          <button className="tool-btn">
            <Mic size={18}/>
            <span>Voice</span>
          </button>

        </div>

        <button className="analyze-btn">

          Analyze

          <Send size={18}/>

        </button>

      </div>

    </section>

  );

}

export default Composer;