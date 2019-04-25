import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
class NavBar extends React.Component {
    render() {
        return (
            <Navbar className="fixedTop">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Our Company <span className="sr-only">(current)</span></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle>

                    </Navbar.Toggle>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/projects">
                            <NavItem eventKey={1}>
                                Projects
                        </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/teams">
                            <NavItem eventKey={1}>
                                Teams
                        </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/employees">
                            <NavItem eventKey={1}>
                                Employees
                        </NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;