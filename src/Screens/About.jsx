import '../assets/css/about.css';

import { Link } from 'react-router-dom'

export default function About(props) {
  return (
    <div className='about'>
      <div className='about-quote'>
        <div className='about-quote-content'>
          <h1>"I cook with wine, sometimes I even add it to the food."</h1>
          {/* <img src={logo} alt='wandermore logo'></img> */}
        </div>
      </div>
      <div className='about-content'>
        <h2>Welcome to Wine Cellar</h2>
        {/* <img className='about-pin' alt='blue pin' src={bluePin}></img> */}
        <p>Wine Cellar is an app for wine cellar management. After creating your own login, you will be able to create your own flavor profile, save favorite wines, build a virtual cellar and access all the information that you need in selecting the most appropriate wine for you. </p>
        {props.user ? (
        <Link to='/wine'>
          <button className='get-started-button'>get started</button>
        </Link>
        ) : <Link to='/'><button className='get-started-button'>get started</button></Link>}
      </div> 
    </div>
  )
}