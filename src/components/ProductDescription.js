import React from "react";
import '../css/productDescription.css'


export function ProductDescription() {

  return(
      <div className="productDescription">
        <div className="productDescription-features col-md-7">
          <h3 className="productDescription-features_title">features</h3>
          <p className="productDescription-features_description">Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. <br/>The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.</p>
        </div>
        <div className="productDescription-inTheBox col-md-5">
          <h3 className="productDescription-inTheBox_title">in the box</h3>
          <div className="productDescription-inTheBox-list">
            <div className="productDescription-inTheBox-list-item">
              <p className="productDescription-inTheBox-list-item_amount">1x</p>
              <p className="productDescription-inTheBox-list-item_name">Headphone Unit</p>
            </div>
            
          </div>
        </div>
      </div>
  )
}