import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NavBar = () => {
  return (
    <> {/* Offcanvas Menu Begin */}
  <div className="offcanvas-menu-overlay" />
  <div className="offcanvas-menu-wrapper">
    <div className="offcanvas__option">
      <div className="offcanvas__links">
        <a href="#">Sign in</a>
        <a href="#">FAQs</a>
      </div>
      <div className="offcanvas__top__hover">
        <span>
          Usd <i className="arrow_carrot-down" />
        </span>
        <ul>
          <li>USD</li>
          <li>EUR</li>
          <li>USD</li>
        </ul>
      </div>
    </div>
    <div className="offcanvas__nav__option">
      <a href="#" className="search-switch">
        <img src="https://res.cloudinary.com/dugewmeeh/image/upload/v1670922313/AKA/search_kbkgaw.png" alt="" />
      </a>
      <a href="#">
        <img src="/aka/img/icon/heart.png" alt="" />
      </a>
      <a href="#">
        <img src="/aka/img/icon/cart.png" alt="" /> <span>0</span>
      </a>
      <div className="price">$0.00</div>
    </div>
    <div id="mobile-menu-wrap" />
    <div className="offcanvas__text">
      <p>Free shipping, 30-day return or refund guarantee.</p>
    </div>
  </div>
  {/* Offcanvas Menu End */}
  {/* Header Section Begin */}
  <header className="header">
    <div className="header__top">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7">
            <div className="header__top__left">
              <p>Free shipping, 30-day return or refund guarantee.</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-5">
            <div className="header__top__right">
              <div className="header__top__links">
                <a href="#">Sign in</a>
                <a href="#">FAQs</a>
              </div>
              <div className="header__top__hover">
                <span>
                  Usd <i className="arrow_carrot-down" />
                </span>
                <ul>
                  <li>USD</li>
                  <li>EUR</li>
                  <li>USD</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-3">
          <div className="header__logo">
            <a href="./index.html">
              <img src="https://res.cloudinary.com/dugewmeeh/image/upload/v1670925252/aka/logo/logo_zkivkb.png" alt="" />
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <nav className="header__menu mobile-menu">
            <ul>
              <li className="active">
                <a href="./index.html">Home</a>
              </li>
              <li>
                <a href="./shop.html">Shop</a>
              </li>
             
              <li>
                <a href="./blog.html">About Us</a>
              </li>
              <li><div className="input-group rounded">
  <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <div className="input-group-text border-0" id="search-addon" style={{backgroundImage:'url(https://res.cloudinary.com/dugewmeeh/image/upload/v1670942416/aka/hero/google-web-search-icon-16-256_tkobnc.png)', backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}}>

  </div>
</div></li>
            </ul>
          </nav>
        </div>
        <div className="col-lg-3 col-md-3">
          <div className="header__nav__option">
            <a href="#" className="search-switch">
              <img src="/aka/img/icon/search.png" alt="" />
            </a>
            <a href="#">
              <img src="/aka/img/icon/heart.png" alt="" />
            </a>
            <a href="#">
              <img src="/aka/img/icon/cart.png" alt="" /> <span>0</span>
            </a>
            <div className="price">$0.00</div>
          </div>
        </div>
      </div>
      <div className="canvas__open">
        <i className="fa fa-bars" />
      </div>
    </div>
  </header></>
  )
}

export default NavBar