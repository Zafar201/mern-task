import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { Link } from "react-router-dom";
import { signin } from "../actions/userAction";
// import { Link } from "react-router-dom";
// import { signin } from "../actions/userAction";
// import LoadingBox from "../components/LoadingBox";
// import MessageBox from "../components/MessageBox";

function SigninScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignin =useSelector(state=>state.userSignin)
    const {loading,error,userInfo}= userSignin

  // const redirect = props.location.search
  //   ? props.location.search.split("=")[1]
  //   : "/";



  const dispatch = useDispatch();
  useEffect(()=>{
    if(userInfo){
     props.history.push('/')
    }
  },[userInfo,props.history])

const submitHandler=(e)=>{
    e.preventDefault()
    dispatch(signin(email,password))
}


  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>

        {/* {loading && (<h1>loading...</h1>)}
        {error && (<h1>error</h1>) } */}

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
        </div>
      </form>
    </div>
  );
}

export default withRouter(SigninScreen);
