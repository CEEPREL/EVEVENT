import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./pages/login.js";
import Background from "./componets/background";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Login />
    <Background />
  </React.StrictMode>
);
