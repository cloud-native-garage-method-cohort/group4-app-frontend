import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';

class DogCard extends React.Component {
    constructor() {
        super();
        this.state = {
            imgUrl: "", 
            dogFact: []
        };
    };

    getRandomImage = () => {
        axios
            .get("https://dog.ceo/api/breeds/image/random")
            .then(response => {
                this.setState({
                    imgUrl: response.data.message,
                });
            })
            .catch(err => {
            })
    }

    getRandomFact = async () => {
        try {
            const response = await fetch('https://dog-facts-backend-group-4-dev.itzroks-100000kr1k-fz0n6p-6ccd7f378ae819553d37d5f2ee142bd6-0000.ams03.containers.appdomain.cloud/fact', {mode:'cors'});
            const data = await response.json();
            // console.log("response: ", { data });

            this.setState({
                dogFact: data.fact,
            });
        }
        catch (e) {
          console.log(e)
        }
        // console.log("dog fact: ", this.state.dogFact)
    }

    getRandom = () => {
        this.getRandomFact();
        this.getRandomImage();
    }

    componentDidMount() {
        // this.getRandomImage();
        this.getRandom();
    }
    
    render() {
        const { imgUrl, dogFact } = this.state;

        return (
            <>
                <Container fluid="md" className="mt-5">
                    <Row>
                        <Col>
                            
                        <Card>
                            <Card.Header as="h5">DOG FACT</Card.Header>
                            <Card.Body>
                                {/* <Card.Title>Title</Card.Title> */}
                                <Card.Text>
                                    {/* Content of Dog Fact. */}
                                    {dogFact}
                                </Card.Text>
                                <Button variant="primary" onClick={this.getRandom} >GET NEW DOG FACT</Button>
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