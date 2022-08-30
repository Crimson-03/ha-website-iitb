import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import { useEffect } from 'react';
import "./home.css"


function Home() {

   useEffect(() => {
    document.title = "Home | Hostel Affairs";
  });
  return (
    <div>
        <Navbar/>
        <div className="mt-3">
          <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4" class=""></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5" class=""></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="5" aria-label="Slide 6" class="active"  aria-current="true"></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="6" aria-label="Slide 7" class=""></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="7" aria-label="Slide 8" class=""></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="8" aria-label="Slide 9" class=""></button>
            </div>

            <div class="carousel-inner">
              <div class="carousel-item">
                <img src="/insti-img/hostel-12.jpg" className='carousel-img' height="50%" alt=""  />
                <div class="container">
                  <div class="carousel-caption text-start">
                    
                  </div>
                </div>
              </div>

              <div class="carousel-item ">
                <img src="/insti-img/main-building.jpg" className='carousel-img' height="50%" alt=""  />
                <div class="container">
                  <div class="carousel-caption">
                    
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <img src="/insti-img/boat-house.jpg" className='carousel-img' height="50%" alt=""  />
                <div class="container">
                  <div class="carousel-caption text-start">
                    
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <img src="/insti-img/sameer-hill.jpg" className='carousel-img' height="50%" alt=""  />
                <div class="container">
                  <div class="carousel-caption text-start">
                    
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <img src="/insti-img/swimming-pool.jpg" className='carousel-img' height="50%" alt=""  />
                <div class="container">
                  <div class="carousel-caption text-start">
                    
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <img src="/insti-img/lecture-hall.jpg" className='carousel-img' height="50%" alt=""  />
                <div class="container">
                  <div class="carousel-caption text-start">
                    
                  </div>
                </div>
              </div>

              <div class="carousel-item active">
                <img src="/insti-img/top-view.jpg" className='carousel-img' height="50%" alt=""  />
                <div class="container">
                  <div class="carousel-caption text-start">
                    
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <img src="/insti-img/gymkhana.jpg" className='carousel-img' height="50%" alt=""  />
                <div class="container">
                  <div class="carousel-caption text-start">
                    
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <img src="/insti-img/amazing.jpg" className='carousel-img' height="50%" alt=""  />
                <div class="container">
                  <div class="carousel-caption text-start">
                    
                  </div>
                </div>
              </div>


            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Home;