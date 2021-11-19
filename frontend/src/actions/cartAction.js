// import axios from 'axios'
import { CART_ADD_ITEM, DELETE_CART } from '../constants/cartConstant'

export const addToBasktet=(item)=>async(dispatch,getState)=>{

  
    dispatch({type:CART_ADD_ITEM,payload:item})
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.basket))
   
  
}

export const deleteCart=(productId)=>async(dispatch,getState)=>{
    dispatch({type:DELETE_CART,payload:productId})
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.basket))
    
  }


// export const addToBasktet=(item)=>({
//     type:CART_ADD_ITEM,
//     payload:item
//     localStorage.setItem("cart",JSON.stringify(item))
// })
