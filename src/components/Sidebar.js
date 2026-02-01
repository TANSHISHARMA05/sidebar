import React, { useState } from "react";
import "./Sidebar.css";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <div className={collapsed ? "sidebar collapsed" : "sidebar"}>
      <div className="sidebar-header">
        <h2 className="logo">Logo</h2>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {collapsed ? "☰" : "✕"}
        </button>
      </div>

      <nav className="sidebar-nav">
        <a href="#home">🏠 Home</a>
        <a href="#search">🔎 Search</a>
        <a href="#explore">🧭Explore</a>
        <a href="#message">💬 Message</a>
        <a href="#notification">❤️ Notifications</a>
        <a href="#create">➕ Create</a>
        <a href="#profile">👤 Profile</a>
        <a href="#logout">🚪 Logout</a>
      </nav>
    </div>
  );
}