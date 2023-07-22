import React from 'react'
import Works from './Works'
import Feedbacks from './Feedbacks'
import Son from "../Assets/12.jpg";


function Clients() {
  return (
    <div className='mt-56'
    style={{backgroundImage: `url(${Son})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}

    >
        <Works />
        <Feedbacks />
    </div>
  )
}

export default Clients