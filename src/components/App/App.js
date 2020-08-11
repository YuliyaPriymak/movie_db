import React, {Component} from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "../../store";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {MoviesPage} from "../../containers/MoviesPage";
import {MovieDetailsPage} from "../../containers/MovieDetailsPage";
import {Header} from "../Header/Header";



 export const App = ()=>{
  return(
    <Provider store={store}>
      <Router>
          <Header/>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/movies'/>
          </Route>
          <Route exact path='/movies' component={MoviesPage} />
          <Route path="/movies/:id" component={MovieDetailsPage} />
        </Switch>

      </Router>
    </Provider>
  )

};