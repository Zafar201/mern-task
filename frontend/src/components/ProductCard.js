import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import { addToBasktet} from '../actions/cartAction'

export default function ProductCard() {

    const [products, setProducts] = useState([])


    useEffect(()=>{
      const fetchData=async()=>{
          const {data}= await axios.get('/api/products')
          setProducts(data)
         
      }
      fetchData()
    },[])
    const dispatch = useDispatch()
    const addToCartHandler=(productId,name,image,count)=>{
        
        const item={
            productId,
            name,
            image,
            count
        }
       dispatch(addToBasktet(item))
       console.log(item,'item');
    //    console.log(productId,'heyy');
    }
    return (
    
        <div>
              
               <Container className="mt-4">
              
               <Row>
               {products && products.map((product)=>(
                   <Col key={product._id} md={3} className="mb-4">
                       <Card style={{ width: '18rem' }}>
                           <Card.Img variant="top" className='prd-img' src={product.image} />
                           <Card.Body>
                               <Card.Title>{product.name}</Card.Title>
                               <Card.Text>
                                   13+2MP Rear camera with AI Portrait, AI scene recognition, HDR, Pro mode | 5MP front facing camera
                               </Card.Text>

                               <Card.Title>Count in stock:{product.countInStock}</Card.Title>
                               {product.countInStock > 0 ?(
                                  <Button variant="primary"  onClick={() => addToCartHandler(product._id,product.name,product.image,product.countInStock)}>Add To Cart</Button>
                               ):
                               <p>Out of stock</p>}
                               
                           </Card.Body>
                       </Card>
                   </Col>
                  
                  ))}
               </Row>
            
            </Container>
          
            
        </div>
    )
}
