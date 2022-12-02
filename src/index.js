import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, Switch } from 'react-router-dom'
import { HomePage } from './pages/homepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HomePage /> 
);
