
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Teachers from './components/Teachers/Teachers';
import Classes from './components/Classes/Classes';
import About from './components/About/About';
import Navigation from './Navigation';
import Footer from './Footer'

function App() {
  return (
    <div>
      <Router>
      <Navigation/>
      <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/classes" component={Classes}/>
      <Route path="/teachers" component={Teachers}/>
      <Route path="/about" component={About}/>
      </Switch>
      <Footer/>
      </Router>
    </div>
  );
}


export default App;
