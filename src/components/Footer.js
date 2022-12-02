import React from "react";
import '../css/footer.css';
import { FacebookIcon, InstagramIcon, Logo, TwitterIcon } from "../img/svg";

export function Footer() {
  return(
    <div className="footer">
      <div className="container footer-content">
      <div className="footer-line"></div>
      <div className="footer-head">
        <a href=""><Logo /></a>
        <ul className="footer-head-menu">
          <a className="footer-head-menu_item" href=""><li>home</li></a>
          <a className="footer-head-menu_item" href=""><li>headphone</li></a>
          <a className="footer-head-menu_item" href=""><li>speakers</li></a>
          <a className="footer-head-menu_item" href=""><li>earphones</li></a>
        </ul>
      </div>
      <div className="footer-about">
        <p className="footer-about_txt">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
        <div className="footer-about-links">
          <a className="footer-about-links_item" href=""><FacebookIcon /></a>
          <a className="footer-about-links_item" href=""><TwitterIcon /></a>
          <a className="footer-about-links_item" href=""><InstagramIcon /></a>
        </div>
      </div>
      <div className="footer-copyright">
        <p className="footer-copyright_txt">Copyright 2021. All Rights Reserved</p>
      </div>
      </div>
    </div>
  )
}