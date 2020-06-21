import { createMuiTheme, Theme } from '@material-ui/core/styles';

// these colours are pretty dark

const myTheme:Theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(84, 24, 83, 0.8)',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: 'rgba(34, 33, 153, 0.8)',
      // contrastText: '#ffcc00',
    },
    text: {
      primary: 'rgb(245, 245, 226)',
      secondary: "rgb(21, 7, 7)"
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    background: {
      paper: '#f0f0f0',
      default: '#FFFFFF'
    }
  }

});

export default myTheme;