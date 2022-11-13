import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/home.css";
import barrels from "../assets/graphics/barrels.png";
import Footer from "../Components/Footer";

function Home(props) {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Wine Cellar</h1>
        <br />
        <div className="home-links">
          <Link to="/login">Log in</Link>
          <br />
          <Link to="/register">Register</Link>
        </div>
        {props.user ? (
          <Link to="/wine" className="home-barrel">
            <img className="barrels-img" alt="wine-barrel" src={barrels}></img>
          </Link>
        ) :

         <Link id="home-about-link" to='/about'>about</Link>} 
      </div>
    </div>
  );
}

export default Home;
