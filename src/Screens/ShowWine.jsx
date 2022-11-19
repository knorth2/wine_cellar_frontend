import { useNavigate, Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../assets/css/showWine.css";

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
        <h2>Vintage: </h2>
        <h3>{wine.vintage}</h3>
        <h2>Region:</h2>
        <h3>{wine.region}</h3>
        <h2>Rating:</h2>
        <h3>{wine.rating}</h3>
        <h2>Price:</h2>
        <h3>{wine.price}</h3>
        <h2>Quantity:</h2>
        <h3>{wine.quantity}</h3>
        <br></br>
        <br></br>
        {/* <h2 >Notes:</h2> */}
        <h3 className="notes">{wine.notes}</h3>
      </div>
      <div>
        <button
          className="show-button"
          onClick={() => navigate(`/edit/${wine.id}`)}
        >
          Update
        </button>
        <button className="show-button" onClick={() => props.delete(wine.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ShowWine;
