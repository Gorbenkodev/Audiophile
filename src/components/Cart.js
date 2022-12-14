import React, { useState } from "react";
import '../css/cart.css'

export function Cart() {

  const [count, setCount] = useState(1);

  
  return(
    <div className={`cart`}/* cartActive */ >
        <div className="cart-header">
          <h6 className="cart-header_title">Cart (1)</h6>
          <a className="cart-header_btn" href="">Remove all</a>
        </div>
        <div className="cart-content">
          <div className="cart-content-product">
            <div className="cart-content-product-img"></div>
            <div className="cart-content-product-txt">
              <p className="cart-content-product-txt_name">XX99 MK II</p>
              <p className="cart-content-product-txt_price">$ 2,999</p>
            </div>
            <div className="cart-content-product-counter">
            <button disabled={count === 1} onClick={() => setCount(count - 1)}>-</button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
          </div>
        </div>
        <div className="cart-content-total">
          <p className="cart-content-total_title">Total</p>
          <h6 className="cart-content-total_price">$ 5,396</h6>
        </div>
        <a href="/checkout"><button className="cart-content_btn">Checkout</button></a>
    </div>
    
  )
}