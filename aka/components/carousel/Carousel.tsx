import Carousel from 'react-bootstrap/Carousel';

import React from 'react'
function Car() {
  return (
   <div
  id="carouselExampleControls"
  className="carousel slide"
  data-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://res.cloudinary.com/dugewmeeh/image/upload/v1670925680/aka/hero/hero-1_olnrha.jpg" alt="First slide" />
       <div style={{position:'relative',bottom:'400px' }}>
                                <h6>Summer Collection</h6>
                                <h2>Fall - Winter Collections 2030</h2>
                                <div className='row'>
                                    <div className='col-4'> <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                commitment to exceptional quality.</p></div>
                               </div>
                                <a href="#" className="primary-btn">Shop now <span className="arrow_right"></span></a>
                                <div className="hero__social">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-pinterest"></i></a>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                </div>
                            </div>
    </div>
    
  </div>
  <a
    className="carousel-control-prev"
    href="#carouselExampleControls"
    role="button"
    data-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a
    className="carousel-control-next"
    href="#carouselExampleControls"
    role="button"
    data-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>

  );
}

export default Car;