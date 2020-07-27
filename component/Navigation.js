import React from "react";
import { Link } from "react-router-dom";
// import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/GamePage">GamePage </Link>
      <Link to="/myPage">MyPAGE</Link>
    </div>
  );
}

export default Navigation;