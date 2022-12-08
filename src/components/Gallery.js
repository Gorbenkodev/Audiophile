import React from "react";
import '../css/gallery.css'

export function Gallery() {

  return(
    <div className="gallery">
      <img className="gallery-img first-img" src={require('../img/gallery/gallery-first.png')}></img>
      <img className="gallery-img second-img" src={require('../img/gallery/gallery-second.png')}></img>
      <img className="gallery-img third-img" src={require('../img/gallery/gallery-third.png')}></img>
    </div>
  )
}