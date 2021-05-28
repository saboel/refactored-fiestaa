// JavaScript source code
//frontend/src/components/signup/signup.js

import React, { Component } from "react"; 
import { Link } from "react-router-dom";
import  Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl"; 
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { signupNewUser } from "./SignupActions";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }
    onChange = e =>{
        this.setState({ [e.target.name]: e.target.value });
    };

    onSignupClick = () => {
        const userData = {
            username: this.state.username,
            password: this.state.password
        };
        this.props.signupNewUser(userData); //signup new user request
    };


    render() {
        return (
            <Container>
        <Row>
          <Col md="4">
            <h1>Sign up</h1>
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
                  value={this.password}
                  onChange={this.onChange}
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
            </Form>
            <Button 
              color="primary"
              onClick={this.onSignupClick}  
            >Sign Up</Button>
            <p className="mt-2">
              Already have a fucking account? <Link to="/login">Login</Link>
            </p>
          </Col>
        </Row>
      </Container>
        );
    }
}

Signup.propTypes = {
    signupNewUser: PropTypes.func.isRequired,
    createUser: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    createUser: state.createUser
});


export default connect(mapStateToProps, {
    signupNewUser
}) (withRouter(Signup));

