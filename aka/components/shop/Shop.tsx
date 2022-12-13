import React from 'react'
import NavBar from '../navbar/NavBar'
const shop = () => {
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
    {/* Breadcrumb Section Begin */}
    <section className="breadcrumb-option">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb__text">
              <h4>Shop</h4>
              <div className="breadcrumb__links">
                <a href="./index.html">Home</a>
                <span>Shop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Breadcrumb Section End */}
    {/* Shop Section Begin */}
    <section className="shop spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="shop__sidebar">
              <div className="shop__sidebar__search">
                <form action="#">
                  <input type="text" placeholder="Search..." />
                  <button type="submit">
                    <span className="icon_search" />
                  </button>
                </form>
              </div>
              <div className="shop__sidebar__accordion">
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-heading">
                      <a data-toggle="collapse" data-target="#collapseOne">
                        Categories
                      </a>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="shop__sidebar__categories">
                          <ul className="nice-scroll">
                            <li>
                              <a href="#">Men (20)</a>
                            </li>
                            <li>
                              <a href="#">Women (20)</a>
                            </li>
                            <li>
                              <a href="#">Bags (20)</a>
                            </li>
                            <li>
                              <a href="#">Clothing (20)</a>
                            </li>
                            <li>
                              <a href="#">Shoes (20)</a>
                            </li>
                            <li>
                              <a href="#">Accessories (20)</a>
                            </li>
                            <li>
                              <a href="#">Kids (20)</a>
                            </li>
                            <li>
                              <a href="#">Kids (20)</a>
                            </li>
                            <li>
                              <a href="#">Kids (20)</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <a data-toggle="collapse" data-target="#collapseTwo">
                        Branding
                      </a>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse show"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="shop__sidebar__brand">
                          <ul>
                            <li>
                              <a href="#">Louis Vuitton</a>
                            </li>
                            <li>
                              <a href="#">Chanel</a>
                            </li>
                            <li>
                              <a href="#">Hermes</a>
                            </li>
                            <li>
                              <a href="#">Gucci</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <a data-toggle="collapse" data-target="#collapseThree">
                        Filter Price
                      </a>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse show"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="shop__sidebar__price">
                          <ul>
                            <li>
                              <a href="#">$0.00 - $50.00</a>
                            </li>
                            <li>
                              <a href="#">$50.00 - $100.00</a>
                            </li>
                            <li>
                              <a href="#">$100.00 - $150.00</a>
                            </li>
                            <li>
                              <a href="#">$150.00 - $200.00</a>
                            </li>
                            <li>
                              <a href="#">$200.00 - $250.00</a>
                            </li>
                            <li>
                              <a href="#">250.00+</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <a data-toggle="collapse" data-target="#collapseFour">
                        Size
                      </a>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse show"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="shop__sidebar__size">
                          <label htmlFor="xs">
                            xs
                            <input type="radio" id="xs" />
                          </label>
                          <label htmlFor="sm">
                            s
                            <input type="radio" id="sm" />
                          </label>
                          <label htmlFor="md">
                            m
                            <input type="radio" id="md" />
                          </label>
                          <label htmlFor="xl">
                            xl
                            <input type="radio" id="xl" />
                          </label>
                          <label htmlFor="2xl">
                            2xl
                            <input type="radio" id="2xl" />
                          </label>
                          <label htmlFor="xxl">
                            xxl
                            <input type="radio" id="xxl" />
                          </label>
                          <label htmlFor="3xl">
                            3xl
                            <input type="radio" id="3xl" />
                          </label>
                          <label htmlFor="4xl">
                            4xl
                            <input type="radio" id="4xl" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <a data-toggle="collapse" data-target="#collapseFive">
                        Colors
                      </a>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse show"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="shop__sidebar__color">
                          <label className="c-1" htmlFor="sp-1">
                            <input type="radio" id="sp-1" />
                          </label>
                          <label className="c-2" htmlFor="sp-2">
                            <input type="radio" id="sp-2" />
                          </label>
                          <label className="c-3" htmlFor="sp-3">
                            <input type="radio" id="sp-3" />
                          </label>
                          <label className="c-4" htmlFor="sp-4">
                            <input type="radio" id="sp-4" />
                          </label>
                          <label className="c-5" htmlFor="sp-5">
                            <input type="radio" id="sp-5" />
                          </label>
                          <label className="c-6" htmlFor="sp-6">
                            <input type="radio" id="sp-6" />
                          </label>
                          <label className="c-7" htmlFor="sp-7">
                            <input type="radio" id="sp-7" />
                          </label>
                          <label className="c-8" htmlFor="sp-8">
                            <input type="radio" id="sp-8" />
                          </label>
                          <label className="c-9" htmlFor="sp-9">
                            <input type="radio" id="sp-9" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <a data-toggle="collapse" data-target="#collapseSix">
                        Tags
                      </a>
                    </div>
                    <div
                      id="collapseSix"
                      className="collapse show"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="shop__sidebar__tags">
                          <a href="#">Product</a>
                          <a href="#">Bags</a>
                          <a href="#">Shoes</a>
                          <a href="#">Fashio</a>
                          <a href="#">Clothing</a>
                          <a href="#">Hats</a>
                          <a href="#">Accessories</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="shop__product__option">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="shop__product__option__left">
                    <p>Showing 1–12 of 126 results</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="shop__product__option__right">
                    <p>Sort by Price:</p>
                    <select>
                      <option value="">Low To High</option>
                      <option value="">$0 - $55</option>
                      <option value="">$55 - $100</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/product/product-2.jpg"
                  >
                    <ul className="product__hover">
                      <li>
                        <a href="#">
                          <img src="img/icon/heart.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="img/icon/compare.png" alt="" />{" "}
                          <span>Compare</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="img/icon/search.png" alt="" />
                        </a>
                      </li>
                    </ul>
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
                      <label htmlFor="pc-4">
                        <input type="radio" id="pc-4" />
                      </label>
                      <label className="active black" htmlFor="pc-5">
                        <input type="radio" id="pc-5" />
                      </label>
                      <label className="grey" htmlFor="pc-6">
                        <input type="radio" id="pc-6" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              
              
            </div>
           
          </div>
        </div>
      </div>
    </section>
    {/* Shop Section End */}
    {/* Footer Section Begin */}
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__about">
              <div className="footer__logo">
                <a href="#">
                  <img src="img/footer-logo.png" alt="" />
                </a>
              </div>
              <p>
                The customer is at the heart of our unique business model, which
                includes design.
              </p>
              <a href="#">
                <img src="img/payment.png" alt="" />
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
                <a href="https://colorlib.com" target="_blank">
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

export default shop