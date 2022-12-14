import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
// import Image from 'next/image'
import Car from '../carousel/Carousel';
import NavBar from '../navbar/NavBar';
const Home = () => {
  return (
      <>
  <meta charSet="UTF-8" />
  <meta name="description" content="Male_Fashion Template" />
  <meta name="keywords" content="Male_Fashion, unica, creative, html" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>Male-Fashion | Template</title>
  {/* Google Font */}
  <link
    href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap"
    rel="stylesheet"
  />
  {/* Css Styles */}
  <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />
  <link rel="stylesheet" href="css/font-awesome.min.css" type="text/css" />
  <link rel="stylesheet" href="css/elegant-icons.css" type="text/css" />
  <link rel="stylesheet" href="css/magnific-popup.css" type="text/css" />
  <link rel="stylesheet" href="css/nice-select.css" type="text/css" />
  <link rel="stylesheet" href="css/owl.carousel.min.css" type="text/css" />
  <link rel="stylesheet" href="css/slicknav.min.css" type="text/css" />
  <link rel="stylesheet" href="css/style.css" type="text/css" />
  {/* Page Preloder */}
  <div id="preloder">
    <div className="loader" />
  </div>
 <NavBar></NavBar>
  {/* Header Section End */}
  {/* Hero Section Begin */}
 <section className="hero">
    <Car></Car>
</section>

  {/* Hero Section End */}
  {/* Banner Section Begin */}
  <section className="banner spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 offset-lg-4">
          <div className="banner__item">
            <div className="banner__item__pic">
              <img src="https://res.cloudinary.com/dugewmeeh/image/upload/v1670924731/aka/banner/banner-1_zjlwum.jpg" alt="" />
            </div>
            <div className="banner__item__text">
              <h2>Clothing Collections 2030</h2>
              <a href="#">Shop now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="banner__item banner__item--middle">
            <div className="banner__item__pic">
              <img src="https://res.cloudinary.com/dugewmeeh/image/upload/v1670924731/aka/banner/banner-2_cthfg4.jpg" alt="" />
            </div>
            <div className="banner__item__text">
              <h2>Accessories</h2>
              <a href="#">Shop now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="banner__item banner__item--last">
            <div className="banner__item__pic">
              <img src="https://res.cloudinary.com/dugewmeeh/image/upload/v1670924731/aka/banner/banner-3_xvgsjp.jpg" alt="" />
            </div>
            <div className="banner__item__text">
              <h2>Shoes Spring 2030</h2>
              <a href="#">Shop now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Banner Section End */}
  {/* Product Section Begin */}
  <section className="product spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <ul className="filter__controls">
            <li className="active" data-filter="*">
              Best Sellers
            </li>
            <li data-filter=".new-arrivals">New Arrivals</li>
            <li data-filter=".hot-sales">Hot Sales</li>
          </ul>
        </div>
      </div>
      <div className="row product__filter">
        <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
          <div className="product__item">
            <div
              className="product__item__pic set-bg"
              data-setbg="https://res.cloudinary.com/dugewmeeh/image/upload/v1670924745/aka/shoping%20deta/thumb-3_jnkhnd.png"
            >
              <span className="label">New</span>
             
            </div>
            <div className="product__item__text">
              <h6>Piqué Biker Jacket</h6>
              <a href="#" className="add-cart">
                + Add To Cart
              </a>
              <div className="rating">
                <i className="fa fa-star-o" />
                <i className="fa fa-star-o" />
                <i className="fa fa-star-o" />
                <i className="fa fa-star-o" />
                <i className="fa fa-star-o" />
              </div>
              <h5>$67.24</h5>
              <div className="product__color__select">
                <label htmlFor="pc-1">
                  <input type="radio" id="pc-1" />
                </label>
                <label className="active black" htmlFor="pc-2">
                  <input type="radio" id="pc-2" />
                </label>
                <label className="grey" htmlFor="pc-3">
                  <input type="radio" id="pc-3" />
                </label>
              </div>
            </div>
          </div>
        </div>
        
        </div> 
    </div>
  </section>
  {/* Product Section End */}
 
  {/* Instagram Section Begin */}
  <section className="instagram spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="instagram__pic">
            <div
              className="instagram__pic__item set-bg"
              style={{  
  backgroundImage: "url(" + "https://res.cloudinary.com/dugewmeeh/image/upload/v1670925680/aka/hero/hero-1_olnrha.jpg" +  ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}} 
            />
            <div
              className="instagram__pic__item set-bg"
              data-setbg=""
            />
            <div
              className="instagram__pic__item set-bg"
              data-setbg="https://res.cloudinary.com/dqmhtibfm/image/upload/v1670924554/aka/insta/instagram-3_boktz7.jpg"
            />
            <div
              className="instagram__pic__item set-bg"
              data-setbg="/aka/img/instagram/instagram-4.jpg"
            />
            <div
              className="instagram__pic__item set-bg"
              data-setbg="/aka/img/instagram/instagram-5.jpg"
            />
            <div
              className="instagram__pic__item set-bg"
              data-setbg="/aka/img/instagram/instagram-6.jpg"
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="instagram__text">
            <h2>Instagram</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h3>#Male_Fashion</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Instagram Section End */}
  {/* Latest Blog Section Begin */}
  <section className="latest spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <span>Latest News</span>
            <h2>Fashion New Trends</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="blog__item">
            <div
              className="blog__item__pic set-bg"
              data-setbg="/aka/img/blog/blog-1.jpg"
            />
            <div className="blog__item__text">
              <span>
                <img src="/aka/img/icon/calendar.png" alt="" /> 16 February 2020
              </span>
              <h5>What Curling Irons Are The Best Ones</h5>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="blog__item">
            <div
              className="blog__item__pic set-bg"
              data-setbg="/aka/img/blog/blog-2.jpg"
            />
            <div className="blog__item__text">
              <span>
                <img src="/aka/img/icon/calendar.png" alt="" /> 21 February 2020
              </span>
              <h5>Eternity Bands Do Last Forever</h5>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="blog__item">
            <div
              className="blog__item__pic set-bg"
              data-setbg="/aka/img/blog/blog-3.jpg"
            />
            <div className="blog__item__text">
              <span>
                <img src="/aka/img/icon/calendar.png" alt="" /> 28 February 2020
              </span>
              <h5>The Health Benefits Of Sunglasses</h5>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Latest Blog Section End */}
  {/* Footer Section Begin */}
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="footer__about">
            <div className="footer__logo">
              <a href="#">
                <img src="/aka/img/footer-logo.png" alt="" />
              </a>
            </div>
            <p>
              The customer is at the heart of our unique business model, which
              includes design.
            </p>
            <a href="#">
              <img src="/aka/img/payment.png" alt="" />
            </a>
          </div>
        </div>
        <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
          <div className="footer__widget">
            <h6>Shopping</h6>
            <ul>
              <li>
                <a href="#">Clothing Store</a>
              </li>
              <li>
                <a href="#">Trending Shoes</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
              <li>
                <a href="#">Sale</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6">
          <div className="footer__widget">
            <h6>Shopping</h6>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Payment Methods</a>
              </li>
              <li>
                <a href="#">Delivary</a>
              </li>
              <li>
                <a href="#">Return &amp; Exchanges</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
          <div className="footer__widget">
            <h6>NewLetter</h6>
            <div className="footer__newslatter">
              <p>
                Be the first to know about new arrivals, look books, sales &amp;
                promos!
              </p>
              <form action="#">
                <input type="text" placeholder="Your email" />
                <button type="submit">
                  <span className="icon_mail_alt" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="footer__copyright__text">
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            <p>
              Copyright © 2020 All rights reserved | This template is made with{" "}
              <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
              <a href="https://colorlib.com" target="_blank"  rel="noreferrer">
                Colorlib
              </a>
            </p>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* Footer Section End */}
  {/* Search Begin */}
  <div className="search-model">
    <div className="h-100 d-flex align-items-center justify-content-center">
      <div className="search-close-switch">+</div>
      <form className="search-model-form">
        <input type="text" id="search-input" placeholder="Search here....." />
      </form>
    </div>
  </div>
  {/* Search End */}
  {/* Js Plugins */}
</>
  )
}

export default Home