import React from 'react'
import { Link } from 'react-router-dom';
// import wine from '../assets/graphics/wine.jpg'
import '../assets/css/home.css';

function Home(props) {
  return (
    <div className='home'>
    <div className='home-content'>
        {/* <img alt='' src={wine}></img> */}
        <h1>Wine Cellar</h1>
        <br />
        <div className='home-links'>
          <Link to='/login'>log in</Link>
          <br />
          <Link to='/register'>Register</Link>
          {/* <br />
          <Link to='/wine'>Wine</Link> */}
        </div>
      </div>
      </div>
  )
}

export default Home