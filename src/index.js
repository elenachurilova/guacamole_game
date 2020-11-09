import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from './App';
import Landing from './components/Landing'
// import reportWebVitals from './reportWebVitals';
import "./App.css"

function Game () {
  return (
    <Router>
      <div className="container-fluid">
          <nav className="navbar navbar-expand-lg bg-light">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                          <Link className="nav-link" role="button" to="/">Home</Link>
                      </li>

                      <li>
                          <Link className="nav-link" role="button" to="/game">Start the game</Link>
                      </li>
                  </ul>
              </div>
          </nav>
            
          <footer>Credits: <a href="https://github.com/elenachurilova">Elena Churilova</a>, <a href="https://github.com/LaRenaiocco">LaRena Iocco</a> and <a href="https://github.com/shhudspeth">Sarah Hudspeth</a> </footer>
      
          <Switch>
              <Route path="/game">
                <App />
              </Route>
              <Route path="/">
                <Landing />
              </Route>
          </Switch>
      </div>
    </Router>
      
    )

}

ReactDOM.render(
  <div>
    <Game />
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
