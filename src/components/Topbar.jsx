import React from 'react';
import { Bell, HelpCircle, Search } from "lucide-react";

export default function Topbar({ title, subtitle }) {
  return (
    <header className="topbar">
      <div>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>

      <div className="topbar-actions">
        <div className="search-box">
          <Search size={16} />
          <input placeholder="Search incidents..." />
          <kbd>⌘ K</kbd>
        </div>
        <button className="icon-button" title="Help">
          <HelpCircle size={19} />
        </button>
        <button className="icon-button notification" title="Notifications">
          <Bell size={19} />
          <span />
        </button>
      </div>
    </header>
  );
}
