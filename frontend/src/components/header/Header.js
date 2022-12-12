import React from 'react'
import {Navbar,Nav,NavDropdown,Form,FormControl,Container} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom';
const Header = () => {
    const navigate=useNavigate();
  return (
    <Navbar bg="primary" expand="lg" variant='dark'>
        <Container>
        <Navbar.Brand href="/">Pokedex</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='m-auto'>
            {/* <Form inline>
                <FormControl type="text" placeholder="Search" classname="mr-sm-2"/>
            </Form> */}
            </Nav>
            <Nav >
                <Nav.Link href="/upload">Upload</Nav.Link>
                <Nav.Link href="/explore">Explore</Nav.Link>
                <NavDropdown title="User" id="basic-nav-dropdown">
                    <NavDropdown.Item>My profile</NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item onClick={()=>{
                    localStorage.removeItem('UserInfo');
                    navigate("/");
                }}>Log Out</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            
        </Navbar.Collapse>
        </Container>
        
    </Navbar>
  )
}

export default Header