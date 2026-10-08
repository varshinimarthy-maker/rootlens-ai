import React from 'react';
import { ArrowLeft, Download, FileText } from "lucide-react";
import IncidentAnalysis from "../components/IncidentAnalysis";
import Timeline from "../components/Timeline";
import { changesDuringIncident, incident, timeline } from "../data/mockData";

export default function IncidentPage({ onBack, onGenerateReport }) {
  return (
    <div className="page-content">
      <button className="back-button" onClick={onBack}>
        <ArrowLeft size={16} /> All incidents
      </button>

      <div className="incident-header">
        <div>
          <div className="incident-id">{incident.id}</div>
          <h2>{incident.title}</h2>
          <p>Detected {incident.detectedAt}</p>
        </div>
        <div className="incident-actions">
          <span className="severity high">{incident.severity}</span>
          <button className="secondary-button" onClick={onGenerateReport}>
            <Download size={16} />
            Export report
          </button>
        </div>
      </div>

      <div className="error-box large">
        <div className="error-icon"><FileText size={19} /></div>
        <div>
          <span>Detected error</span>
          <code>{incident.error}</code>
        </div>
      </div>

      <IncidentAnalysis incident={incident} onGenerateReport={onGenerateReport} />

      <div className="section-divider" />

      <div className="two-column-section">
        <section className="panel">
          <div className="panel-header">
            <div>
              <span className="eyebrow">EVENT HISTORY</span>
              <h2>Incident timeline</h2>
            </div>
          </div>
          <Timeline items={timeline} />
        </section>

        <section className="panel">
          <div className="panel-header">
            <div>
              <span className="eyebrow">RECOVERY ACTIVITY</span>
              <h2>Changes during incident</h2>
            </div>
          </div>

          <div className="changes-list">
            {changesDuringIncident.map((change) => (
              <div className="change-row" key={change.commit}>
                <div className="change-time">{change.time}</div>
                <div className="change-body">
                  <strong>{change.author}</strong>
                  <span className="mono">{change.commit}</span>
                  <p>{change.change}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="auto-doc-note">
            <FileText size={16} />
            <span>
              These changes are automatically captured from Git in the
              production version.
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
