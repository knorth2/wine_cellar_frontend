import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

const EditWine = (props) => {
    const [wine, setWine] = useState({});
    let {id} = useParams()

    let baseUrl = process.env.REACT_APP_BACKEND_URL;

    const getOneWineById = (id) => {
        fetch(baseUrl + "/api/v1/wine/" + id,{
          credentials: "include"
        })
        .then(res => {
          if(res.status === 200) {
            return res.json()
          } else {
            return []
          }
        }).then(data => {
          console.log("this is the data: ",data.data)
          setWine(data.data)
        })}
        useEffect(()=>{
            getOneWineById(id)
          },[])


    const handleChange = (e) => {
        setWine((prev) => ({ ...wine, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.editWine(wine)
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
            <h1>Edit Wine</h1>
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
                <input type="submit" value="Update Wine" />
            </form>
        </>

    )
}

export default EditWine 