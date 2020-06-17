import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import myTheme from "./global/theme";
import {  ThemeProvider } from '@material-ui/core/styles';



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme = {myTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


