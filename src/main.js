import React, { Component } from 'react';
import NavigationBar from './components/comman/navigationBar';
import { Route, Routes, Navigate} from 'react-router-dom';
import Movies from './components/movies';
import Customers from './components/comman/customers';
import NotFound from './components/comman/notFound';
import Rental from './components/comman/rental';
import "./App.css";
import MovieDetails from './components/movieDetail';

class Main extends Component {
    render() { 
        return (
           <main>
           <NavigationBar/>  
              <Routes>
                <Route path='/'element={<Navigate to="/movies"/>}/>
                <Route path='/movies/:id' element={<MovieDetails />}/>
                <Route path='/movies' element={<Movies/>}/> 
                <Route path='/customers' element={<Customers title='Customers Props'/>}/>
                <Route path='/rental' element={<Rental/>}/>
                <Route path="/not-found" element={<NotFound/>}/>
                <Route path="*" element={<Navigate to ="/not-found"/>} />
              </Routes>
           </main>
        );
    }
}
 
export default Main;