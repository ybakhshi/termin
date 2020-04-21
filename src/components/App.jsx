import React from 'react';
import { Route, Switch, Router, Redirect} from 'react-router-dom';
import Edit from './Edit';
import {history} from '../history';
import BookAppointment from './appointment/BookAppointment';
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from './Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faSpinner } from '@fortawesome/free-solid-svg-icons'
import PassportPage from './PassportPage';
import NotFound from './appointment/NotFound';


library.add(fab, faCheckSquare, faCoffee, faSpinner, faFacebook )

function App() {
  return (
      <div className ="Site">
        <ToastContainer/>
        <Router history ={history}>
          <Header/>     
          <div className ="Site-content">
                <Switch>
                  <Route exact path ="/edit/:id" component = {Edit} />
                  <Route path = "/not-found" component = {NotFound}/>
                  <Route path ="/passport" component = {PassportPage} />
                  <Route path ="/appointment" component = {BookAppointment} />
                  <Route exact path ="/" component = {Home} />
                  <Redirect to = "/not-found"/>
                </Switch>
          </div>
          <Footer/>
        </Router>
      </div>
  );
}

export default App;
