import React from 'react';
import { ArrowLeft, GitBranch, FileText, AlertTriangle } from "lucide-react";

export default function PlaceholderPage({ type, onBack }) {
  const content = {
    incidents: {
      icon: AlertTriangle,
      title: "Incidents",
      text: "All captured incidents will appear here once GitHub and monitoring integrations are connected.",
    },
    repositories: {
      icon: GitBranch,
      title: "Repositories",
      text: "Connect GitHub repositories here. The backend will later fetch branches, commits and diffs automatically.",
    },
    reports: {
      icon: FileText,
      title: "Reports",
      text: "Generated incident reports will be listed here for future access and export.",
    },
  };

  const item = content[type];
  const Icon = item.icon;

  return (
    <div className="page-content centered-page">
      <div className="placeholder-card">
        <div className="placeholder-icon"><Icon size={24} /></div>
        <h2>{item.title}</h2>
        <p>{item.text}</p>
        <button className="secondary-button" onClick={onBack}>
          <ArrowLeft size={16} /> Back to dashboard
        </button>
      </div>
    </div>
  );
}
