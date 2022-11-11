import '../assets/css/register.css';

function Register(props) {
    return(
      <div className='register'>
      <div className='register-container'>
        {/* <div className='register-about-text'></div> */}
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
      </div>
      </div>
      
    )
} 

export default Register