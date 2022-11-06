import React from 'react'
import { Link } from 'react-router-dom';
import wine from '../assets/graphics/wine.jpg'
import '../assets/css/home.css';

function Home(props) {
  return (
    <>
    <div className='home-content'>
        <img alt='' src={wine}></img>
        <br />
        <div className='home-links'>
          <Link to='/login'>log in</Link>
          <br />
          <Link to='/register'>Register</Link>
          <br />
          <Link to='/wine'>Wine</Link>
        </div>
      </div>
    </>
  )
}

export default Home