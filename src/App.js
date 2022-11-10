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
      // console.log(data.data)
      setWine(data.data)
    })
  }

  const register = (e) => {
    e.preventDefault()
    console.log('register username', e.target.username.value)
    fetch(baseUrl + "/api/v1/user/register", {
        method: 'POST',
        body: JSON.stringify({
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value
        }), 
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then (res => res.json())
    .then (resJson => {
        getWine()
        navigate("login")
    })
    
}


  const loginUser = (e) => {
    e.preventDefault()
    console.log('username:', e.target.username.value)
    console.log('password:', e.target.password.value)
    fetch(baseUrl + "/api/v1/user/login", {
        method: 'POST',
        body: JSON.stringify({
            username: e.target.username.value,
            password: e.target.password.value
        }),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    })
    .then (res => res.json())
    .then (resJson => {
        setUser(e.target.username.value)
        getWine()
        console.log(getWine())
        navigate("wine")
    })
    
}


  const logout = () => {
    console.log('successfully logged out')
    fetch(baseUrl + "/api/v1/user/logout")
    setUser(null);
    navigate("/")
}

useEffect(() => {
  getWine() 
}, []);

// useEffect(() => {
//   const data = window.localStorage.getItem('MY_APP_STATE');
//   console.log('data', data)
//   if ( data !== null ) setWine(JSON.parse(data));
// }, []);

//   useEffect(()=>{
//      window.localStorage.setItem('MY_APP_STATE', JSON.stringify(wine));
//   console.log(wine)
//   },[wine])
 

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
      console.log('data', data.data)
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
    .then (res => {
      const copyWine = [...wine]
      const findIndex = wine.findIndex(wine => wine.id === id)
      // deleting dog from copyDogs array
      copyWine.splice(findIndex,1)
      setWine(copyWine)
  })
    navigate("wine");
  }
  

  return (
    <div className="App">
      <h1>Wine Cellar</h1>
      {/* <Layout user={user} wine={wine} logout={logout}> */}
      <Routes>
      <Route path='/' element={<Home user={user} logout={logout}/>}/>
      <Route path='/login' element={<Login login={loginUser}/>}/>
      <Route path='/register' element={<Register register={register}/>}/>
      <Route path='/wine' element={<Wine wine={wine} logout={logout} user={user} delete={deleteWine}/>}/>
      <Route path='/wine/:id' element={<ShowWine user={user} delete={deleteWine} />}/>
      <Route path='/new' element ={<AddWine addWine={addWine} user={user} wine={wine}/>}/>
      <Route path='/edit/:id' element={<EditWine editWine={editWine}  user={user}/>}/>
      </Routes>
      {/* </Layout> */}
    </div>
  );
}

export default App;
