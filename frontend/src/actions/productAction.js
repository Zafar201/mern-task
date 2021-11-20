import axios from "axios"
import { GET_PRODUCTS } from "../constants/productConstant"

   export const fetchProducts=()=>async(dispatch)=>{
        const {data}= await axios.get('/api/products')
        dispatch({type:GET_PRODUCTS,payload:data})
   }
