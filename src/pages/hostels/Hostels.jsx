import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useEffect } from 'react';

function Hostels() {

   useEffect(() => {
    document.title = "Hostels | Hostel Affairs";
  });
  return (
      <div>
        <Navbar/>
        <div className="container text-white d-flex flex-column my-5">
            <div className="heading m-auto p-5">
                <h1 className='text-warning border-bottom'>This page is under Developement</h1>
            </div>
            <img src="/under-construction.png" className='m-auto' height={"300px"} alt="" />
        </div>
    </div>
  )
}

export default Hostels