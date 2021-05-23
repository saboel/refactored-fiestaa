// JavaScript source code
// frontend/src/components/Login/Login.js

import React, { Component } from "react"; 
import { Link } from "react-router-dom";
import  Container  from "react-bootstrap/Container"; 
import Button from "react-bootstrap/Button"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl"; 

class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }
    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    onLoginClick = () => {
        const userData = {
            username: this.state.username,
            password: this.state.password
        };
        console.log("Login " + userData.username + " " + userData.password);
    };

    render() {
        return (
            <Container>
            <Row>
              <Col md="6">
                <h1>Login</h1>
                <Form>
                  <Form.Group controlId="usernameId">
                    <Form.Label>User name</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      placeholder="Enter user name"
                      value={this.state.username}
                      onChange={this.onChange}
                    />
                    <FormControl.Feedback type="invalid"></FormControl.Feedback>
                  </Form.Group>
    
                  <Form.Group controlId="passwordId">
                    <Form.Label>Your password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                  </Form.Group>
                </Form>
                <Button color="primary" onClick={this.onLoginClick}>Login</Button>
                <p className="mt-2">
                  Don't have account (Make one Pussy)? <Link to="/signup">Signup</Link>
                </p>
              </Col>
            </Row>
          </Container>
        );

    }
}

    export default Login; 
