import React from 'react'
import Link from 'next/link'
const OneProduct = ({e}:any) => {
  return (
    <> <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <Link href={'/shop/' + e.name} ><div 
                    className="product__item__pic set-bg"
                    style={{
  backgroundImage: "url(" + e.withoutModel+  ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}
                  >
                  
                  </div></Link>
                  <div className="product__item__text">
                    <h6>{e.name}</h6>
                    <a className="btn add-cart">
                      + Add To Cart
                    </a>
                   
                    <h5>{e.price} dt</h5>
                   
                  </div>
                </div>
              </div></>
  )
}

export default OneProduct