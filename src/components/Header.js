import React, { useState } from "react";
import '../css/header.css';
import { Categories } from "./Categories";
import { Basket, Logo, User } from "../img/svg";
import { Cart } from "./Cart";



export function Header() {
const [menuActiveState, setMenuActiveState] = useState()

const [cartActiveState, setCartActiveState] = useState()

const [signModal, setSignModal] = useState()

  return(
    <div className="header">
      <div className="container-md header-content">
        <div className="menu-btn" onClick={() => {setMenuActiveState(menuActiveState => !menuActiveState)}}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`container-fluid tablMenu ${menuActiveState ? 'activeTablMenu' : ''}`}>
          <Categories />
        </div>
        <div className={`modalShadow ${menuActiveState ? 'shadow' : ''}`}></div>
        <a href="/">
          <Logo />
        </a>
        <ul className="header-menu">
          <a className="header-menu_item" href="/"><li>home</li></a>
          <a className="header-menu_item" href="/headphones"><li>headphone</li></a>
          <a className="header-menu_item" href="/speakers"><li>speakers</li></a>
          <a className="header-menu_item" href="/earphones"><li>earphones</li></a>
        </ul>
        <div className="header-btn">
        <a className="header-btn_item" onClick={() => {setCartActiveState(cartActiveState => !cartActiveState)}}>
          <Basket />
        </a>
        <a className="header-btn_item" onClick={() => setSignModal(prev => !prev)}>
          <User />
        </a>
        </div>
        <div className={`userSign ${signModal ? 'userSignActive' : ''}`}>
          <a href="/signIn">Sign in</a>
          <a href="/signUp">Sign up</a>
        </div>
      </div>
      <Cart />
    </div>
  )
}