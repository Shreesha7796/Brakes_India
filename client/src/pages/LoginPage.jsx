import "./LoginPage.css";
import quanticLogo from "../assets/logos/quantic-logo.svg";
import brakesLogo from "../assets/logos/brakesindia-logo.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isActive = username.trim() !== "" && password.trim() !== "";

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    if (!isActive) return;

    setLoading(true);

    // simulate auth / API
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard"); // ✅ REDIRECT
    }, 800);
  };

  return (
    <div className="login-wrapper">
      {/* Background Video */}
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src="/login-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="overlay" />

      {/* Login Card */}
      <div className="login-card">
        <div className="login-logos">
          <img src={quanticLogo} alt="Quantic" className="logo quantic-logo" />

          <div className="logo-divider" />

          <img
            src={brakesLogo}
            alt="Brakes India"
            className="logo brakes-logo"
          />
        </div>

        <span className="login-title">
          AI Quality Inspection Monitoring System
        </span>

        <div className="form-group">
          <label>Username / Employee ID</label>
          <input
            type="text"
            placeholder="Enter your Username/Employee ID"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className={`login-btn ${isActive ? "active" : ""} ${
            loading ? "loading" : ""
          }`}
          disabled={!isActive || loading}
          onClick={handleLogin}
        >
          {loading ? "Logging in…" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
