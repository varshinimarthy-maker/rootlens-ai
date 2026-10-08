import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Dashboard from "./pages/Dashboard";
import NewIncident from "./pages/NewIncident";
import IncidentPage from "./pages/IncidentPage";
import ReportPage from "./pages/ReportPage";
import PlaceholderPage from "./pages/PlaceholderPage";

import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

const pageMeta = {
  dashboard: {
    title: "Dashboard",
    subtitle: "Monitor incidents and understand what changed.",
  },

  incidents: {
    title: "Incidents",
    subtitle: "Investigate and document system failures.",
  },

  repositories: {
    title: "Repositories",
    subtitle: "Manage connected engineering repositories.",
  },

  reports: {
    title: "Reports",
    subtitle: "Review generated incident documentation.",
  },

  profile: {
    title: "My Profile",
    subtitle: "Manage your RootLens AI account.",
  },

  settings: {
    title: "Settings",
    subtitle: "Configure your RootLens AI workspace.",
  },
};

export default function App() {
 const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    name: "Varshini",
    email: "varshini@example.com",
    github: "varshinimarthy-maker",
  });

  const [page, setPage] = useState("dashboard");

  const navigate = (nextPage) => {
    setPage(nextPage);
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    setPage("dashboard");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPage("login");
  };

  // Show Login page before the main application
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  const renderPage = () => {

    if (page === "dashboard") {
      return (
        <Dashboard
          onNewIncident={() => navigate("new-incident")}
          onViewIncident={() => navigate("incident")}
        />
      );
    }

    if (page === "new-incident") {
      return (
        <NewIncident
          onBack={() => navigate("dashboard")}
          onAnalyze={() => navigate("incident")}
        />
      );
    }

    if (page === "incident") {
      return (
        <IncidentPage
          onBack={() => navigate("dashboard")}
          onGenerateReport={() => navigate("report")}
        />
      );
    }

    if (page === "report") {
      return <ReportPage onBack={() => navigate("incident")} />;
    }

    if (page === "profile") {
      return (
        <Profile
          user={user}
          onLogout={handleLogout}
        />
      );
    }

    if (page === "settings") {
      return <Settings />;
    }

    return (
      <PlaceholderPage
        type={page}
        onBack={() => navigate("dashboard")}
      />
    );
  };

  const meta = pageMeta[page] || {
    title: "Incident Report",
    subtitle: "AI-generated incident documentation.",
  };

  const hideTopbar =
    page === "report";

  return (
    <div className="app-shell">

      <Sidebar
        activePage={page}
        onNavigate={navigate}
      />

      <main className="main-area">

        {!hideTopbar && (
          <Topbar
            title={meta.title}
            subtitle={meta.subtitle}
          />
        )}

        {renderPage()}

      </main>

    </div>
  );
}