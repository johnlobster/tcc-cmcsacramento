import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import myTheme from "./global/theme";
import { ThemeProvider, StylesProvider  } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider>
      <ThemeProvider theme={myTheme}>
        < CssBaseline />
        <App />
      </ThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


