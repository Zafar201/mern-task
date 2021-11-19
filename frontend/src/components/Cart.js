import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../actions/cartAction";

export default function Cart() {
  const { basket } = useSelector((state) => state.cart);

//   useEffect(() => {
//     console.log(basket[0].name, "bsk");
//   }, [basket]);
  const dispatch=useDispatch()
  
  const deleteHandler=(productId)=>{
      dispatch(deleteCart(productId))
      console.log(productId);
  }
  return (
    <div>
      <Container>
          <Row>
            <h1>Cart</h1>  
          </Row>
      {basket && basket.map((prod)=>(
          <>
        <Row key={prod.productId}>          
                <Col> <img style={{height:"100px"}} src={prod.image} alt="" />  </Col>
                {/* <Col>{prod.productId}</Col> */}
                <Col>{prod.name}</Col>
                <Col><button onClick={()=>deleteHandler(prod.productId)}> delete</button> </Col>    
        </Row>
        </>
       ))}
      </Container>
   
    </div>
  );
}
