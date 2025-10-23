import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaApple, FaGooglePlay } from 'react-icons/fa';
import appstore from '../assets/appstore.svg'
import playstore from '../assets/playstore.svg'
function Footer() {
    return (
        <footer style={{ backgroundColor: "#424242" }} className='text-white pt-5 pb-3 mt-5'>
            <Container>
                <Row>
                    <Col md={4} lg={3} className='mb-4'>
                        <h5 className='mb-5'>Reach Out</h5>
                        <p className='mb-1 small text-white-50'>Customer Care</p>
                        <p className="mb-1 fw-bold">0919048528552</p>
                        <p className='mb-1 mt-5 small text-white-50'>Email address</p>
                        <p className="mb-1 fw-bold">info@thomasorthodo.com</p>
                    </Col>

                    <Col md={4} lg={3} className='mb-4'>
                        <p className='small mb-1 mb-md-4 text-white-50'>Quick Links</p>
                        <ul className="list-unstyled">
                            <li className='mb-1 mb-md-5'><a href="#" className="text-white text-decoration-none">Downloads</a></li>
                            <li className='mb-1 mb-md-5'><a href="#" className="text-white text-decoration-none">Our Present Vicar</a></li>
                            <li className='mb-1 mb-md-5'><a href="#" className="text-white text-decoration-none">Administration</a></li>
                        </ul>
                    </Col>

                    <Col md={4} lg={3} className='mb-4'>
                        <p className='small mb-1 mb-md-4 text-white-50'>Quick Links</p>
                        <ul className="list-unstyled">
                            <li className='mb-1 mb-md-5'><a href="#" className="text-white text-decoration-none">Downloads</a></li>
                            <li className='mb-1 mb-md-5'><a href="#" className="text-white text-decoration-none">Our Present Vicar</a></li>
                            <li className='mb-1 mb-md-5'><a href="#" className="text-white text-decoration-none">Administration</a></li>
                        </ul>
                    </Col>

                    <Col md={12} lg={3} className='mb-4'>
                        <h4 className='mb-2'>Connect with Us</h4>
                        <p className='small text-white-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ex non architecto, sint deserunt fuga?</p>

                        <div className="d-flex mb-3 ps-1">
                            <a href="#" className="text-white me-5"><FaLinkedinIn size={20} /></a>
                            <a href="#" className="text-white me-5"><FaYoutube size={20} /></a>
                            <a href="#" className="text-white me-5"><FaFacebookF size={20} /></a>
                            <a href="#" className="text-white me-5"><FaInstagram size={20} /></a>
                            <a href="#" className="text-white me-5"><FaTwitter size={20} /></a>
                        </div>

                        <div className='d-flex justify-content-around justify-content-md-center justify-content-lg-start mt-4'>
                            <a href="#" className='text-white me-3'>
                                <img src={appstore} alt="App store" style={{ height: '40px' }} />
                            </a>

                            <a href="#">
                                <img src={playstore} alt="Play store" style={{ height: '40px' }} />
                            </a>

                        </div>

                    </Col>
                </Row>
                <hr className="my-3 border-light opacity-25" />
                <Row>
                    <Col className='text-center small'>
                        Copyright &copy; {new Date().getFullYear()} St. Thomas Orthodox Cathedral Dubai.
                    </Col>
                </Row>
            </Container>

        </footer>

    )
}

export default Footer

