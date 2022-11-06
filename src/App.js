import React, { useState, useEffect } from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'
import './App.css';
import Home from './Screens/Home'
import Wine from './Screens/Wine'
import ShowWine from './Screens/ShowWine'
import EditWine from './Screens/EditWine'
import AddWine from './Screens/AddWine'
import Layout from './Components/Layout'
import Login from './Screens/Login'
import Register from './Screens/Register'

let baseUrl = process.env.REACT_APP_BACKEND_URL;


function App() {
  const [wine, setWine] = useState([]);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const getWine = () => {
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

  const loginUser = async (e) => {
    console.log('loginUser')
    console.log(e.target.email.value)
    e.preventDefault()
    const url = baseUrl + '/api/v1/user/login'
    const loginBody = {
      username: e.target.username.value,
      password: e.target.password.value,
      email: e.target.email.value
    }
    try {

      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(loginBody),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: "include"
      })

      console.log(response)
      console.log("BODY: ",response.body)

      if (response.status === 200) {
        console.log("login:",response.data)
        setUser(true) 
        getWine() 
      }navigate("wine")
    }
    catch (err) {
      console.log('Error => ', err);
    }
  }

  const register = async (e) => {
    e.preventDefault();
    const url = baseUrl + "/api/v1/user/register";
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          username: e.target.username.value,
          password: e.target.password.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 201) {
        setUser(true);
        console.log("user registered");
        getWine();
        navigate("login");
      }
    } catch (err) {
      console.log("Error => ", err);
    }
  };

  const logout = (e) => {
    e.preventDefault()
    console.log('successfully logged out')
    fetch(baseUrl + "/api/v1/users/logout")
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
      {/* <Layout user={user} wine={wine} logout={logout}> */}
      <Routes>
      <Route path='/' element={<Home user={user}/>}/>
      <Route path='/login' element={<Login login={loginUser}/>}/>
      <Route path='/register' element={<Register register={register}/>}/>
      <Route path='wine' element={<Wine wine={wine} user={user} delete={deleteWine}/>}/>
      <Route path="/wine/:id" element={<ShowWine user={user} delete={deleteWine}/>}/>
      <Route path="/new" element ={<AddWine addWine={addWine} user={user} wine={wine}/>}/>
      <Route path="/edit/:id" element={<EditWine editWine={editWine} user={user}/>}/>
      </Routes>
      {/* </Layout> */}
    </div>
  );
}

export default App;
