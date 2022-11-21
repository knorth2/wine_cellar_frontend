import React, { useState, useParams } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../assets/css/wine.css";
import remove from "../assets/graphics/delete.png";
import edit from "../assets/graphics/edit.png";

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
          <Link to="/new/">
            <button className="add-wine-button">Add Wine</button>
          </Link>
          <table className="wine-table">
            <tbody>
              <tr className="category">
                <th>Name</th>
                <th>Vintage</th>
                <th>Region</th>
                <th>Rating</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
              {props.wine.map((wine) => {
                return (
                  <tr className="data" key={wine.id}>
                    <td
                      className="wine-name"
                      style={{
                        float: "left",
                      }}
                      onClick={() => {
                        navigate(`${wine.id}`);
                      }}
                    >
                      {wine.name}
                    </td>
                    <td>{wine.vintage}</td>
                    <td>{wine.region}</td>
                    <td>{wine.rating}</td>
                    <td>{wine.quantity}</td>
                    <td>${wine.price}</td>
                    
                    <td onClick={() => navigate(`/edit/${wine.id}`)}>
                      <img
                        className="edit-img"
                        alt="wine-barrel"
                        src={edit}
                      ></img>
                    </td>
                    <td
                       onClick={() => props.delete(wine.id)}>🗑
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}
    </>
  );
}

export default Wine;
