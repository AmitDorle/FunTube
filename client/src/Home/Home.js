import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="main">
      <div className="nav">
        <button className="signin-button">
          <Link to="/Login" className="Link">
           Sign In
          </Link>
        </button>
      </div>
      <div className="container">
      
        <h1 className="wel-head">WELCOME<span role='img'></span>🎉🎉</h1>
        <h1 className="head"><br/>
          Get Started With <u className="bold">FunTube</u>
        </h1><br/>
      </div>
      <div className="container1">
        <h3 className="head1">
          Lets Start Your Enjoyment With Login With Funtube
        </h3>
      </div>
    </div>
  );
}

export default Home;
