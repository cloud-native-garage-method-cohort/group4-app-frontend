import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import mainLogo from './dog_32.png';

class Header extends React.Component {
    render() {

        return (
            <>
                {/* <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">DogFact</Navbar.Brand>
                        <Nav className="me-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> 
                        </Nav>
                    </Container>
                </Navbar> */}
                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">
                        <img
                        alt=""
                        // src="logo.svg"
                        src = {mainLogo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top mr-2"
                        />
                        <span className="m-2">DogFact</span>
                        
                    </Navbar.Brand>
                    </Container>
                </Navbar>
            </>
        );
    }
}


export default Header;