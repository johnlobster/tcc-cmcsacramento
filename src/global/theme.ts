import { createMuiTheme, Theme} from '@material-ui/core/styles';

import makeGlobalsFromTheme from "./makeGlobalsFromTheme";

// these colours are pretty dark


// import Color from 'color';
// backgroundColor: Color(color)
//   .darken(0.3)
//   .desaturate(0.2)
//   .toString(),

// Add custom items to theme
declare module '@material-ui/core/styles/createPalette' {
  interface TypeText {
    primaryColor?: string
    primaryColorDark?: string
    primaryLinkVisited?: string
  }
  
  interface PaletteColor {
    fade:  string
  }
  interface SimplePaletteColorOptions {
    fade?:string
  }
}

const initialTheme:Theme = createMuiTheme({
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
      primary: '#0F0F0F',
      secondary: "rgb(21, 7, 7)",
      primaryColor: 'rgb(172, 53, 170)', // custom
      primaryColorDark: 'rgb(84, 24, 83)', // custom

      primaryLinkVisited: "rgb(142, 46, 140)" // custom, faded primary. Can't set alpha channel on :visited
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
  },
  // default (Chrome) top/bottom margin is 1em, which makes huge gaps for something like h3
  // I am changing to rem, with different amounts of spacing for different headers
  // could make it responsive ...
  typography: {
    fontSize: 16,
    h1: {
      marginBlockStart: '4rem',
      marginBlockEnd: '2rem',
    },
    h2: {
      marginBlockStart: '2rem',
      marginBlockEnd: '1rem',
    },
    h3: {
      marginBlockStart: '1.5rem',
      marginBlockEnd: '1rem',
    },
    h4: {
      marginBlockStart: '1rem',
      marginBlockEnd: '1rem',
    },
    h5: {
      marginBlockStart: '1rem',
      marginBlockEnd: '1rem',
    },
    h6: {
      marginBlockStart: '1rem',
      marginBlockEnd: '1rem',
    },

  },
  transitions: {
    // I like slower transitions ....
    duration: {
      enteringScreen: 700,
      leavingScreen: 700,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        // material-ui doesn't set any default values for dl dt dd
        // on the other hand, they don't seem to be common tags and not supported by CKEditor 
        // without writing a plugin
        // so might do better to have them as classes applied to <div>
        dl: { 
          padding: '0.5rem 0 1rem 1rem',
        },
        dt: {
          paddingTop: '0.75rem',
          fontSize: '1.25rem'
        },
        dd: {
          paddingTop: '0.35rem',
        },
        '@font-face': {
          fontFamily: `RoofRunnersActive`,
          src: "url(/fonts/roof-runners-active.regular.ttf)"
        },        
      },
    },
  }

});

// Font from
// https://www.1001fonts.com/roof-runners-active-font.html
// Roof runners active Regular
// by Press Gang Studios
// https://www.facebook.com/pressgangstudios 

const theme: Theme = makeGlobalsFromTheme(initialTheme, ['h1',  'h2', 'h3', 'h4', 'h5', 'h6']);

export default theme;