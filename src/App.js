import React from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <>
      <Sidebar />
      <div className="content">
        <h1>Main Content Area</h1>
        <p>This is where your page content goes.</p>
      </div>
    </>
  );
}

export default App;