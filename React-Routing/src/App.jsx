import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import { Landing } from "./compnenets/Landing";
//Lazy loading --- have to define function as default function
const Landing = React.lazy(() => import("./compnenets/Landing"));
// import { Dashboard } from "./compnenets/Dashboard";
const Dashboard = React.lazy(() => import("./compnenets/Dashboard"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <button onClick={() => navigate("/")}>Landing</button>
        <button
          onClick={() => {
            // window.location.href = "/dashboard";
            navigate("/dashboard");
          }}
        >
          Dashboard
        </button>
      </div>
    </div>
  );
}

export default App;
