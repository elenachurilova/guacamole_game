import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Landing from './components/Landing'
import reportWebVitals from './reportWebVitals';
import "./App.css"

ReactDOM.render(
  <div>
    <Landing />
    <App />
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
