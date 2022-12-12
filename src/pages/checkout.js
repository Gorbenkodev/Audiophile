import React from "react";
import { Header } from "../components/Header";
import '../css/checkout.css'
export function Checkout() {

  return(
    <div className="checkout">
      <Header />
      <div className="container checkout-content">
        <a href="" className="backBtn">Go Back</a>
        <form className="checkout-content-form">
          <h3>Checkout</h3>
          <div className="checkout-content-form-billing">
            <h5 className="checkout-content-form-billing_title">billing details</h5>
            <div>
            <div className="checkout-content-form-billing-name">
              <p>Name</p>
              <input></input>                
            </div>
            <div className="checkout-content-form-billing-email">
              <p>Email Address</p>
              <input></input>    
            </div>
            <div className="checkout-content-form-billing-phone">
              <p>Phone Number</p>
              <input></input>  
            </div>
          </div>
          </div>
        </form>
      </div>
    </div>
  )
}