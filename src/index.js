import React,{useContext,createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {PlacesProvider} from './context/placesContext/placesContext.jsx'



ReactDOM.render(
  <PlacesProvider>
    <App />
  </PlacesProvider>,
  document.getElementById('root')
);