import React from "react";
import {
  AlertTriangle,
  FileText,
  GitBranch,
  LayoutDashboard,
  Settings,
  ShieldCheck,
  User,
} from "lucide-react";

const navItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    id: "incidents",
    label: "Incidents",
    icon: AlertTriangle,
  },
  {
    id: "repositories",
    label: "Repositories",
    icon: GitBranch,
  },
  {
    id: "reports",
    label: "Reports",
    icon: FileText,
  },
];

export default function Sidebar({ activePage, onNavigate }) {
  return (
    <aside className="sidebar">

      {/* BRAND */}
      <div className="brand">
        <div className="brand-mark">
          <ShieldCheck size={20} />
        </div>

        <div>
          <div className="brand-name">RootLens</div>
          <div className="brand-ai">AI</div>
        </div>
      </div>

      <div className="workspace-label">
        WORKSPACE
      </div>

      {/* MAIN NAVIGATION */}
      <nav className="nav-list">

        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            className={`nav-item ${
              activePage === id ? "active" : ""
            }`}
            onClick={() => onNavigate(id)}
          >
            <Icon size={18} />
            <span>{label}</span>
          </button>
        ))}

      </nav>

      {/* BOTTOM SECTION */}
      <div className="sidebar-bottom">

        {/* SYSTEM STATUS */}
        <div className="system-status">
          <span className="status-dot" />

          <div>
            <strong>System ready</strong>
            <span>AI analysis available</span>
          </div>
        </div>

        {/* PROFILE */}
        <button
          className={`nav-item ${
            activePage === "profile" ? "active" : ""
          }`}
          onClick={() => onNavigate("profile")}
        >
          <User size={18} />
          <span>Profile</span>
        </button>

        {/* SETTINGS */}
        <button
          className={`nav-item ${
            activePage === "settings" ? "active" : ""
          }`}
          onClick={() => onNavigate("settings")}
        >
          <Settings size={18} />
          <span>Settings</span>
        </button>

        {/* USER */}
        <button
          className="user-card"
          onClick={() => onNavigate("profile")}
        >
          <div className="avatar">
            VM
          </div>

          <div>
            <strong>Varshini</strong>
            <span>Developer</span>
          </div>
        </button>

      </div>

    </aside>
  );
}