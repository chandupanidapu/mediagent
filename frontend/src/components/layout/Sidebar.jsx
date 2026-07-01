import {
  LayoutDashboard,
  Stethoscope,
  BookOpen,
  Pill,
  Microscope,
  Image,
  Calculator,
  Settings,
  Plus,
} from "lucide-react";

import logo from "../../assets/logo/logo.svg";

function Sidebar({ clearChat }) {
  return (
    <aside className="sidebar">

      <div className="sidebar-top">

        <div className="sidebar-brand">

          <img
            src={logo}
            alt="Medarcy"
            className="sidebar-logo"
          />

          <div>

            <h2>Medarcy</h2>

            <p>
              Clinical Intelligence
            </p>

          </div>

        </div>

        <button
          className="new-session-btn"
          onClick={clearChat}
        >
          <Plus size={18}/>
          New Analysis
        </button>

      </div>

      <nav className="sidebar-nav">

        <span className="nav-title">
          WORKSPACE
        </span>

        <button className="nav-item active">
          <LayoutDashboard size={18}/>
          Dashboard
        </button>

        <button className="nav-item">
          <Stethoscope size={18}/>
          Patient Analysis
        </button>

        <button className="nav-item">
          <BookOpen size={18}/>
          Evidence Explorer
        </button>

        <button className="nav-item">
          <Pill size={18}/>
          Drug Intelligence
        </button>

        <button className="nav-item">
          <Microscope size={18}/>
          Research Assistant
        </button>

        <button className="nav-item">
          <Image size={18}/>
          Imaging AI
        </button>

        <button className="nav-item">
          <Calculator size={18}/>
          Medical Calculator
        </button>

      </nav>

      <div className="sidebar-bottom">

        <button className="nav-item">

          <Settings size={18}/>

          Settings

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;