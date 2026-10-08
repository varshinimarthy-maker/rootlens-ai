import React, { useState } from "react";
import { Github, ShieldCheck } from "lucide-react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      onLogin({
        name: "Varshini",
        email: email,
        github: "varshinimarthy-spec",
      });
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-logo">
          <ShieldCheck size={34} />
        </div>

        <h1>RootLens AI</h1>

        <p className="login-subtitle">
          AI-powered incident investigation and root cause analysis
        </p>

        <form onSubmit={handleLogin}>

          <label>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="password-label">
            <label>Password</label>
            <button type="button">Forgot password?</button>
          </div>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label className="remember-row">
            <input type="checkbox" />
            Remember me
          </label>

          <button className="login-button" type="submit">
            Sign in
          </button>
        </form>

        <div className="login-divider">
          <span>OR</span>
        </div>

        <button
          className="github-login"
          onClick={() =>
            onLogin({
              name: "Varshini",
              email: "github-user@example.com",
              github: "varshinimarthy-maker",
            })
          }
        >
          <Github size={19} />
          Continue with GitHub
        </button>

        <p className="signup-text">
          Don't have an account? <span>Create account</span>
        </p>

      </div>
    </div>
  );
}

export default Login;