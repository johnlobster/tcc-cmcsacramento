import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import myTheme from "./global/theme";
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import {  } from '@material-ui/core/styles';

ReactDOM.render(
  <React.StrictMode>
    < CssBaseline />
    <StylesProvider injectFirst>
      <ThemeProvider theme={myTheme}>
        <App />
      </ThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


