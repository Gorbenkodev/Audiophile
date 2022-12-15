import React from "react";
import '../css/product.css'
import { OrangeBtn } from "../components/Btns";



export function Product() {

  return(
    <div className="product">
      <div className="product-img "><img src={require('../img/product/product-img.png')}></img></div>
      <div className="product-content ">
        <h3 className="product-content_name">XX99 Mark II Headphones</h3>
        <p className="product-content_description">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
        <OrangeBtn />
      </div>
    </div>
  )
}