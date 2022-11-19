import React, { useState, useParams } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../assets/css/wine.css";

function Wine(props) {
  console.log(props.user);
  const navigate = useNavigate();

  return (
    <>
      {props.user ? (
        <div className="wine-container">
          <Link to="/">
            <h2 className="wine-list">{props.user}'s Wine List </h2>
          </Link>
          <div className="wine-bar"></div>
          <div className="wine-table">
            <div>
              {props.wine.map((wine) => {
                return (
                  <div key={wine.id}>
                    <p
                      style={{ fontSize: "18px", color: "black", float: 'left' }}
                      onClick={() => {
                        navigate(`${wine.id}`);
                      }}
                    >
                      🍷{wine.name}
                    </p>
                    
                  </div>
                );
              })}
            </div>
          </div>

          <Link to="/new/">
            <button className="add-wine-button">Add Wine</button>
          </Link>
        </div>
      ) : null}
    </>
  );
}

export default Wine;
