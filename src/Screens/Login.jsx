function Login(props) {
    return(
      <form onSubmit={props.login}>
          <strong>Login </strong>
          <label htmlFor="name">Username: </label>
          <input type="text" id="name" name="username"/>
          <label htmlFor="name">Password: </label>
          <input type="text" id="password" name="password"/>
          <input type="submit" value="login" />
      </form>
    )
} 

export default Login