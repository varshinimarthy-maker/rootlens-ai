import React from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  FileCode2,
  GitCommit,
  Lightbulb,
  ShieldAlert,
} from "lucide-react";

export default function IncidentAnalysis({ incident, onGenerateReport }) {
  return (
    <div className="analysis-layout">
      <section className="panel root-cause-panel">
        <div className="panel-header">
          <div>
            <span className="eyebrow">AI INVESTIGATION</span>
            <h2>Probable root cause</h2>
          </div>
          <span className="confidence">
            {incident.confidence}% confidence
          </span>
        </div>

        <div className="root-cause-text">{incident.rootCause}</div>

        <div className="evidence-block">
          <div className="section-heading">
            <CheckCircle2 size={17} />
            <span>Evidence collected</span>
          </div>
          <ul>
            {incident.evidence.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="panel commit-highlight">
        <div className="section-heading">
          <GitCommit size={17} />
          <span>Likely triggering commit</span>
        </div>
        <div className="commit-highlight-main">
          <div className="commit-big-icon">
            <GitCommit size={21} />
          </div>
          <div>
            <strong>{incident.likelyCommit.message}</strong>
            <div className="commit-hash mono">{incident.likelyCommit.hash}</div>
            <small>{incident.likelyCommit.author}</small>
          </div>
        </div>
        <button className="secondary-button full">
          View code diff
        </button>
      </section>

      <section className="panel">
        <div className="section-heading">
          <FileCode2 size={17} />
          <span>Affected files</span>
        </div>
        <div className="file-list">
          {incident.affectedFiles.map((file) => (
            <div className="file-item" key={file}>
              <FileCode2 size={15} />
              <span>{file}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="panel recommendation-panel">
        <div className="section-heading">
          <Lightbulb size={17} />
          <span>Suggested fix</span>
        </div>
        <p>{incident.suggestedFix}</p>
      </section>

      <section className="panel prevention-panel">
        <div className="section-heading">
          <ShieldAlert size={17} />
          <span>Prevention recommendation</span>
        </div>
        <p>{incident.prevention}</p>
      </section>

      <button className="primary-button report-button" onClick={onGenerateReport}>
        Generate incident report
      </button>
    </div>
  );
}
