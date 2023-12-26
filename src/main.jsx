import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import DevProfile from "./DevProfile/DevProfile.jsx";
import "./index.css";
import DateCounter from "./DateCounter/DateCounter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DateCounter />
  </React.StrictMode>
);
