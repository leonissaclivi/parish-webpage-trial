import React, { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const PROFILE_IMAGES = [
  { url: 'https://picsum.photos/600/800', alt: 'Profile Image 1' },
  { url: 'https://picsum.photos/600/800', alt: 'Profile Image 2' },
  { url: 'https://picsum.photos/600/800', alt: 'Profile Image 3' },
];

const TRANSITION_TIME = 300;

const profileData = {
  name: 'Alba Rachel John',
  age: 29,
  place: 'Kottayam',
  profession: 'IT Professional',
  height: '160cm',
  qualification: 'Msc',
};

function ProfileCard() {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const { name, age, place, profession, height, qualification } = profileData;

  const handleThumbnailClick = (index) => {
    if (index === selectedIndex || isFading) return;

    setIsFading(true);

    setTimeout(() => {
      setSelectedIndex(index);

      setIsFading(false);
    }, TRANSITION_TIME);
  };

  return (
    <Card className='mb-5 p-3' style={{ border: "none" }}>
      <Row>
        <Col md={5} className='d-flex flex-column align-items-center'>

          <div className='mb-3' style={{ width: '100%' }}>
            <img
              className="d-block w-100 profile-image-fade profile-image-mobile-adjust"
              src={PROFILE_IMAGES[selectedIndex].url}
              alt={PROFILE_IMAGES[selectedIndex].alt}
              style={{ height: '450px', objectFit: 'cover', borderRadius: '0px' , opacity: isFading ? 0 : 1, transition: `opacity ${TRANSITION_TIME}ms ease-in-out`,}}
            />
          </div>
          <div className="d-flex w-100 justify-content-between gap-2">
            {PROFILE_IMAGES.map((img, index) => (
              <img
                key={`thumb-${index}`}
                src={img.url}
                alt={img.alt}
                style={{
                  flexGrow: 1,
                  maxWidth: '33.33%',
                  height: '110px',
                  objectFit: 'cover',
                  cursor: 'pointer',
                  border: index === selectedIndex
                    ? '3px solid #a1363dff'
                    : '1px solid #ccc',
                  padding: index === selectedIndex ? '0' : '2px',
                }}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}

          </div>
        </Col>
        <Col md={7} className='ps-3 ps-md-5 pt-4'>
          <h3 className='mb-1'>{name}</h3>
          <p className='text-muted small mb-4'>Created on 02 March 2025</p>
          <hr  style={{width : '100%'}}/>
          <div className='details-grid mt-4'>
            <Row className='g-3'>
              <Col xs={6} lg={4}>
                <div>
                  <p className='fw-bold mb-0 text-muted small'>Age</p>
                  <h5 className='mb-3 mb-lg-5'>{age} Years</h5>
                </div>
              </Col>

              <Col xs={6} lg={4}>
                <div>
                  <p className='fw-bold mb-0 text-muted small'>Place</p>
                  <h5 className='mb-3 mb-lg-5'>{place}</h5>
                </div>
              </Col>

              <Col xs={6} lg={4}>
                <div>
                  <p className='fw-bold mb-0 text-muted small'>Job</p>
                  <h5 className='mb-3 mb-lg-5'>{profession}</h5>

                </div>
              </Col>

              <Col xs={6} lg={4}>
                <div>
                  <p className='fw-bold mb-0 text-muted small'>Height</p>
                  <h5 className='mb-3 mb-lg-5'>{height}</h5>
                </div>
              </Col>

              <Col xs={6} lg={4}>
                <div>
                  <p className='fw-bold mb-0 text-muted small'>Qualification</p>
                  <h5 className='mb-3 mb-lg-5'>{qualification}</h5>
                </div>
              </Col>


            </Row>
          </div>
          <button style={{ width: "100%", backgroundColor: "#ecdc96", border: "none", padding: "0.7rem 3rem", cursor: "pointer" }} className='text-center mt-3'><h6 className='p-3 fw-bold'>VIEW CONTACT DETAILS</h6> </button>
        </Col>
      </Row>


    </Card>
  )
}

export default ProfileCard