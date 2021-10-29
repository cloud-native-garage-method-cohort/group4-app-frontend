import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class NewFact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputFact: {},
        };
        this.handleInputChanged = this.handleInputChanged.bind(this);
    }

    handleInputChanged(event) {
        // const newFoo = { fact : event.target.value };

        this.setState({
            inputFact: event.target.value,
        });
    }

    submitNewFact = async(event) => {
        event.preventDefault();
        try {
            const result = fetch("https://dog-facts-backend-group-4-dev.itzroks-100000kr1k-fz0n6p-6ccd7f378ae819553d37d5f2ee142bd6-0000.ams03.containers.appdomain.cloud/add_fact/",
                {
                    method: 'POST',
                    // headers: { 'Content-Type': 'application/json' },
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded  ' },
                    body: JSON.stringify({ fact: this.state.inputFact}),
                    // body: {fact: this.state.inputFact},
                    // body: `&fact=${this.state.inputFact}`,
                    mode:'cors'
                }).then(function(response) {
                    console.log(response.status);
                    console.log(response.text());
                });
            
            console.log('submitNewFact', JSON.stringify({ fact: this.state.inputFact}));
            console.log('submitNewFact', { fact: this.state.inputFact});

            // const data = await result.json();
            // console.log("responce from server: ", data);
            // console.log(this.state.inputFact);
            // alert("You've submitted the following dog fact: " + this.state.value);
        }
        catch(e) {
            console.log(e);
        }
    }

    render() {

        return (
            <>
                <Container fluid="md" className="mt-5">
                    <Row>
                        <Col>
                            <h1>Add a new dog fact</h1>
                            <Form>
                                <Form.Group className="mb-3" controlId="form.dogfact">
                                    <Form.Label>Dog fact: </Form.Label>
                                    <Form.Control as="textarea" rows={3} onChange={this.handleInputChanged}/>
                                </Form.Group>

                                <Button variant="primary" type="submit" onClick={this.submitNewFact}>
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default NewFact;