import React from 'react';
import { BrowserRouter, HashRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';

ReactDOM.render(
     <HashRouter>
      <App />
    </HashRouter>,
  document.getElementById('root')
);