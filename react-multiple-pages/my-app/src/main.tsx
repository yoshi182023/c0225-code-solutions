import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
//use bro
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/*app is entry point  */}
    </BrowserRouter>
  </React.StrictMode>
);
