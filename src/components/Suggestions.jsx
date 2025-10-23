import React from 'react'
import SuggestionCard from './SuggestionCard'

function Suggestions() {

  const maxContentHeight = 'calc(75vh - 15px - 32px)';

  return (
    <div className='p-3 sticky-top' >
      <h5 className="fw-bold mb-3 pb-2 border-bottom text-muted">
        Suggestions
      </h5>
      <div style={{ backgroundColor: '#f5f4f5', top: '15px', maxHeight: maxContentHeight, overflowY: 'auto' }}>

        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />

      </div>

    </div>
  )
}

export default Suggestions