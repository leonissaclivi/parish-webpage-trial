import React from 'react'
import { Card } from 'react-bootstrap'

function SuggestionCard() {

  const name = "Alba Rachel John"
  const place = "Kottayam"
  const age = 29
  const job = "IT Professional"
  const imageUrl = 'https://picsum.photos/600/800'
  return (
    <Card className="mb-3 p-0 border-0 " style={{ backgroundColor: '#ffffff' , height:'100px'}}>
      <div className="d-flex align-items-center">
        <div style={{ width: '100px', height: '100px', marginRight: '10px' }}>
          <img src={imageUrl} alt={name} className="img-fluid" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

        </div>

        <div className='flex-grow-1 p-2'>
          <p className="fw-bold mb-0 text-truncate">{name}</p>
          <small className="text-muted">{age} Yrs, {place}, {job}</small>


        </div>

      </div>

    </Card>
  )
}

export default SuggestionCard