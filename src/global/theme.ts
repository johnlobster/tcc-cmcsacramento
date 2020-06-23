import { createMuiTheme, Theme} from '@material-ui/core/styles';

// global css - source css files are injected before the generated styles
import './fonts.css';

// these colours are pretty dark

// Add custom items to theme
declare module '@material-ui/core/styles/createPalette' {
  interface TypeText {
    primaryColor?: string
    primaryLinkVisited?: string
  }
  
  interface PaletteColor {
    fade:  string
  }
  interface SimplePaletteColorOptions {
    fade?:string
  }
}

const myTheme:Theme = createMuiTheme({
  // overrides: {
  //   MuiCssBaseline: {
  //     '@global': {
  //         '@fontFace': {
  //         fontFamily: 'RoofRunnersActive',
  //         src: `url(${font})`,
  //         }
  //     },
  //   },
  // },
  palette: {
    primary: {
      main: 'rgba(84, 24, 83, 1)',
      contrastText: '#FFFFFF',
      fade: 'rgba(84, 24, 83, 0.8)' // custom
    },
    secondary: {
      main: 'rgba(34, 33, 153, 0.8)',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: 'rgb(245, 245, 226)',
      secondary: "rgb(21, 7, 7)",
      primaryColor: 'rgb(172, 53, 170)', // custom
      primaryLinkVisited: "rgb(47, 25, 47)" // custom, faded primary. Can't set alpha channel on :visited
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