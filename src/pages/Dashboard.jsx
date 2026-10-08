import React from 'react';
import {
  AlertOctagon,
  CheckCircle2,
  Clock3,
  GitBranch,
  Plus,
  ShieldCheck,
  TrendingDown,
} from "lucide-react";
import StatCard from "../components/StatCard";
import CommitList from "../components/CommitList";
import Timeline from "../components/Timeline";
import { commits, incident, repository, timeline } from "../data/mockData";

export default function Dashboard({ onNewIncident, onViewIncident }) {
  return (
    <div className="page-content">
      <div className="hero-row">
        <div>
          <div className="connected-repo">
            <span className="repo-dot" />
            <GitBranch size={15} />
            {repository.name} / {repository.branch}
          </div>
          <h2 className="hero-title">Incident intelligence at a glance.</h2>
          <p className="hero-description">
            RootLens connects system failures with recent engineering changes
            and turns the investigation into documentation.
          </p>
        </div>
        <button className="primary-button" onClick={onNewIncident}>
          <Plus size={17} />
          New incident
        </button>
      </div>

      <div className="stats-grid">
        <StatCard
          label="Active incidents"
          value="1"
          detail="1 requires attention"
          icon={AlertOctagon}
          tone="red"
        />
        <StatCard
          label="Resolved this week"
          value="12"
          detail="+20% from last week"
          icon={CheckCircle2}
          tone="green"
        />
        <StatCard
          label="Avg. investigation"
          value="18m"
          detail="6m faster this week"
          icon={Clock3}
          tone="blue"
        />
        <StatCard
          label="Root causes identified"
          value="94%"
          detail="AI confidence average"
          icon={TrendingDown}
          tone="purple"
        />
      </div>

      <div className="dashboard-grid">
        <section className="panel incident-summary">
          <div className="panel-header">
            <div>
              <span className="eyebrow">LATEST INCIDENT</span>
              <h2>{incident.title}</h2>
            </div>
            <span className="severity high">HIGH</span>
          </div>
          <div className="error-box">
            <AlertOctagon size={18} />
            <code>{incident.error}</code>
          </div>
          <div className="summary-grid">
            <div>
              <span>Incident ID</span>
              <strong>{incident.id}</strong>
            </div>
            <div>
              <span>Detected</span>
              <strong>{incident.detectedAt}</strong>
            </div>
            <div>
              <span>Confidence</span>
              <strong>{incident.confidence}%</strong>
            </div>
          </div>
          <button className="secondary-button" onClick={onViewIncident}>
            Open investigation
          </button>
        </section>

        <section className="panel">
          <div className="panel-header">
            <div>
              <span className="eyebrow">INCIDENT TIMELINE</span>
              <h2>What happened?</h2>
            </div>
            <span className="live-label"><span /> Live</span>
          </div>
          <Timeline items={timeline.slice(0, 5)} />
        </section>
      </div>

      <section className="panel commits-panel">
        <div className="panel-header">
          <div>
            <span className="eyebrow">REPOSITORY ACTIVITY</span>
            <h2>Recent changes</h2>
          </div>
          <button className="text-button">View all commits →</button>
        </div>
        <CommitList commits={commits} />
      </section>
    </div>
  );
}
