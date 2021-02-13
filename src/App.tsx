/** @format */
import React from "react";
import "antd/dist/antd.css";
import WebRoute from "./WebScreen/WebRoute";
import StickyNav from "Components/StickyNav/StickyNav";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <StickyNav />
        <WebRoute />
      </Router>
    </div>
  );
}

export default App;
