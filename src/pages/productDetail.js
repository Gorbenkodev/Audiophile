import React from "react";
import '../css/productDetail.css'
import { Categories } from "../components/Categories";
import { Gallery } from "../components/Gallery";
import { Header } from "../components/Header";
import { ProductAdd } from "../components/ProductAdd";
import { ProductDescription } from "../components/ProductDescription";
import { Recommend } from "../components/Recommend";
import { About } from "../components/About";
import { Footer } from "../components/Footer";




export function ProductDetail() {

  return(
    <div className="productDetail">
      <Header />
      <div className="container productDetail-content">
        <a href="" className="backBtn">Go Back</a>
        <ProductAdd />
        <ProductDescription />
        <Gallery />
        <Recommend />
        <Categories />
        <About />
      </div>
      <Footer />
    </div>
  )
}