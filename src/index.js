import React from 'react';
import ReactDOM from 'react-dom';
import { CounterWithCustomHook } from './Components/01useState/CounterWithCustomHook';
// import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <CounterWithCustomHook />
  </React.StrictMode>,
  document.getElementById('root')
);
