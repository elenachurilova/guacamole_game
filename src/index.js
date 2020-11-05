import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Landing from './components/Landing'
import reportWebVitals from './reportWebVitals';
import "./App.css"

function Game () {
  return (
      <div className="container">
          <Landing />
          <button className="large-button">Start the game</button>
          <App />
          <footer>Credits: <a href="https://github.com/elenachurilova">Elena Churilova</a>, <a href="https://github.com/LaRenaiocco">LaRena Iocco</a> and <a href="https://github.com/shhudspeth">Sarah Hudspeth</a> </footer>
      </div>
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
reportWebVitals();
