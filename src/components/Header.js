import React, { useState } from "react";
import '../css/header.css';
import { Categories } from "./Categories";
import { Basket, Logo, User } from "../img/svg";



export function Header() {
const [activeState, setActiveState] = useState()

  return(
    <div className="header">
      <div className="container-md header-content">
        <div className="menu-btn" onClick={() => {setActiveState(activeState => !activeState)}}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`container-fluid tablMenu ${activeState ? 'activeTablMenu' : ''}`}>
          <Categories />
        </div>
        <div className={`modalShadow ${activeState ? 'shadow' : ''}`}></div>
        <a href="">
          <Logo />
        </a>
        <ul className="header-menu">
          <a className="header-menu_item" href=""><li>home</li></a>
          <a className="header-menu_item" href=""><li>headphone</li></a>
          <a className="header-menu_item" href=""><li>speakers</li></a>
          <a className="header-menu_item" href=""><li>earphones</li></a>
        </ul>
        <div className="header-btn">
        <a className="header-btn_item" href="">
          <Basket />
        </a>
        <a className="header-btn_item" href="">
          <User />
        </a>
        </div>
      </div>
    </div>
  )
}