import React, { useState, useEffect } from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'
import './App.css';
import Home from './Screens/Home'
import Wine from './Screens/Wine'
import ShowWine from './Screens/ShowWine'
import EditWine from './Screens/EditWine'
import AddWine from './Screens/AddWine'

let baseUrl = process.env.REACT_APP_BACKEND_URL;


function App() {
  const [wine, setWine] = useState([]);

  const navigate = useNavigate();

  const getWine = () => {
    // fetch to the backend
    // console.log("getwine")
    fetch(baseUrl + "/api/v1/wine/",{
      credentials: "include"
    })
    .then(res => {
      if(res.status === 200) {
        return res.json()
      } else {
        return []
      }
    }).then(data => {
      console.log(data.data)
      setWine(data.data)
    })
  }
  useEffect(()=>{
    getWine()
  },[])

  const addWine =(wine)=>{
    fetch(baseUrl + "/api/v1/wine/",{
      credentials: "include",
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(
        {name: wine.name, vintage: wine.vintage, region: wine.region, rating: wine.rating, price: wine.price, quantity: wine.quantity, notes: wine.notes})
    })
    .then(res => {
      if(res.status === 200) {
        return res.json()
      } else {
        return []
      }
    }).then(data => {
      console.log(data.data)
      getWine()
      navigate("wine")
    })
  }

  const editWine = (wine) => {
    fetch(baseUrl + `/api/v1/wine/${wine.id}`, {
      credentials: "include",
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: wine.name, vintage: wine.vintage, region: wine.region, rating: wine.rating, price: wine.price, quantity: wine.quantity, notes: wine.notes }),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        console.log(data.data);
        getWine();
        navigate("wine");
      });
  };

  const deleteWine = (id)=>{
    
    fetch(baseUrl + `/api/v1/wine/${id}`,{
      credentials: "include",
      method:"DELETE",
      headers:{"Content-Type":"application/json"}
    })
    .then(res => {
      if(res.status === 200) {
        return res.json()
      } else {
        return []
      }
    }).then(data => {
      console.log(data.data)
    })
    getWine()
    navigate("wine");
  }

  return (
    <div className="App">
      <h1>Wine Cellar</h1>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='wine' element={<Wine wine={wine} delete={deleteWine}/>}/>
      <Route path="/wine/:id" element={<ShowWine delete={deleteWine}/>}/>
      <Route path="/new" element ={<AddWine addWine={addWine} wine={wine}/>}/>
      <Route path="/edit/:id" element={<EditWine editWine={editWine}/>}/>
      </Routes>
    </div>
  );
}

export default App;
