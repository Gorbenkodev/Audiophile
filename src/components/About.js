import React from "react";
import '../css/about.css'

export function About() {

  return(
    <div className="about">
      <div className="about-content" >
        <h2 className="about-content_title">Bringing you the <span>best</span> audio gear</h2>
        <p className="about-content_description">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
      </div>
      <img src={require('../img/about/about-img.png')}></img>
    </div>
  )
}