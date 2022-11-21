import React, { useState } from "react";
import { Link } from "react-router-dom";
import vintage from "../utils/vintage";
import quantity from "../utils/quantity";
import price from "../utils/price";
import region from "../utils/region";
import rating from "../utils/rating";
import '../assets/css/addWine.css';

const AddWine = (props) => {
  const [wine, setWine] = useState({
    name: "",
    vintage: "",
    region: "",
    rating: "",
    price: "",
    quantity: "",
    notes: "",
  });
  const handleChange = (e) => {
    setWine((prev) => ({ ...wine, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addWine(wine);
    setWine({
      name: "",
      vintage: "",
      region: "",
      rating: "",
      price: "",
      quantity: "",
      notes: "",
    });
  };


  return (
    <>
     <div className='add-wine'>
      <div className='add-wine-container'>
      {/* <h1>Add Wine</h1> */}
      <Link to="/wine"><h2 className="wine-list-add">Wine Cellar</h2></Link>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={wine.name}
          onChange={handleChange}
        />
        {/* <label htmlFor="name">Vintage:</label> */}
        <select
          name="vintage"
          id="vintage"
          onChange={handleChange}
          defaultValue="default"
        >
          <option disabled value="default">
            – select a vintage -
          </option>
          {vintage.map((vintage) => (
            <option value={vintage.vintage} key={vintage.id}>
              {vintage.vintage}
            </option>
          ))}
        </select>
        {/* <label htmlFor="name">Region: </label> */}
        <select
          name="region"
          id="region"
          onChange={handleChange}
          defaultValue="default"
        >
          <option disabled value="default">
            – select a region -
          </option>
          {region.map((region) => (
            <option value={region.region} key={region.id}>
              {region.region}
            </option>
          ))}
        </select>
        {/* <label htmlFor="name">Rating: </label> */}
        <select
          name="rating"
          id="rating"
          onChange={handleChange}
          defaultValue="default"
        >
          <option disabled value="default">
            – select a rating -
          </option>
          {rating.map((rating) => (
            <option value={rating.rating} key={rating.id}>
              {rating.rating}
            </option>
          ))}
        </select>
        {/* <label htmlFor="name">Price:</label> */}
        <select
          name="price"
          id="price"
          onChange={handleChange}
          defaultValue="default"
        >
          <option disabled value="default">
            – select a price -
          </option>
          {price.map((price) => (
            <option value={price.price} key={price.id}>
              {price.price}
            </option>
          ))}
        </select>
        {/* <label htmlFor="name">Quantity:</label> */}
        <select
          name="quantity"
          id="quantity"
          onChange={handleChange}
          defaultValue="default"
        >
          <option disabled value="default">
            – select quantity -
          </option>
          {quantity.map((quantity) => (
            <option value={quantity.quantity} key={quantity.id}>
              {quantity.quantity}
            </option>
          ))}
        </select>
        <label>Notes:</label>
        <input
          id="notes"
          type="text"
          name="notes"
          value={wine.notes}
          onChange={handleChange}
        />
        <br></br>
        <button className='add-button'>Add Wine</button>
      </form>
      </div>
      </div>
    </>
  );
};

export default AddWine;
