import React from "react";
import '../css/homepage.css'
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { BlackBtn, OrangeBtn } from "../components/Btns";
import { Categories } from "../components/Categories";
import { About } from "../components/About";


export function HomePage() {


  return(
    <div className="homepage">
      <Header />
      <div className="homepage-head ">
        <div className="container homepage-head-content">
          <p className="homepage-head-content_title">new propduct</p>
          <h1 className="homepage-head-content_name col-9 col-md-5">XX99 Mark II Headphones</h1>
          <p className="homepage-head-content_description col-9 col-md-5">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <OrangeBtn />
        </div>
      </div>
        <div className="container-md homepage-content">
          <Categories />
          <div className="homepage-products">
            <div className="homepage-products-first">
              <div className="homepage-products-first-content">
                <h3 className="homepage-products-first-content_title">ZX9 SPEAKER</h3>
                <p className="homepage-products-first-content_description">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <BlackBtn />
              </div>
            </div>
            <div className="homepage-products-second">
              <div className="homepage-products-second-content">
                <h3 className="homepage-products-second-content_title">ZX7 SPEAKER</h3>
                <BlackBtn />
              </div>
            </div>
            <div className="homepage-products-third">
              <div className="homepage-products-third_img"></div>
              <div className="homepage-products-third-content">
                <h3 className="homepage-products-third-content_title">YX1 EARPHONES</h3>
                <BlackBtn />
              </div>
            </div>
          </div>
          <About />
        </div>
      <Footer />
    </div>
  )
}