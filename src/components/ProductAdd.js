import React, { useState } from "react";
import '../css/productAdd.css'
import { AddBtn } from "./Btns";

export function ProductAdd() {

  const [count, setCount] = useState(1);
  
  return(
    <div className="productAdd">
      <div className="productAdd-img col-6"><img src={require('../img/product/product-img.png')}></img></div>
      <div className="productAdd-content col-6">
        <h3 className="productAdd-content_name">XX99 Mark II Headphones</h3>
        <p className="productAdd-content_description">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
        <p className="productAdd-content_price">$ 2,999</p>
        <div className="productAdd-content-add">
          <div className="productAdd-content-add_counter">
            <button disabled={count === 1} onClick={() => setCount(count - 1)}>-</button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
          <AddBtn />
        </div>
      </div>
    </div>
  )
}