import React, { useState, useEffect } from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'
import './App.css';
import Home from './Screens/Home'
import Wine from './Screens/Wine'
import ShowWine from './Screens/ShowWine'

let baseUrl = process.env.REACT_APP_BACKEND_URL;


function App() {
  const [wine, setWine] = useState([]);

  // const navigate = useNavigate();

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

  return (
    <div className="App">
      <h1>Wine Cellar</h1>
      <Routes>
      <Route path='home' element={<Home />}/>
      <Route path='wine' element={<Wine wine={wine} />}/>
      <Route path="/wine/:id" element={<ShowWine />}/>
      </Routes>
    </div>
  );
}

export default App;
