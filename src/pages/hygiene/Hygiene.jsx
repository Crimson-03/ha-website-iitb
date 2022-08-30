import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useEffect } from 'react';

function Hygiene() {
   useEffect(() => {
    document.title = "Hygiene Committee | Hostel Affairs";
  });
  return (
    <div>
        <Navbar/>
        <div className="container text-white py-3 mt-4">
            <h1 className='text-warning text-center'>Hygiene Committee</h1> <hr/>

             <div className="rules">
                    <div className="container my-5">
                        <div class="row row-cols-1 row-cols-lg-1   align-items-stretch g-4">
                        <div class="col">
                          <div class=" h-100 overflow-hidden  rounded-4" >
                            <div class="d-flex flex-column h-100 p-3 pb-3 text-shadow-1">
                               <h3 className="title mt-2">Assigned Work to Hygiene Committee</h3> <hr/>
                               <ul class="d-flex list-unstyled mt-auto">
                                <li class=" py-2">
                                  <div className='d-flex flex-column '>
                                      <div className="box  bg-danger mt-2 mb-1" style={{width:"50px", height:"50px"}}>
                                         <h1 className="number boarder bg-warning m-auto text-center">1</h1>
                                      </div>

                                        <p className='text-info fs-5'>
                                          Hygiene committee has been recently established to formalize the functioning of canteens, institute outlets, messes. Hygiene committee
                                        </p> <hr/>
                                      
                                      <div className="box  bg-danger mt-2 mb-1" style={{width:"50px", height:"50px"}}>
                                         <h1 className="number boarder bg-warning m-auto text-center">2</h1>
                                      </div>

                                      <p className="text-info fs-5">
                                       Holds the responsibility to conduct surprise visits in the Hostel Canteens, Hostel Messes and Institute Eateries.
                                      </p> <hr/>

                                      <div className="box  bg-danger mt-2 mb-1" style={{width:"50px", height:"50px"}}>
                                         <h1 className="number boarder bg-warning m-auto text-center">3</h1>
                                      </div>
                                      
                                      <p className='text-info fs-5'>During the surprise visits in the food outlets, the hygiene committee checks various parameters of the operations of the food outlet, Rules and regulations mentioned in the contract</p>
                                       <hr/>
                                      <div className="box  bg-danger mt-2 mb-1" style={{width:"50px", height:"50px"}}>
                                         <h1 className="number boarder bg-warning m-auto text-center">4</h1>
                                      </div>

                                      <p className="text-info fs-5">The committee prepares ratings on various parameters of the operations.</p>
                                       <hr/>
                                      <div className="box  bg-danger mt-2 mb-1" style={{width:"50px", height:"50px"}}>
                                         <h1 className="number boarder bg-warning m-auto text-center">5</h1>
                                      </div>

                                      <p className="text-info fs-5">The committee imposes fine on the caterer, if there is any violation or the operations of the food outlet are below satisfactory levels.</p>

                                  </div>
                                </li>
                               </ul>
                            </div>
                            
                          </div>
                        </div>
                        </div>
                    </div>
                </div>
            <hr/>

            <div className="container mt-4">
                <h3 className="title text-warning py-3 my-3">Overall Coordinator | Hygiene Committee</h3>
              <div class="row row-cols-1 row-cols-lg-3   align-items-stretch g-4">

              <div class="col">
                <div class=" h-100 overflow-hidden  rounded-4" >
                  <div class="d-flex flex-column h-100 p-4 pb-3 text-shadow-1">
                    <img src="/22-23/yash.jpg" alt="Bootstrap" width="75%" style={{contentFit:"cover"}}  class="rounded-circle border border-white m-auto "/>
                     <ul class="d-flex list-unstyled mt-auto">
                      <li class="m-auto py-2">
                        <div className='d-flex flex-column m-auto '>
                            <h4 className="name text-primary text-center">Yash Niraj Shah </h4>
                            <h6 className="text-white mt-2"> Overall Coordinator, Hygiene Committee </h6>
                            <h7 className="text-white"><span>Email:</span> yashnirajsarika@gmail.com</h7>
                            <h7 className="text-white"><span>Phone:</span> 9429050369</h7>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

               <div class="col">
                <div class=" h-100 overflow-hidden  rounded-4" >
                  <div class="d-flex flex-column h-100 p-4 pb-3 text-shadow-1">
                    <img src="/22-23/vaibhav.jpg" alt="Bootstrap" width="75%"  class="rounded-circle border border-white m-auto "/>
                     <ul class="d-flex list-unstyled mt-auto">
                      <li class="m-auto py-2">
                        <div className='d-flex flex-column m-auto '>
                            <h4 className="name text-primary text-center">Vaibhav Gaikwad</h4>
                            <h6 className="text-white mt-2">Hygiene Committee Overall Coordinator</h6>
                            <h7 className="text-white fs-6"><span>Email:</span> vaibhavgaikwad12asus@gmail.com</h7>
                            <h7 className="text-white"><span>Phone:</span> 9011920631</h7>
                        </div>

                      </li>
                    </ul>
                  </div>
                </div>
              </div>


            </div>
        </div> <hr/>

        </div>
    </div>
  )
}

export default Hygiene