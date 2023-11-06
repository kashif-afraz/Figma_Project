import React from 'react'
import './WhatPeopleSay.css';
import Group from '../assets/What_people_say.png'
const WhatPeopleSay = () => {
  return (
    <div className='what_container'>
        {/* <div className='what_inner_frame'>kassdhi</div> */}
        <img className='what_image' src={Group} alt="" />
    </div>
  )
}

export default WhatPeopleSay;