import './App.css';
import logo from './logo.png'
import React from 'react';
import Home from './Components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Router>
      <nav>
        <ul>
          <li><img src={logo} width="40px"/></li>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Home">About</Link></li>
        </ul>
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/About"></Route>
        </Switch>
      </nav>
      </Router>
    </div>
  );
}

export default App;


{/* <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <img src="logo.png" width="60px">
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="SignIn.html"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>



<nav>
  <ul>
    <li><img src={logo} width="40px"/></li>
    <li><Link to="/Home">Home</Link></li>
    <li><Link to="/Home">About</Link></li>
  </ul>
  <Switch>
    <Route path="/Home">
      <Home />
    </Route>
    <Route path="/About"></Route>
  </Switch>
</nav> */}