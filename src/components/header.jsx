import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

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
                        src="logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />
                        DogFact
                    </Navbar.Brand>
                    </Container>
                </Navbar>
            </>
        );
    }
}


export default Header;