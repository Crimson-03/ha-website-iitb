import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-md navbar-dark" aria-label="Offcanvas navbar large">
            <div className="container container-fluid">
                <Link className="navbar-brand" to="/"><img src="/HA-logo.jpg" height="40px" alt="" /> Hostel Affairs</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
                    aria-controls="offcanvasNavbar2">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-start text-white bg-dark" tabIndex="-1" id="offcanvasNavbar2"
                    aria-labelledby="offcanvasNavbar2Label">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Hostel Affairs IIT Bombay</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end  flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link text-white" aria-current="page" to="/ha-council">HA Council</Link>
                            </li>

                            <li className="nav-item ">
                                <Link className="nav-link text-white" aria-current="page" to="/alumi">Alumi Affairs</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-white" aria-current="page" to="/ir">International Relations</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" aria-current="page" to="/hospital">Hospital</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-white" aria-current="page" to="/hostels">Hostels</Link>
                            </li>
                            
                            <li className="nav-item">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle text-white " href="/guest-accomadation-booking" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Booking
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-primary bg-info">
                                      <li><a class="dropdown-item" href="/guest-accomadation-booking">Guest Accomodation Booking</a></li>
                                      <li><a class="dropdown-item" href="http://guesthouse.iitb.ac.in/">Guest House Booking</a></li>
                                      <li><a class="dropdown-item" href="https://gymkhana.iitb.ac.in/portal/sac/">SAC Room Booking Portal</a></li>
                                      
                                    </ul>
                                </li>
                            </li>

                            <li className="nav-item ">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle text-white " href='' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        More
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-primary bg-info">
                                      <li><a class="dropdown-item" href="https://gymkhana.iitb.ac.in/sustainabilitycell/">Sustainability Cell</a></li>
                                      <li><Link class="dropdown-item" to="/security">Security Guidelines</Link></li>
                                      <li><Link class="dropdown-item" to="/hygiene-committee">Hygiene Committee</Link></li>
                                      <li><Link class="dropdown-item" to="/food-outlet-ratings">Food Outlet Ratings</Link></li>
                                      <li><a class="dropdown-item" href="https://gymkhana.iitb.ac.in/portal/reachus/">ReachUs Portal</a></li>
                                      <li><Link class="dropdown-item" to="/hall-manager-duties">Hall Manager Duties</Link></li>
                                      <li><Link class="dropdown-item" to="/tenders">Tenders</Link></li>
                                      <li><Link class="dropdown-item" to="/gulmohar">Gulmohar</Link></li>
                            
                                      
                                    </ul>
                                </li>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar;