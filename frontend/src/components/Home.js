// JavaScript source code
// frontend/src/components/Home.js
import React, { Component } from "react";
import { Link } from "react-router-dom";
import  Container   from "react-bootstrap/Container";

class Home extends Component {
    render() {
        return (
            <Container>
                <h1>Home</h1>
                <p>
                    <Link to ="/login/">Login</Link>
                </p>
                <p>
                    <Link to = "/signup/">Signup</Link>
                </p>
                <p>
                    <Link to = "/dashboard/">Dashboard</Link>
                </p>
            </Container>
        );
                }
}
export default Home;

