import React from "react";
import { Container, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../actions/userAction";
import { SIGNINOUT } from "../constants/userConstant";

export default function Navbar1() {
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, error, userInfo } = userSignin;

  const {basket}=useSelector(state=>state.cart)
  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signOut());
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand href="#home">MERN CART</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Link to="/cart">
                <Nav.Link href="#cart" className='cart'> CART: <span>{basket && basket.length}</span> </Nav.Link>
              </Link>
              {/* <NavDropdown title="user" id="collasible-nav-dropdown">
                             <Link to='/signin'> <NavDropdown.Item href="#action/3.2">{userInfo? userInfo.name : (
                                 <h1>Signin</h1>
                             )}</NavDropdown.Item></Link>  
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.1" onClick={signoutHandler}>Sign Out</NavDropdown.Item>
                            </NavDropdown> */}
              <Dropdown>
                  
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {userInfo? userInfo.name:(
                    <Link to='/signin'>  <h1 className='sig-h1'>Signin</h1> </Link>
                  )}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {userInfo && (
                        <Dropdown.Item onClick={signoutHandler}>Signout</Dropdown.Item>
                    )}
                
             
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
