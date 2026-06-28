import { Stethoscope, Trash2 } from "lucide-react";

function Sidebar({ clearChat }) {
  return (
    <aside className="sidebar">
      <h2>
        <Stethoscope size={22} />
        MediAgent
      </h2>

      <button onClick={clearChat}>
        <Trash2 size={18} />
        New Chat
      </button>
    </aside>
  );
}

export default Sidebar;