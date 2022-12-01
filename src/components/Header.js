import React from "react";
import '../css/header.css'
import { Basket, Logo, User } from "../img/headerImg";

export function Header() {

  return(
    <div className="header">
      <a href="">
        <Logo />
      </a>
      <ul className="header-menu">
        <a href=""><li className="header-menu_item">home</li></a>
        <a href=""><li className="header-menu_item">headphone</li></a>
        <a href=""><li className="header-menu_item">speakers</li></a>
        <a href=""><li className="header-menu_item">earphones</li></a>
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
  )
}