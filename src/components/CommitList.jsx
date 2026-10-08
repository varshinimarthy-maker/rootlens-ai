import React from 'react';
import { GitCommitHorizontal, UserRound } from "lucide-react";

export default function CommitList({ commits }) {
  return (
    <div className="commit-list">
      {commits.map((commit) => (
        <div className="commit-row" key={commit.hash}>
          <div className={`commit-icon ${commit.type}`}>
            <GitCommitHorizontal size={17} />
          </div>
          <div className="commit-main">
            <div className="commit-title-row">
              <strong>{commit.message}</strong>
              {commit.type === "suspect" && <span className="suspect-badge">LIKELY RELATED</span>}
            </div>
            <div className="commit-meta">
              <span className="mono">{commit.hash}</span>
              <span><UserRound size={13} /> {commit.author}</span>
              <span>{commit.files} files</span>
            </div>
          </div>
          <span className="commit-time">{commit.time}</span>
        </div>
      ))}
    </div>
  );
}
