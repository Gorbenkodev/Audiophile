import React from "react";
import '../css/recommend.css'
import { OrangeBtn } from "./Btns";

export function Recommend() {

  return(
    <div className="recommend">
      <h2 className="recommend_title">you may also like</h2>
      <div className="recommend-content">
        <div className="recommend-block">
          <div className="recommend-block-img"><img src={require('../img/recommend/recommend-first.png')}></img></div>
          <h5 className="recommend-block_name">XX99 MARK I</h5>
          <OrangeBtn />
        </div>
        <div className="recommend-block">
          <div className="recommend-block-img"><img src={require('../img/recommend/recommend-second.png')}></img></div>
          <h5 className="recommend-block_name">XX59</h5>
          <OrangeBtn />
        </div>
        <div className="recommend-block">
          <div className="recommend-block-img"><img src={require('../img/recommend/recommend-third.png')}></img></div>
          <h5 className="recommend-block_name">ZX9 SPEAKER</h5>
          <OrangeBtn />
        </div>
      </div>
    </div>
  )
}
