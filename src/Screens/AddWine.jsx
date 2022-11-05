import React, { useState } from "react";

const AddWine = (props) => {
    const [wine, setWine] = useState({
        name: "",
        vintage: "",
        region: "",
        rating: "",
        price: "",
        quantity: "",
        notes: ""
    })
    const handleChange = (e) => {
        setWine((prev) => ({ ...wine, [e.target.name]: e.target.value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addWine(wine)
        setWine({
            name: "",
            vintage: "",
            region: "",
            rating: "",
            price: "",
            quantity: "",
            notes: ""
        })
    }
    return (
        <>
            <h1>Add Wine</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" value={wine.name} onChange={handleChange} />
                <label htmlFor="name">Vintage</label>
                <input id="vintage" type="text" name="vintage" value={wine.vintage} onChange={handleChange} />
                <label >Region</label>
                <input id="region" type="text" name="region" value={wine.region} onChange={handleChange} />
                <label >Rating</label>
                <input id="rating" type="text" name="rating" value={wine.rating} onChange={handleChange} />
                <label >Price</label>
                <input id="price" type="text" name="price" value={wine.price} onChange={handleChange} />
                <label >Quantity</label>
                <input id="quantity" type="text" name="quantity" value={wine.quantity} onChange={handleChange} />
                <label >Notes</label>
                <input id="notes" type="text" name="notes" value={wine.notes} onChange={handleChange} />
                <input type="submit" value="Add Wine"/>
            </form>
        </>

    )
}

export default AddWine