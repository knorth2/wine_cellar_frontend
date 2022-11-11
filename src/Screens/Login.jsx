import { Link } from 'react-router-dom';
import '../assets/css/login.css';

function Login(props) {
    return(
      <div className='login'>
      <div className='login-container'>
      <form onSubmit={props.login}>
      <h2>welcome back, wine-o🍷</h2>
          <label htmlFor="name">Username: </label>
          <input type="text" id="name" name="username"/>
          <br /><br />
          <label htmlFor="name">Password: </label>
          <input type="text" id="password" name="password"/>
          <br /><br />
          <button className="login-button" type="submit" value="login">Login</button>
      </form>
      <p>not a member yet? sign up <Link className='register-here' to='/register'>here</Link>!</p>
      </div>
      </div>
    )
} 

export default Login