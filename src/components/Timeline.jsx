import React from 'react';
import {
  AlertCircle,
  CheckCircle2,
  GitCommitHorizontal,
  Info,
  CircleAlert,
} from "lucide-react";

const icons = {
  commit: GitCommitHorizontal,
  warning: CircleAlert,
  error: AlertCircle,
  info: Info,
  success: CheckCircle2,
};

export default function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item, index) => {
        const Icon = icons[item.kind] || Info;
        return (
          <div className="timeline-item" key={`${item.time}-${index}`}>
            <div className={`timeline-icon ${item.kind}`}>
              <Icon size={16} />
            </div>
            <div className="timeline-content">
              <div className="timeline-top">
                <strong>{item.title}</strong>
                <span>{item.time}</span>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
