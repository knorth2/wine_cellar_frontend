import { useNavigate, Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../assets/css/showWine.css";
import edit from "../assets/graphics/edit.png";

function ShowWine(props) {
  const [wine, setWine] = useState({});
  const [fave, setFave] = useState(false);
  let { id } = useParams();

  const navigate = useNavigate();

  let baseUrl = process.env.REACT_APP_BACKEND_URL;

  const getOneWineById = (id) => {
    fetch(baseUrl + "/api/v1/wine/" + id, {
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        console.log("this is the data: ", data.data);
        setWine(data.data);
      });
  };

  useEffect(() => {
    getOneWineById(id);
  }, []);

  return (
    <div className="show">
      <Link to="/wine">
        <h2 className="wine-list-show">Wine Cellar</h2>
      </Link>
      <br></br>
      <br></br>
      <div className="show-detail">
        <div className="show-name">
          <h1 onClick={() => (fave ? setFave(false) : setFave(true))}>
            {wine.name}
          </h1>
          {fave ? <p>❤️</p> : null}
        </div>
        <div className="show-underline"></div>
        <br></br>
        <h3 className="notes">{wine.notes}</h3>
        <table className="show-table">
        <tbody>
        <tr>
        <th>Vintage</th>
        <th>Region</th>
        <th>Rating</th>
        <th>Price</th>
        <th>Quantity</th>
        </tr>
        <tr>
        <td>{wine.vintage}</td>
        <td>{wine.region}</td>
        <td>{wine.rating}</td>
        <td>{wine.price}</td>
        <td>{wine.quantity}</td>
        <td onClick={() => props.delete(wine.id)}>🗑</td>
        </tr>
        </tbody> 
        </table>
        <button
          className="show-button"
          onClick={() => navigate(`/edit/${wine.id}`)}
        >
          Update
        </button>
       
      </div>
    </div>
  );
}

export default ShowWine;
