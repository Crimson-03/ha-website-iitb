import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useEffect } from 'react';

function Hospital() {

   useEffect(() => {
    document.title = "Hospital | Hostel Affairs";
  });
  return (
    <div>
        <Navbar/>
        <div className="text-white ">
            <div class=" text-secondary px-4 py-5 text-center">
              <div class="py-5">
                <h1 class="display-5 fw-bold text-white">IIT Bombay Hospital</h1>
                <div class="col-lg-6 mx-auto">
                  <p class="fs-6 mb-4">Yes, we do have our very own IITB Hospital on the campus. In case you were living under the rocks and don't know where exactly it is, it’s beside our Convocation hall. IITB Hospital is a primary care hospital for medical treatment of students and staffs. All the bonafide students of the institute are entitled to free medical attendance and treatment available in the Institute hospital.</p>
                  <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <a href="https://www.iitb.ac.in/hospital/"><button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">IITB Hospital Website</button></a>
                    <a href="https://gymkhana.iitb.ac.in/HospitalFeedback/index.php"><button type="button" class="btn btn-outline-light btn-lg px-4 me-sm-3">Hospital Feedback</button></a>
                    <a href="https://gymkhana.iitb.ac.in/~hostels/Hospital_Guidebook.pdf"><button type="button" class="btn btn-outline-danger btn-lg px-4 ">Hospital Feedback</button></a>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className="container ">
              <div class="row row-cols-1 row-cols-lg-1 px-5 align-items-stretch g-4">
              <div class="col  ">


                <div class=" h-100 overflow-hidden   rounded-4" >
                  <div class="d-flex flex-column h-100 p-2  text-shadow-1">
                     <p className="content text-white  fs-6">
                      There are 14 medical officers​ available for consultation and 30 Visiting​ specialists​ available for referral in hospital. If any treatment is not available in institute hospital, a referral to any of the empanelled hospital in Mumbai can be made by medical officers and the expenses of treatment can be reimbursed from the hospital
                     </p>
                  </div>
                </div>
              </div>


                <div class="col ">

                <div class=" h-100 overflow-hidden   rounded-4" >
                  <div class="d-flex flex-column h-100 p-2  text-shadow-1">
                    <p className="content fs-6 text-white">
                      There is also a pharmacy at the hospital to get the medicines referred by a medical officer. Students can get medicines from here for free.
                    </p>
                  </div>
                </div>
              </div>

                <div class="col">

                <div class=" h-100 overflow-hidden   rounded-4" >
                  <div class="d-flex flex-column h-100 p-2  text-shadow-1">
                    <p className="content fs-6 text-white">
                      Ambulance facility ​can be availed 24​X7 ​within the campus. For ambulance, you can call internal number 1110.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">

                <div class=" h-100 overflow-hidden   rounded-4" >
                  <div class="d-flex flex-column h-100 p-2  text-shadow-1">
                    <p className="content text-white fs-6">
                      You can find all the rules and regulation of IITB Hospital in the <a href="" className="nav-link text-primary d-inline-block">Hospital Guidebook</a> present on Gymkhana website of Hostel Affairs.
                    </p>
                  </div>
                </div>
              </div>

               <div class="col ">
                <div class=" h-100 overflow-hidden    rounded-4" >
                  <div class="d-flex flex-column h-100 p-2  text-shadow-1">
                    <p className="content text-white fs-6">
                      We are also open to all your feedback to improve the current facilities in the hospital, we request you to provide the hospital’s feedback for your every visit. You may find the <a href="" className="nav-link text-primary d-inline-block">Online Feedback Form </a> on the Hostel Affairs website.
                    </p>
                  </div>
                </div>
              </div> 

              <div className="container mt-3  p-3">
                <div className="bg-primary rounded-1 h-100 p-4">
                <h7 className='text-white'>IITB Hospital Helpdesk - 022 2576 7051</h7>

                </div>
              </div>
            </div>
        </div>

        <hr/>

         <div className="container mt-5">
              <h3 className="title text-warning border-bottom  py-3 my-3">Student Hospital Nominee</h3>
              <div class="row row-cols-1 row-cols-lg-3 my-3  align-items-stretch g-4">
        
                <div class="col ">
                <div class=" h-100 overflow-hidden  rounded-4" >
                  <div class="d-flex flex-column h-100 p-4 pb-3 text-shadow-1">
                    <img src="/22-23/Rishav.jpeg" alt="Bootstrap" width="75%"  class="rounded-circle border border-white m-auto "/>
                  </div>
                </div>
              </div>

              <div class="col ">
                <div class=" h-100 overflow-hidden  rounded-4" >
                  <div class="d-flex flex-column h-100 p-4 pb-3 text-shadow-1">
                     <ul class="d-flex list-unstyled ">
                      <li class="m-auto py-2 mt-5">
                        <div className='d-flex flex-column m-auto '>
                            <h2 className="name text-primary">Rishav Kumar</h2  >
                            <h4 className="text-white"><span>Email:</span> 200100131@iitb.ac.in</h4>
                            <h4 className="text-white"><span>Phone:</span> 6206955952</h4>
                        </div>

                      </li>
                    </ul>
                  </div>
                </div>
              </div>


            </div>
        </div>

        
    </div>
  )
}

export default Hospital