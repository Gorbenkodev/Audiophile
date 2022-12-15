import React from "react";
import '../css/categoriesPages.css'
import { Header } from "../components/Header";
import { Product } from "../components/Product";
import { Footer } from "../components/Footer";
import { Categories } from "../components/Categories";
import { About } from "../components/About";


export function CategoryHeadphones() {

  return(
    <div className="categoryPage">
      <Header />
      <div className="categoryPage-head">
        <h2 className="categoryPage-head_title">headphones</h2>
      </div>
      <div className="container-md categoryPage-content">
        <Product />
        <Product />
        <Product />
        <Categories />
        <About />
      </div>
      <Footer />
    </div>
  )
}