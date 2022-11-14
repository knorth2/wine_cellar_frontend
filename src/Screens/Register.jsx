import '../assets/css/register.css';
import { Link } from "react-router-dom";

function Register(props) {
    return(
      <div className='register'>
      <div className='register-container'>
        {/* <div className='register-about-text'></div> */}
        <br></br>
      <form onSubmit={props.register}>
          <h2>Register</h2>
          <label htmlFor="name">Username: </label>
          <input type="text" id="name" name="username"/>
          <br /><br />
          <label htmlFor="name">Email: </label>
          <input type="text" id="email" name="email"/>
          <br /><br />
          <label htmlFor="name">Password: </label>
          <input type="text" id="password" name="password"/>
          <br /><br />
          <button className="register-button" type="submit" value="signup">Register</button> 
      </form>
      <p>Wine Cellar is an app for wine cellar management. <Link className='register-here' to='/about'>learn more</Link>!</p>
      </div>
      </div>
      
    )
} 

export default Register