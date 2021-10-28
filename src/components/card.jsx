import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';

class DogCard extends React.Component {
    constructor() {
        super();
        this.state = {
            imgUrl: "", 
        };
    };

    getRandomImage = () => {
        console.log("Function getRandomImage called! ");
        axios
            .get("https://dog.ceo/api/breeds/image/random")
            .then(response => {
                this.setState({
                    imgUrl: response.data.message,
                });
                console.log("- fetching image:", this.state.imgUrl);
            })
            .catch(err => {
                console.log("error fetching image:", err);
            })
    }

    componentDidMount() {
        this.getRandomImage();
    }
    
    render() {
        const { imgUrl } = this.state;

        return (
            <>
                <Container fluid="md" className="mt-5">
                    <Row>
                        <Col>
                            
                        <Card>
                            <Card.Header as="h5">DOG FACT</Card.Header>
                            <Card.Body>
                                <Card.Title>Title</Card.Title>
                                <Card.Text>
                                    Content of Dog Fact.
                                </Card.Text>
                                <Button variant="primary" onClick={this.getRandomImage} >GET NEW DOG FACT</Button>
                            </Card.Body>
                            <Card.Img variant="top" src={imgUrl} fluid/>

                        </Card>

                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}


export default DogCard;