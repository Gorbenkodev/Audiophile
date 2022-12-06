import React from "react";
import '../css/categories.css'

export function Categories() {

  return(
    <div className="categories container-md">
            <div className="categories-block col-4">
              <img className="categories-block_img" src={require("../img/categories/headphone.png")} alt='headphones' />
              <h6 className="categories-block_title">headphones</h6>
              <a className="categories-block_link" href="">shop <i class="arrow right"></i></a>           
            </div>
            <div className="categories-block col-4">
              <img className="categories-block_img" src={require('../img/categories/speaker.png')} alt='speakers' />
              <h6 className="categories-block_title">speakers</h6>
              <a className="categories-block_link" href="">shop <i class="arrow right"></i></a>   
            </div>
            <div className="categories-block col-4">
              <img className="categories-block_img" src={require('../img/categories/earphone.png')} alt='earphones' />
              <h6 className="categories-block_title">earphones</h6>
              <a className="categories-block_link" href="">shop <i class="arrow"></i></a>           
            </div>
          </div>
  )
}