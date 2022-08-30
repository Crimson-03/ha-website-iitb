import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useEffect } from 'react';

function Ir() {
   useEffect(() => {
    document.title = "International Affairs | Hostel Affairs";
  });
  return (
    <div>
        <Navbar/>
        <div className="container text-white py-3 mt-4">
            <h1 className='text-warning text-center'>International Relations</h1> <hr/>

             <div className="rules">
                    <div className="container my-5">
                        <div class="row row-cols-1 row-cols-lg-1   align-items-stretch g-4">
                        <div class="col">
                          <div class=" h-100 overflow-hidden  rounded-4" >
                            <div class="d-flex flex-column h-100 p-3 pb-3 text-shadow-1">
                               <h3 className="title mt-2">Assigned Work to Institute Secretary of International Relations</h3> <hr/>
                               <ul class="d-flex list-unstyled mt-auto">
                                <li class=" py-2">
                                  <div className='d-flex flex-column '>
                                      <div className="box  bg-danger mt-2 mb-1" style={{width:"50px", height:"50px"}}>
                                         <h1 className="number boarder bg-warning m-auto text-center">1</h1>
                                      </div>

                                        <p className='text-info fs-5'>
                                          To coordinate with the Dean IR to allow for cultural exchange between students from various universities so that the students get a glimpse of the life in IIT Bombay. This I think will result in greater number of international students doing their Ph.D. in IIT Bombay and hence improve the level of research in IIT Bombay.
                                        </p> <hr/>
                                      
                                      <div className="box  bg-danger mt-2 mb-1" style={{width:"50px", height:"50px"}}>
                                         <h1 className="number boarder bg-warning m-auto text-center">2</h1>
                                      </div>

                                      <p className="text-info fs-5">
                                       To coordinate with the GSAA regarding the Academic Reforms Committee and prepare a report on the assessment pattern of selected universities to increase the academic involvement of the students during the semester.
                                      </p> <hr/>

                                      <div className="box  bg-danger mt-2 mb-1" style={{width:"50px", height:"50px"}}>
                                         <h1 className="number boarder bg-warning m-auto text-center">3</h1>
                                      </div>
                                      
                                      <p className='text-info fs-5'>To coordinate with the IR office to update the IR website to show the relevant information regarding the student exchange program to ease the process</p>
                                       <hr/>
                                      <div className="box  bg-danger mt-2 mb-1" style={{width:"50px", height:"50px"}}>
                                         <h1 className="number boarder bg-warning m-auto text-center">4</h1>
                                      </div>

                                      <p className="text-info fs-5">To represent the institute in front of the foreign contingents and make a list of people from various fields to interact with them in order to give them a more complete picture of IIT Bombay.</p>
                                       <hr/>
                                      <div className="box  bg-danger mt-2 mb-1" style={{width:"50px", height:"50px"}}>
                                         <h1 className="number boarder bg-warning m-auto text-center">5</h1>
                                      </div>

                                      <p className="text-info fs-5">To update the IR office about information regarding the MOU with other universities and see to it that the expired MOUs are re-signed as soon as possible.</p>

                                  </div>
                                </li>
                               </ul>
                               <div className="website-link d-flex">
                                <span className='text-white'>Checkout the</span>
                                <a href='https://www.ir.iitb.ac.in/' className="nav-link px-2 text-primary" >International Relations Page</a>
                               </div>
                               
                            </div>
                            
                          </div>
                        </div>
                        </div>
                    </div>
                </div>

        </div>
    </div>
  )
}

export default Ir