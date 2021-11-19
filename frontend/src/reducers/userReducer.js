import { REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS, SIGNINOUT, SIGNIN_FAIL, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "../constants/userConstant"

export const signinReducer=(state={},action)=>{
    switch(action.type){
        case SIGNIN_REQUEST:
             return {loading:true}
        case SIGNIN_SUCCESS:
            return {loading:false,userInfo:action.payload}
        case SIGNIN_FAIL:
            return {loading:false,error:action.payload}   
        case SIGNINOUT:
            return {}     
        default:
            return state
    }
   
}


export const registerReducer=(state={},action)=>{
    switch(action.type){
        case REGISTER_REQUEST:
             return {loading:true}
        case REGISTER_SUCCESS:
            return {loading:false,userInfo:action.payload}
        case REGISTER_FAIL:
            return {loading:false,error:action.payload}   
       
        default:
            return state
    }
   
}