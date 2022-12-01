import React from "react";
import '../css/header.css';
import { Basket, Logo, User } from "../img/svg";

export function Header() {

  return(
    <div className="header">
      <div className="container header-content">
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