import React, { useState, useParams } from "react";
import { useNavigate, Link } from "react-router-dom";
// import barrels from '../assets/graphics/barrels.png';
import '../assets/css/wine.css';

function Wine(props) {
  console.log(props.user)
  const navigate = useNavigate();
  
//  const [fave, setFave]= useState(false); 

  return (
    <>
      {props.user ? (
        <div className="wine-container">
        {/* <Link to="/">
            <button className="barrels"><img className='barrels-img' alt='wine-barrel' src={barrels}></img></button>
          </Link> */}
          <Link to="/"><h2 className="wine-list">{props.user}'s Wine List </h2></Link>
          <div className='profile-bar'></div>
          <table className='wine-table'>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Vintage</th>
                <th>Region</th>
                <th>Rating</th>
                <th>Quantity</th>
                <th>Price</th>
                {/* <th>Favorite</th> */}
                {/* <th>Notes</th> */}
              </tr>
              {props.wine.map((wine) => {
                return (
                  <tr key={wine.id}>
                    <td
                      style={{ textDecoration: "underline", color: "black" }}
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
                    {/* <td>
                   
                    {fave ? <p>❤️</p> : null}
                    <button 
                     onClick={()=> fave ? setFave(false) : setFave(true)}>🍷</button>
                     </td> */}
                    {/* <td>{wine.notes}</td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
          
          <Link to="/new/">
            <button className="add-wine-button">Add Wine</button>
          </Link>
        </div>
        ) : null}  
    </>
  );
}

export default Wine;
