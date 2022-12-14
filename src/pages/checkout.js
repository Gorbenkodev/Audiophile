import React, { useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import '../css/checkout.css'
export function Checkout() {

  const [modalActive, setModalActive] = useState(false)

  return(
    <div className="checkout">
      <Header />
      <div className="container checkout-content">
      <a href="#" className="checkoutBackBtn">Go Back</a>
        <form className="checkout-content-form col-9">
          <h3 className="checkout-content-form-title">Checkout</h3>
          <div className="checkout-content-form-billing">
            <h5 className="checkout-content-form-block_title">billing details</h5>
            <div className="checkout-content-form-billing-inpts">
            <div className="checkout-content-form-billing-inpts-name">
              <p className="checkout-content-form-block-inpts-title">Name</p>
              <input className="checkout-content-form-block-inpts-input"></input>                
            </div>
            <div className="checkout-content-form-billing-inpts-email">
              <p className="checkout-content-form-block-inpts-title">Email Address</p>
              <input className="checkout-content-form-block-inpts-input"></input>    
            </div>
            <div className="checkout-content-form-billing-inpts-phone">
              <p className="checkout-content-form-block-inpts-title">Phone Number</p>
              <input className="checkout-content-form-block-inpts-input"></input>  
            </div>
          </div>
          </div>
          <div className="checkout-content-form-shopping">
            <h5 className="checkout-content-form-block_title">shopping info</h5>
            <div className="checkout-content-form-shopping-inpts">
              <div className="checkout-content-form-shopping-inpts-address">
                <p className="checkout-content-form-block-inpts-title">Address</p>
                <input className="checkout-content-form-block-inpts-input"></input>
              </div>
              <div className="checkout-content-form-shopping-inpts-zip">
                <p className="checkout-content-form-block-inpts-title">ZIP Code</p>
                <input className="checkout-content-form-block-inpts-input"></input>
              </div>
              <div className="checkout-content-form-shopping-inpts-city">
                <p className="checkout-content-form-block-inpts-title">City</p>
                <input className="checkout-content-form-block-inpts-input"></input>
              </div>
              <div className="checkout-content-form-shopping-inpts-country">
                <p className="checkout-content-form-block-inpts-title">Country</p>
                <input className="checkout-content-form-block-inpts-input"></input>
              </div>
            </div>
          </div>
          <div className="checkout-content-form-payment">
            <h5 className="checkout-content-form-block_title">payment details</h5>
            <p className="checkout-content-form-block-inpts-title">Payments Method</p>
            <div className="checkout-content-form-payment-inpts">
              <div className="checkout-content-form-payment-inpts-radio">
                <input
                type='radio'
                id="e-Money"
                ></input>
                <label>e-Money</label>   
              </div> 
              <div className="checkout-content-form-payment-inpts-radio">
                <input
                type='radio'
                ></input>
                <label>Cash on Delivery</label>   
              </div> 
            </div>
          </div>
        </form>
        <div className="checkout-content-sum col-3">
          <h3 className="checkout-content-sum_title">summary</h3>
          <div className="checkout-content-sum-product">
            <div className="checkout-content-sum-product-img"></div>
            <div className="checkout-content-sum-product-txt">
              <p className="checkout-content-sum-product-txt_name">XX99 MK II</p>
              <p className="checkout-content-sum-product-txt_prise">$ 2,999</p>
            </div>
            <p className="checkout-content-sum-product_amount">x1</p>
          </div>
          <div className="checkout-content-sum-info">
            <div className="checkout-content-sum-info-block">
              <p className="checkout-content-sum-info-block_name">Total</p>
              <p className="checkout-content-sum-info-block_price">$ 5,396</p>
            </div>
            <div className="checkout-content-sum-info-block">
              <p className="checkout-content-sum-info-block_name">Shipping</p>
              <p className="checkout-content-sum-info-block_price">$ 50</p>
            </div>
            <div className="checkout-content-sum-info-block">
              <p className="checkout-content-sum-info-block_name">Vat(included)</p>
              <p className="checkout-content-sum-info-block_price">$ 1,079</p>
            </div>
            <div className="checkout-content-sum-info-block">
              <p className="checkout-content-sum-info-block_name">Grand Total</p>
              <p className="checkout-content-sum-info-block_price">$ 5,446</p>
            </div>
          </div>
          <button onClick={() => setModalActive(prev => !prev)} className="checkout-content-sum_btn">CONTINUE & PAY</button>
        </div>
      </div>
      <div className={`checkoutModal ${modalActive ? 'checkoutModalActive' : ''}`}>
        <div className="checkoutModal-icon">
          <p><i className="checkoutModal-icon_arrow"></i></p>
        </div>
        <div className="checkoutModal-txt">
          <h3 className="checkoutModal-txt_title">THANK YOU<br/> FOR YOUR ORDER</h3>
          <p className="checkoutModal-txt_description">You will receive an email confirmation shortly.</p>
        </div>
        <div className="checkoutModal-info">
          <div className="checkoutModal-info-products">
            <div className="checkoutModal-info-products-content">
              <div className="checkoutModal-info-products-content-item">
                <div className="checkoutModal-info-products-content-item-img"></div>
                <div className="checkoutModal-info-products-content-item-txt">
                  <p className="checkoutModal-info-products-content-item-txt_name">XX99 MK II</p>
                  <p className="checkoutModal-info-products-content-item-txt_price">$ 2,999</p>
                </div>
                <p className="checkoutModal-info-products-content-item_amount">x1</p>
              </div>
              <p className="checkoutModal-info-products-content-txt">and 2 other item(s)</p>
            </div>
            <div className="checkoutModal-info-products-price">
              <p className="checkoutModal-info-products-price_name">grand total</p>
              <p className="checkoutModal-info-products-price_price">$ 5,446</p>
            </div>
          </div>
        </div>
        <a href="/"><button className="checkoutModal_btn">BACK TO HOME</button></a>
      </div>
      <Footer />
    </div>
  )
}