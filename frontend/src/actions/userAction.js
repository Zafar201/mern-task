import { REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS, SIGNINOUT, SIGNIN_FAIL, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "../constants/userConstant"
import axios from 'axios'

export const signin =(email,password)=>async(dispatch)=>{
    dispatch({type:SIGNIN_REQUEST,payload:{email,password}})
    console.log('okk');
    try{
      const {data}=await axios.post('/api/users/signin',{email,password})
      localStorage.setItem("userInfo",JSON.stringify(data))
      dispatch({type:SIGNIN_SUCCESS,payload:data})
   
      console.log('ok');
    }catch(error){
        dispatch({type:SIGNIN_FAIL,payload:"failed"})
    }
}

export const signOut=()=>async(dispatch)=>{
  localStorage.removeItem('userInfo')

  dispatch({type:SIGNINOUT})
}

export const register=(name,email,password)=>async(dispatch)=>{
  dispatch({type:REGISTER_REQUEST,payload:{name,email,password}})
  try{
     const {data}=await axios.post('/api/users/register',{name,email,password})
     dispatch({type:REGISTER_SUCCESS,payload:data})
     dispatch({type:SIGNIN_SUCCESS,payload:data})
     localStorage.setItem("userInfo",JSON.stringify(data))
  }catch(error){
    dispatch({type:REGISTER_FAIL,payload:"Register failed"})
  }
}