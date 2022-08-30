import React from 'react'
function Footer() {
  return (
    <div className='bg-white mt-5'>
        <div class="container">
  <footer class="pt-5 pb-2">
    <div class="row">
      <div class="col-6 col-md-2 mb-3">
        <h5>Main Pages</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href='/' class="nav-link p-0 text-muted">Home</a></li>
          <li class="nav-item mb-2"><a href='/ha-council' class="nav-link p-0 text-muted">HA Council</a></li>
          <li class="nav-item mb-2"><a href='/alumi' class="nav-link p-0 text-muted">Alumni Affairs</a></li>
          <li class="nav-item mb-2"><a href='/ir' class="nav-link p-0 text-muted">International Relations</a></li>
          <li class="nav-item mb-2"><a href='/hospital' class="nav-link p-0 text-muted">Hospital</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Others</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="/hostels" class="nav-link p-0 text-muted">Hostels</a></li>
          <li class="nav-item mb-2"><a href="/hall-manager-duties" class="nav-link p-0 text-muted">Hall Manager Duties</a></li>
          <li class="nav-item mb-2"><a href="/tenders" class="nav-link p-0 text-muted">Tenders</a></li>
          <li class="nav-item mb-2"><a href="/food-outlet-rating" class="nav-link p-0 text-muted">Food Outlet ratings</a></li>
          <li class="nav-item mb-2"><a href="/security" class="nav-link p-0 text-muted">Security Guidelines</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-3 mb-3">
        <h5>Important Links</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="https://gymkhana.iitb.ac.in/sustainabilitycell/" class="nav-link p-0 text-muted">Sustainability Cell</a></li>
          <li class="nav-item mb-2"><a href="https://gymkhana.iitb.ac.in/portal/reachus/" class="nav-link p-0 text-muted">ReachUs Portal</a></li>
          <li class="nav-item mb-2"><a href="http://guesthouse.iitb.ac.in/" class="nav-link p-0 text-muted">Guest House Booking</a></li>
          <li class="nav-item mb-2"><a href="/guest-accomodation-booking" class="nav-link p-0 text-muted">Guest Accomodation Booking</a></li>
          <li class="nav-item mb-2"><a href="https://gymkhana.iitb.ac.in/portal/sac/" class="nav-link p-0 text-muted">SAC Room Booking</a></li>
        </ul>
      </div>

      <div class="col-md-4 text-center offset-md-1 mb-1">
          <h5 className='text-primary'>Hostel Affairs, IIT Bombay</h5>
          <img src="/HA-logo.jpg" className='w-50' alt="" />
      </div>
    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top">
      <p className='text-primary'>© 2022 Hostel Affairs Council, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-dark" href="#"><i className='bi bi-facebook fs-5 text-primary'></i></a></li>
        <li class="ms-3"><a class="link-dark" href="#"><i className='bi bi-linkedin fs-5 text-primary'></i></a></li>
        <li class="ms-3"><a class="link-dark" href="#"><i className='bi bi-instagram fs-5 text-danger'></i></a></li>
        {/* <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li> */}
      </ul>
    </div>
  </footer>
</div>
    </div>
  )
}

export default Footer;