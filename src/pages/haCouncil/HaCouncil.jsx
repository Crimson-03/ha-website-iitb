import React from 'react'
import { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import HA2021 from './HA2021'
import HA2122 from './HA2122'
import HA2223 from './HA2223'
import "./hacouncil.css"

function HaCouncil() {
  useEffect(() => {
    document.title = "Council | Hostel Affairs";
  });
  return (
    <div>
        <Navbar/>
        <HA2223/>
        {/* 2021-2022 Members  */}  
        
        <HA2122/>
        <div className="mt-5"></div>
      
        <HA2021/>
    </div>
  )
}

export default HaCouncil