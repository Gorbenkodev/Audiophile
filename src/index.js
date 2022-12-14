import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, Switch, BrowserRouter } from 'react-router-dom'
import { CategoryEarphones } from './pages/categoryEarphones';
import { CategoryHeadphones } from './pages/categoryHeadphones';
import { CategorySpeakers } from './pages/categorySpeackers';
import { Checkout } from './pages/checkout';
import { HomePage } from './pages/homepage';
import { ProductDetail } from './pages/productDetail';
import { SignIn } from './pages/signIn';
import { SignUp } from './pages/signUp';

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/headphones' element={<CategoryHeadphones />} />
        <Route path='/speakers' element={<CategorySpeakers />} />
        <Route path='/earphones' element={<CategoryEarphones />} />
        <Route path='/productDeatil' element={<ProductDetail />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />

      </Routes>
    </BrowserRouter>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
