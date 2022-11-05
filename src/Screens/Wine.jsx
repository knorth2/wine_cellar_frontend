import React from 'react'
import { useNavigate } from "react-router-dom";

function Wine(props) {
    const navigate = useNavigate();
  return (
    <>
    <div>
      <h2> Wine List </h2>
      <table>
        <tbody>
          <tr>
            <th>Name Name</th>
            <th>Vintage</th>
            <th>Region</th>
            <th>Rating</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Notes</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {props.wine.map((wine) => {
            return (
              <tr key={wine.id}>
                <td
                  style={{ textDecoration: "underline", color: "blue" }}
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
                <td>{wine.notes}</td> 
                 <td>
                  <button onClick={() => navigate(`/edit/${wine.id}`)}>
                    edit
                  </button>
                </td>
                <td>
                  <button onClick={() => props.delete(wine.id)}>X</button>
                </td> 
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </>
  )
}

export default Wine