import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  withRouter } from "react-router";
import { Link } from "react-router-dom";
import { signin } from "../actions/userAction";
import GoogleLogin from 'react-google-login'


function SigninScreen(props) {
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignin =useSelector(state=>state.userSignin)
    const {loading,error,userInfo}= userSignin

  // const redirect = props.location.search
  //   ? props.location.search.split("=")[1]
  //   : "/";



  const dispatch = useDispatch();
  useEffect(()=>{
    if(userInfo  ){
     props.history.push('/')
    }
    if(loginData){
      props.history.push('/')
    }
  },[userInfo,props.history,loginData])

const submitHandler=(e)=>{
    e.preventDefault()
    dispatch(signin(email,password))
}

const handleFailure = (result) => {
  alert(result);
};
const handleLogin = async (googleData) => {
  const res = await fetch('/api/google-login', {
    method: 'POST',
    body: JSON.stringify({
      token: googleData.tokenId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
    const data = await res.json();
    setLoginData(data);
    localStorage.setItem('loginData', JSON.stringify(data));
  };



  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
  };


  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>

        {loading && (<h1>loading...</h1>)}
        {error && (<h1 >login {error}</h1>) }

        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email "
            required
            onChange={(e)=>setEmail(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password "
            required
           onChange={(e)=>setPassword(e.target.value)}
          ></input>
        </div>

        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
            New customer?{''} <Link to='/register'>Create your account</Link>
          </div>
          <div>
           {loginData ? (
            <div>
              <h3>You logged in as {loginData.name}</h3>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={'single_host_origin'}
            ></GoogleLogin>
          )}
          </div>

        </div>
      </form>
    </div>
  );
}

export default withRouter(SigninScreen);
