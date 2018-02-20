import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import fist from "./fist.png";

export default function Homepage() {
  return (
    <div>
    <img id="fist" src= {fist} className="App-fist" alt="fist" />
    <div id="navagation">
       <Link to="/tracking">
         <div id="navagate-button">Track Your Activism</div>
       </Link>
       <Link to="/legislation">
         <div id="navagate-button">Monitor Your Bills</div>
       </Link>
     </div>
     </div>
  );
}
