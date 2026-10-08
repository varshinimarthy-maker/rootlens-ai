import React, { useState } from "react";
import {
  User,
  Github,
  Bell,
  Shield,
  Palette,
  GitBranch,
} from "lucide-react";

function Settings() {
  const [autoReport, setAutoReport] = useState(true);
  const [incidentNotifications, setIncidentNotifications] = useState(true);
  const [reportNotifications, setReportNotifications] = useState(true);

  return (
    <div className="page-container">

      <div className="page-header">
        <div>
          <h1>Settings</h1>
          <p>Configure your RootLens AI workspace</p>
        </div>
      </div>

      <div className="settings-container">

        <section className="settings-card">

          <div className="settings-title">
            <User size={20} />
            <div>
              <h3>Account</h3>
              <p>Manage your account information</p>
            </div>
          </div>

          <div className="settings-row">
            <div>
              <strong>Profile</strong>
              <p>Update your name, email and role</p>
            </div>
            <button className="secondary-button">Edit</button>
          </div>

          <div className="settings-row">
            <div>
              <strong>Password</strong>
              <p>Change your account password</p>
            </div>
            <button className="secondary-button">
              Change
            </button>
          </div>

        </section>

        <section className="settings-card">

          <div className="settings-title">
            <Github size={20} />
            <div>
              <h3>GitHub Integration</h3>
              <p>Manage your GitHub connection</p>
            </div>
          </div>

          <div className="settings-row">
            <div>
              <strong>GitHub Account</strong>
              <p>varshinimarthy-maker</p>
            </div>
            <span className="connected-badge">
              Connected
            </span>
          </div>

          <div className="settings-row">
            <div>
              <strong>Repository</strong>
              <p>demo-payment-service</p>
            </div>
            <button className="secondary-button">
              Change
            </button>
          </div>

          <div className="settings-row">
            <div>
              <strong>Default Branch</strong>
              <p>main</p>
            </div>
            <GitBranch size={18} />
          </div>

        </section>

        <section className="settings-card">

          <div className="settings-title">
            <Bell size={20} />
            <div>
              <h3>Notifications</h3>
              <p>Choose which events you want to receive</p>
            </div>
          </div>

          <ToggleRow
            title="Incident detected"
            description="Notify me when a new incident is detected"
            enabled={incidentNotifications}
            setEnabled={setIncidentNotifications}
          />

          <ToggleRow
            title="Report generated"
            description="Notify me when an incident report is ready"
            enabled={reportNotifications}
            setEnabled={setReportNotifications}
          />

        </section>

        <section className="settings-card">

          <div className="settings-title">
            <Shield size={20} />
            <div>
              <h3>Incident Analysis</h3>
              <p>Configure how RootLens investigates incidents</p>
            </div>
          </div>

          <div className="settings-row">
            <div>
              <strong>Commits to analyze</strong>
              <p>Number of recent commits checked</p>
            </div>

            <select defaultValue="10">
              <option value="5">5 commits</option>
              <option value="10">10 commits</option>
              <option value="20">20 commits</option>
            </select>
          </div>

          <ToggleRow
            title="Automatically generate report"
            description="Create a report after an investigation finishes"
            enabled={autoReport}
            setEnabled={setAutoReport}
          />

        </section>

        <section className="settings-card">

          <div className="settings-title">
            <Palette size={20} />
            <div>
              <h3>Appearance</h3>
              <p>Customize your RootLens workspace</p>
            </div>
          </div>

          <div className="settings-row">
            <div>
              <strong>Theme</strong>
              <p>Choose your preferred appearance</p>
            </div>

            <select defaultValue="light">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
          </div>

        </section>

      </div>
    </div>
  );
}

function ToggleRow({ title, description, enabled, setEnabled }) {
  return (
    <div className="settings-row">

      <div>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>

      <button
        className={`toggle ${enabled ? "active" : ""}`}
        onClick={() => setEnabled(!enabled)}
      >
        <span></span>
      </button>

    </div>
  );
}

export default Settings;