import React from "react";
import {
  User,
  Github,
  Mail,
  ShieldCheck,
  Edit3,
  LogOut,
} from "lucide-react";

function Profile({ user, onLogout }) {
  return (
    <div className="page-container">

      <div className="page-header">
        <div>
          <h1>My Profile</h1>
          <p>Manage your RootLens AI account</p>
        </div>

        <button className="secondary-button">
          <Edit3 size={16} />
          Edit Profile
        </button>
      </div>

      <div className="profile-grid">

        <div className="profile-card profile-main">

          <div className="profile-avatar">
            {user?.name?.charAt(0) || "G"}
          </div>

          <h2>{user?.name || "Varshini"}</h2>

          <p className="profile-role">
            Developer
          </p>

          <div className="profile-info">
            <div>
              <Mail size={18} />
              <span>{user?.email || "developer@example.com"}</span>
            </div>

            <div>
              <Github size={18} />
              <span>{user?.github || "GitHub account not connected"}</span>
            </div>

            <div>
              <ShieldCheck size={18} />
              <span>Account verified</span>
            </div>
          </div>

          <button className="logout-button" onClick={onLogout}>
            <LogOut size={17} />
            Sign out
          </button>

        </div>

        <div className="profile-card">

          <h3>Activity Overview</h3>

          <div className="profile-stat">
            <span>Incidents analyzed</span>
            <strong>24</strong>
          </div>

          <div className="profile-stat">
            <span>Reports generated</span>
            <strong>21</strong>
          </div>

          <div className="profile-stat">
            <span>Repositories connected</span>
            <strong>3</strong>
          </div>

          <div className="profile-stat">
            <span>Account created</span>
            <strong>2026</strong>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;