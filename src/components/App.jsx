import React, { Fragment } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import Edit from './Edit';
import {history} from '../history';
import ListAppointments from './ListAppointments';
import BookAppointment from './appointment/BookAppointment';
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from './Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faSpinner } from '@fortawesome/free-solid-svg-icons'


library.add(fab, faCheckSquare, faCoffee, faSpinner )

function App() {
  return (
      <div className ="Site">
        <ToastContainer/>
        <Router history ={history}>
          <Header/>     
          <div className ="Site-content">
                <Switch>
                  <Route exact path ="/" component = {Home} />
                  <Route exact path ="/edit/:id" component = {Edit} />
                  <Route exact path ="/list" component = {ListAppointments} />
                  <Route exact path ="/appointment" component = {BookAppointment} />
                </Switch>
          </div>
          <Footer/>
        </Router>
      </div>
  );
}

export default App;
