import * as React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { Urls } from "../helper";

function TopNav() : React.JSX.Element {

    return (
        <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand as={Link} to='/'>Queens Park Community</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/'>
                            Home
                        </Nav.Link>
                        <Nav.Link
                            target="_blank"
                            rel="noreferrer"
                            href={Urls.SignUp}>
                            Sign Up
                        </Nav.Link>
                        <Nav.Link as={Link} to={Urls.Code}>
                            Code of Conduct
                        </Nav.Link>
                        <Nav.Link as={Link} to={Urls.Privacy}>
                            Privacy Policy
                        </Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link
                            target="_blank"
                            rel="noreferrer"
                            href={Urls.GitHub}>
                                <img style={{height: '25px'}} className="me-auto" src="github-mark-white.svg" />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNav;