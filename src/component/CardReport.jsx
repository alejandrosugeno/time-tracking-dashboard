import React from "react"
import {Cardtop} from "./Cardtop.jsx"
import "../styles/CardReport.css"

function CardReport() {
  return (
    <div className='Cardreport'>
      <Cardtop/>
    
    <div className='bottom'>
      <span>Daily</span>
      <span>Weekly</span>
      <span>Monthly</span>
    </div>
    </div>
  )
}

export {CardReport}