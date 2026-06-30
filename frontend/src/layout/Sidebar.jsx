import {
  MessageSquare,
  Search,
  Pill,
  Activity,
  Settings,
  Plus,
} from "lucide-react";

import logo from "../assets/logo/logo-dark.svg";

const workspaceItems = [
  {
    icon: MessageSquare,
    label: "Clinical Chat",
    active: true,
  },
  {
    icon: Search,
    label: "Medical Research",
  },
  {
    icon: Pill,
    label: "Drug Intelligence",
  },
  {
    icon: Activity,
    label: "Health Tools",
  },
];

const settingsItems = [
  {
    icon: Settings,
    label: "Settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">

      {/* Brand */}

      <div className="sidebar-brand">

        <img
          src={logo}
          alt="MediAgent"
          className="sidebar-logo"
        />

        <div>

          <h2>MediAgent</h2>

          <p>Clinical Intelligence Platform</p>

        </div>

      </div>

      {/* New Session */}

      <button className="new-session-btn">

        <Plus size={18} />

        New Clinical Session

      </button>

      {/* Navigation */}

      <div className="sidebar-nav">

        <div>

          <p className="nav-heading">

            WORKSPACE

          </p>

          {workspaceItems.map((item) => {

            const Icon = item.icon;

            return (

              <button
                key={item.label}
                className={`nav-item ${item.active ? "active" : ""}`}
              >

                <Icon size={19} />

                {item.label}

              </button>

            );

          })}

        </div>

        <div>

          <p className="nav-heading">

            SETTINGS

          </p>

          {settingsItems.map((item) => {

            const Icon = item.icon;

            return (

              <button
                key={item.label}
                className="nav-item"
              >

                <Icon size={19} />

                {item.label}

              </button>

            );

          })}

          <div className="sidebar-footer">

            <span>

              MediAgent v1.0.0

            </span>

            <small>

              Evidence First

            </small>

          </div>

        </div>

      </div>

    </aside>
  );
}