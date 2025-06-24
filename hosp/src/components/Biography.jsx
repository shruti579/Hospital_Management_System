import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
         Welcome to ZeeCare, your trusted partner in managing your healthcare needs conveniently and efficiently. At ZeeCare, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
         </p>
         <p> ZeeCare is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, ZeeCare is here to support you every step of the way.</p>
          {/* <p>We are all in 2025!</p> */}
          <h3>Our Vision</h3>
          <p>
         Our vision at ZeeCare is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
          {/* <p>Lorem ipsum dolor sit amet!</p>
          <p>Coding is fun!</p> */}
        </div>
      </div>
  )
}

export default Biography