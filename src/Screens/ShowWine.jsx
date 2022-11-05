
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ShowWine(props) {
    let [wine, setWine] = useState({});
  let { id } = useParams();

  const navigate = useNavigate();

  let baseUrl = process.env.REACT_APP_BACKEND_URL;

  const getOneWineById = (id) => {
    // fetch to the backend
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
    <>
        <div>
          <h1>{wine.name}</h1>
          <h2>vintage:</h2>
          <h3>{wine.vintage}</h3>
          <h2>Region:</h2>
          <h3>{wine.region}</h3>
          <h2>Rating:</h2>
          <h3>{wine.rating}</h3>
          <h2>Price:</h2>
          <h3>{wine.price}</h3>
          <h2>Quantity:</h2>
          <h3>{wine.quantity}</h3>
          <h2>Notes:</h2>
          <h3>{wine.notes}</h3>
          </div>
          <div className="d-flex justify-content-center">
          <button onClick={() => navigate(`/edit/${wine.id}`)}>edit</button>
          </div>
      </>
  )
}

export default ShowWine