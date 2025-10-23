import React, { useState } from 'react';
import { Container, Dropdown, Button, Navbar, Nav, Offcanvas } from 'react-bootstrap'
import logo from "../assets/stoc_logo1.jpg"

function Header() {

    const [showMenu, setShowMenu] = useState(false);
    const handleClose = () => setShowMenu(false);
    const handleShow = () => setShowMenu(true);


    return (
        <div>
            <header className='sticky-top py-3' style={{ backgroundColor: 'white', zIndex: 1050 }}>
                <Container>
                    <div className="d-flex justify-content-between align-items-center position-relative">
                        <div className="d-none d-md-block" style={{ width: "80px" }}></div>
                        <div className="d-block d-md-none" style={{ width: "40px" }}></div>

                        <div className='position-absolute start-50 translate-middle-x'>
                            <img src={logo} alt="logo" className="img-fluid w-75 w-lg-100" style={{ maxWidth: '400px', height: 'auto' }} />

                        </div>
                        <div className='d-flex align-items-center gap-3 position-relative'>
                            <button className="d-none d-md-block"
                                style={{
                                    backgroundColor: "#ecdc96",
                                    border: "none",
                                    color: "#000",
                                    textAlign: "center",
                                    padding: "0.7rem 3rem",
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                }}
                            >LOGIN</button>
                            <Button variant='light' onClick={handleShow} className='p-0 mx-3' aria-controls="offcanvas-menu" style={{ border: 'none', background: 'none', color: '#000' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                </svg>


                            </Button>

                        </div>
                    </div>
                </Container>
                <Offcanvas show={showMenu} onHide={handleClose} placement="end" id="offcanvas-menu" style={{ width: '300px', zIndex: 1060 }} >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>
                            <img src={logo} alt="logo" width={150} />
                        </Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                        <Nav className='flex-column w-100'>
                            <Nav.Link href="#login" className='offcanvas-nav-link border-bottom d-md-none' style={{ color: "#000" }}>
                                LOGIN
                            </Nav.Link>
                            <Nav.Link href="#link1" className='offcanvas-nav-link border-bottom'>Menu item 1</Nav.Link>
                            <Nav.Link href="#link2" className='offcanvas-nav-link border-bottom'>Menu item2</Nav.Link>
                            <Nav.Link href="#link3" className='offcanvas-nav-link border-bottom'>Menu item 3</Nav.Link>
                            <Nav.Link href="#link4" className='offcanvas-nav-link border-bottom'>Menu item 4</Nav.Link>

                        </Nav>
                    </Offcanvas.Body>


                </Offcanvas>
            </header>
        </div>
    )
}

export default Header