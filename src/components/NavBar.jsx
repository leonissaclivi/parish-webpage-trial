import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        <Navbar expand='lg' className='py-1' style={{ backgroundColor: "#f5f4f5" }}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='w-100 justify-content-between text-center fw-bold'>
                        <Nav.Link href='#liturgy'>Liturgy & Worship</Nav.Link>
                        <NavDropdown title='Spiritual Organizations'>
                            <NavDropdown.Item href='organization1'>Organization 1</NavDropdown.Item>
                            <NavDropdown.Item href='organization2'>Organization 2</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title='Events and Announcements'>
                            <NavDropdown.Item href='organization1'>Event 1</NavDropdown.Item>
                            <NavDropdown.Item href='organization2'>Event 2</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title='Events and Announcements'>
                            <NavDropdown.Item href='organization1'>Event 1</NavDropdown.Item>
                            <NavDropdown.Item href='organization2'>Event 2</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title='Events and Announcements' style={{zIndex: 1050}}>
                            <NavDropdown.Item href='organization1'>Event 1</NavDropdown.Item>
                            <NavDropdown.Item href='organization2'>Event 2</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>

                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}

export default NavBar