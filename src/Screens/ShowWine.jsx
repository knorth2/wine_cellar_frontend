
import { useNavigate, Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import '../assets/css/showWine.css';
import barrels from '../assets/graphics/barrels.png'


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
    <div className="show">
    <Link to='/wine'><button className="barrels"> <img className='barrels-img' alt='grapes' src={barrels}></img> </button></Link>
        <div className='show-detail'>
        <div className='show-name'>
          <h1>{wine.name}</h1>
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
          <button className='show-button' onClick={() => navigate(`/edit/${wine.id}`)}>Update</button>
          <button className='show-button' onClick={() => props.delete(wine.id)}>Delete</button>
          </div>
      </div>
  )
}

export default ShowWine