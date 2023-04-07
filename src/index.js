import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'font-awesome/css/font-awesome.css';
import Main from './main'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Main/>
  </BrowserRouter>
);