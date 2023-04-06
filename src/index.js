import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'font-awesome/css/font-awesome.css';
import Main from './main'; 
import NavigationBar from './components/comman/navigationBar';
import { Component } from 'react';
import Movies from './components/movies';
import Customers from './components/comman/customers';
import Counters from './components/counters';
import NotFound from './components/comman/notFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Main/>
  </BrowserRouter>
);