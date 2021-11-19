import { CART_ADD_ITEM, DELETE_CART } from "../constants/cartConstant";

// export const cartReducer =(state={cartItems:[]},action)=>{
//     switch(action.type){
//         case CART_ADD_ITEM:
//           const item = action.payload;
//           const existItem= state.cartItems.find(x=> x.product === item.product)  
//           if(existItem){
//               return{
//                   ...state,
//                   cartItems: state.cartItems.map(x=>x.product === existItem.product? item: x)
//               }
//           }else{
//               return{...state,cartItems:[...state.cartItems,item]}
//           }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

//         default:
//             return state
//     }
// }

const initialState={
    loading:false,
    basket:[],
    error:null
}

export const cartReducer=(state=initialState,action)=>{
    switch(action.type){
        case CART_ADD_ITEM:
            const newBasket=[...state.basket,action.payload]

            return{
              ...state,
              basket:newBasket
            }

        case DELETE_CART:
            // return {...state,basket:state.basket.filter(x=>x.productId !== action.payload)}  
            let updatedBasket=[...state.basket]
            const index=state.basket.findIndex(x=>x.productId === action.payload)
            if(index>=0){
                updatedBasket.splice(index,1)
            }
            return{
                ...state,
                basket:updatedBasket
            }


         default:
             return state   
    }
}