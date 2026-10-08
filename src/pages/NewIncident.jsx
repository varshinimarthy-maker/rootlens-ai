import React, { useState } from "react";
import {
  AlertOctagon,
  ArrowLeft,
  GitBranch,
  Info,
  Sparkles,
} from "lucide-react";
import { repository } from "../data/mockData";

export default function NewIncident({ onBack, onAnalyze }) {
  const [title, setTitle] = useState("Payment Service Crash");

  const [incidentLog, setIncidentLog] = useState(
    `TypeError: Cannot read properties of undefined (reading 'transactionId')
at PaymentController.js:45`
  );

  const [window, setWindow] = useState("24");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/incidents",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description: incidentLog,
            error: incidentLog,
            severity: "high",
            environment: "production",
            repository: repository.name,
            branch: repository.branch || "main",
            investigationWindow: Number(window),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to create incident"
        );
      }

      console.log("Incident created:", data.incident);

      // Move to the investigation page
      onAnalyze(data.incident);
    } catch (err) {
      console.error(err);

      setError(
        err.message ||
          "Something went wrong while creating the incident."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-content narrow-page">
      <button className="back-button" onClick={onBack}>
        <ArrowLeft size={16} />
        Back to dashboard
      </button>

      <div className="form-heading">
        <span className="eyebrow">NEW INVESTIGATION</span>

        <h2>Capture an incident</h2>

        <p>
          Give RootLens the information you have. Git history
          will provide the engineering context.
        </p>
      </div>

      <div className="panel incident-form">

        {/* INCIDENT TITLE */}
        <div className="form-section">
          <label>Incident title</label>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Example: Payment service crashed"
          />
        </div>

        {/* REPOSITORY */}
        <div className="form-section">
          <label>Repository</label>

          <div className="repo-select">
            <GitBranch size={17} />

            <div>
              <strong>{repository.name}</strong>

              <span>
                {repository.branch} · Connected
              </span>
            </div>

            <span className="connected-pill">
              Connected
            </span>
          </div>
        </div>

        {/* ERROR / LOG */}
        <div className="form-section">
          <label>
            Incident / crash information{" "}
            <span>Optional</span>
          </label>

          <textarea
            id="incident-log"
            value={incidentLog}
            onChange={(e) =>
              setIncidentLog(e.target.value)
            }
            placeholder="Paste the error, stack trace, log output, or describe what happened..."
          />

          <div className="field-help">
            <Info size={14} />

            <span>
              In the production version this can be
              populated automatically by a monitoring
              provider.
            </span>
          </div>
        </div>

        {/* INVESTIGATION WINDOW */}
        <div className="form-section">
          <label>Investigation window</label>

          <select
            value={window}
            onChange={(e) =>
              setWindow(e.target.value)
            }
          >
            <option value="6">
              Last 6 hours
            </option>

            <option value="24">
              Last 24 hours
            </option>

            <option value="72">
              Last 3 days
            </option>

            <option value="168">
              Last 7 days
            </option>
          </select>
        </div>

        {/* ROOTLENS INFO */}
        <div className="form-note">
          <Sparkles size={17} />

          <div>
            <strong>
              What RootLens will investigate
            </strong>

            <span>
              Recent commits, changed files, code diffs,
              commit timing and incident information will
              be correlated before AI analysis.
            </span>
          </div>
        </div>

        {/* ERROR MESSAGE */}
        {error && (
          <div
            style={{
              marginTop: "12px",
              padding: "12px",
              borderRadius: "8px",
              background: "#fee2e2",
              color: "#991b1b",
              fontSize: "14px",
            }}
          >
            {error}
          </div>
        )}

        {/* ANALYZE BUTTON */}
        <button
          className="primary-button analyze-button"
          onClick={handleAnalyze}
          disabled={loading || !title.trim()}
        >
          <AlertOctagon size={17} />

          {loading
            ? "Creating incident..."
            : "Analyze incident"}
        </button>
      </div>
    </div>
  );
}