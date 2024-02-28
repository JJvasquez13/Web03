import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from "axios";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

axios.defaults.baseURL = "https://pokeapi.co/api/v2/";

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);