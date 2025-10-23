import React from 'react'

function BasicDetails() {

  const content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, animi! Veniam nulla adipisci deserunt ipsum ipsa cupiditate laudantium doloribus placeat libero autem ipsam quis itaque perferendis rem cumque nostrum, modi culpa tenetur? Aliquid explicabo quam eveniet blanditiis tenetur itaque, deserunt, sit accusamus ullam praesentium assumenda ut placeat nostrum temporibus error totam at tempora suscipit corporis, ad aspernatur labore odio. Vitae voluptatem quae, tempora quibusdam molestias cum aliquam provident, iste sed ipsam voluptatum, deleniti temporibus. Quaerat minima a mollitia. Mollitia ad explicabo vitae, quisquam corrupti quibusdam ea, sequi iste itaque incidunt ipsa ratione impedit iure odio enim facilis beatae voluptatum voluptas!"

  return (
    <div className='basic-details-section mb-4 mt-5 p-3'>
      <h4 className='fw-bold text-muted pb-2'>Basic Details</h4>
      <p className='text-muted'>{content}</p>
      
    </div>
  )
}

export default BasicDetails

