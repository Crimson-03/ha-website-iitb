import React from 'react'
import { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar'

function AlumiAffaris() {
   useEffect(() => {
    document.title = "Alumi Affairs | Hostel Affairs";
  });
  return (
    <div>
        <Navbar/>
        <div className="container text-white py-3 mt-4">
                <h1 className='text-warning text-center'>Alumi Affairs</h1> <hr/>

                <div className="institute-level">

                    <div className="container my-5">
                        <div class="row row-cols-1 row-cols-lg-1   align-items-stretch g-4">
                        <div class="col">
                          <div class=" h-100 overflow-hidden border  rounded-4" >
                            <div class="d-flex flex-column h-100 p-3 pb-3 text-shadow-1">
                               <h3 className="title mt-2">Institute Level</h3> <hr/>
                               <ul class="d-flex list-unstyled mt-auto">
                                <li class=" py-2">
                                  <div className='d-flex flex-column '>
                                      <p className='text-info fs-5'>
                                        The students of IIT Bombay have built everlasting relationships between the alumni and the students. In the two years since its inception, volunteers have been working round the year to publicize various alumni events, batch reunions, updating alumni databases, finding lost souls(alumni with whom we have completely lost contact) and raising funds for the institute through its Alumni Outreach Program – Phonathon.
                                      </p>
                                      <p className="text-info fs-5">
                                        They are also working towards increasing the interaction between alumni and the current students by organizing Alumni Lecture Series and Panel discussions on a range of issues, facilitating interns for students.
                                      </p>
                                      
                                      <p className='text-info fs-5'>The eventual aim of the alumni body is to create a self sustaining Alumni Development Cell in IIT Bombay completely managed by student volunteers.</p>

                                  </div>
                                </li>
                               </ul>
                               <a href='https://sarc-iitb.org/' className="btn btn-success" style={{width:"280px"}}>Student Alumi Relations Cell (SARC)</a>
                            </div>
                            
                          </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="hostel-level my-5" >
                    <div className="container mt-5">
                        <div class="row row-cols-1 row-cols-lg-1   align-items-stretch g-4">
                        <div class="col">
                          <div class=" h-100 overflow-hidden border  rounded-4" >
                            <div class="d-flex flex-column h-100 p-3 pb-3 text-shadow-1">
                               <h3 className="title mt-2">Hostel Level</h3> <hr/>
                               <ul class="d-flex list-unstyled mt-auto">
                                <li class=" py-2">
                                  <div className='d-flex flex-column '>
                                      <p className='text-info fs-5'>
                                        Considering the fact that in IIT hostel is home away from home, a hostel alumni secretary is appointed in each hostel. He works as the hostel representative who connects with alumni and present the point of view of current hostel inmates. 
                                      </p>
                                      <p className="text-info fs-5">
                                        when dialog between alumni and hostel secretary can take place on a large scale. He also looks into the mailing groups that are present among the alumni and students of each hostel.
                                      </p>
                                      
                                  </div>
                                </li>
                               </ul>
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

export default AlumiAffaris