import React from "react";
import logo from "./logo.png";

export default function Header() {
  return (
    <header className="App-header">
      <img src= {logo} className="App-logo" alt="logo" />
      <h2 id="tagline"> Your tool to organizing in the resistance</h2>
    </header>
  );
}
