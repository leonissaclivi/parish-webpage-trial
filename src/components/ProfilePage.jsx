import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProfileCard from './ProfileCard'
import BasicDetails from './BasicDetails'
import Suggestions from './Suggestions'


function ProfilePage() {
    return (
        <div>
            <Container className="my-5">
                <Row>
                    <Col md={12} lg={9}>
                    <p className='ps-4 py-0 text-muted'>HOME / MATRIMONIAL / <strong>ALBA RACHEL JOHN</strong></p>
                   
                        <ProfileCard />
                        
                        <BasicDetails />
                        <BasicDetails />
                        <BasicDetails />
                    </Col>
                    <Col md={12} lg={3}>
                        <Suggestions />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default ProfilePage