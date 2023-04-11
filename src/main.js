import React, { Component } from 'react';
import { Route, Routes, Navigate} from 'react-router-dom';
import Movies from './components/movies';
import NavigationBar from './components/comman/navigationBar';
import Customers from './components/comman/customers';
import NotFound from './components/comman/notFound';
import Rental from './components/comman/rental';
import MovieDetails from './components/movieDetail';
import LoginForm from './components/loginForm';
import "./App.css";
import RegisterForm from './components/registerForm';
import MovieForm from './components/movieForm';

class Main extends Component {
    render() { 
        return (
           <main>
           <NavigationBar/>  
              <Routes>
                {/* <Route path='/movies/new' element={<MovieForm />}/> */}
                <Route path='/register' element={<RegisterForm />}/>
                <Route path='/login' element={<LoginForm />}/>
                <Route path='/'element={<Navigate to="/movies"/>}/>
                <Route path='/movies/:id' element={<MovieDetails/>}/>
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