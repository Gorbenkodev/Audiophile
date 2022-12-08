import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, Switch } from 'react-router-dom'
import { CategoryEarphones } from './pages/categoryEarphones';
import { CategoryHeadphones } from './pages/categoryHeadphones';
import { CategorySpeakers } from './pages/categorySpeackers';
import { HomePage } from './pages/homepage';
import { ProductDetail } from './pages/productDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <HomePage />,
  // <CategoryHeadphones />,
  // <CategorySpeakers />,
  // <CategoryEarphones />,
  <ProductDetail />
  

);
