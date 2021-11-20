import { GET_PRODUCTS } from "../constants/productConstant"

const initialState={
    loading:false,
    product:[],
    error:null
}

export const productReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_PRODUCTS:        
            return{
              ...state,
              product:action.payload    
            }
         default:
             return state   
    }
}

