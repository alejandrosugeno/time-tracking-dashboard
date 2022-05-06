import React from 'react'
import cara from "../images/image-jeremy.png"
import "../styles/Cardtop.css"
function Cardtop() {
  return (
   <div className='reporttop'>
      
        <img src={cara} alt="" />
   
    <div className='letras'>
        <p>Report for</p>
        <p>Jeremy Robson</p>
    </div>
   </div>
    
  )
}

export {Cardtop}