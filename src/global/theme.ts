import { createMuiTheme, responsiveFontSizes, Theme} from '@material-ui/core/styles';
// import { CSSProperties } from '@material-ui/core/styles/withStyles'

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
    primaryColor?: string;
    primaryColorDark?: string;
    primaryLinkVisited?: string;
  }
  
  interface PaletteColor {
    fade:  string;
  }
  interface SimplePaletteColorOptions {
    fade?: string;
  }

  interface TypeBackground {
    articlePaper?: string;
  }
}

// Typography constants
export const ratio = 1.333333333333333333;
export const rhythm = 1.5;

// Problems with theme
// have to explicitly set margin-block-start because in default style sheet
// using Typography probably gets rid of all these issues
// use only bottom margins, not top margins
// line height: 1.5x font-size otherwise wrap doesn't work


// not using all headers, start at top for seo
// h1  once per page 
// h2  Major heading (ckeditor 1)
// h3  Section       (2)
// h4  Minor         (3)
// 

let initialTheme: Theme = createMuiTheme({
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
      articlePaper: '#e9e5eb',
      default: '#FFFFFF'
    }
  },
  
  //       lineHeight: `${Math.round(Math.pow(ratio, 4)/ rhythm)}rem`,

  typography: {
    fontSize: 16,
    // using rhythm, but not ratio, i.e. ratio changes as font size gets bigger
    h1: {
      fontSize: `${2.7 * rhythm}rem`,
      lineHeight: `${3 * rhythm}`,
      marginBlockStart: 0,
      // reduced padding at top by 1 rhythm
      paddingTop: `${rhythm}rem`,
      marginBlockEnd: `${rhythm}rem`,
      fontWeight: 500,
    },
    h2: {
      fontSize: `${rhythm * 2}rem`,
      lineHeight: `${2.5 * rhythm}`,
      marginBlockStart: 0,
      paddingTop: `${rhythm * 1.5}rem`,
      marginBlockEnd: `${rhythm * 0.5}rem`,
      fontWeight: 500,
    },
    h3: {
      fontSize: `${(1.4 * rhythm)}rem`,
      lineHeight: `${(2 * rhythm)}`,
      marginBlockStart: 0,
      paddingTop: `${rhythm * 1.6}rem`,
      marginBlockEnd: `${rhythm * 0.4}rem`,
      fontWeight: 500,
    },
    h4: {
      fontSize: `${0.95 * rhythm }rem`,
      lineHeight: `${(1.5)}`,
      marginBlockStart: 0,
      paddingTop: `${rhythm * 0.6}rem`,
      marginBlockEnd: `${rhythm * 0.4}rem`,
      fontWeight: 500,
    },
    h5: {
      fontSize: '1rem',
      lineHeight: `${rhythm}`,
      marginBlockStart: 0,
      paddingTop: `${rhythm * 0.7}rem`,
      marginBlockEnd: `${rhythm * 0.3 }rem`,
      letterSpacing: '0.005rem',
      fontWeight: 500,
    },
    // h1: {
    //   fontSize: `${2.7 * rhythm}rem`,
    //   lineHeight: `${3 * rhythm}rem`,
    //   marginBlockStart: 0,
    //   // reduced padding at top by 1 rhythm
    //   paddingTop: `${rhythm}rem`,
    //   marginBlockEnd: `${rhythm}rem`,
    //   fontWeight: 500,
    // },
    // h2: {
    //   fontSize: `${rhythm * 2}rem`,
    //   lineHeight: `${2.5 * rhythm}rem`,
    //   marginBlockStart: 0,
    //   paddingTop: `${rhythm * 1.5}rem`,
    //   marginBlockEnd: `${rhythm * 0.5}rem`,
    //   fontWeight: 500,
    // },
    // h3: {
    //   fontSize: `${(1.4 * rhythm)}rem`,
    //   lineHeight: `${(2 * rhythm)}rem`,
    //   marginBlockStart: 0,
    //   paddingTop: `${rhythm * 1.6}rem`,
    //   marginBlockEnd: `${rhythm * 0.4}rem`,
    //   fontWeight: 500,
    // },
    // h4: {
    //   fontSize: `${0.95 * rhythm}rem`,
    //   lineHeight: `${(1.5 * rhythm)}rem`,
    //   marginBlockStart: 0,
    //   paddingTop: `${rhythm * 0.6}rem`,
    //   marginBlockEnd: `${rhythm * 0.4}rem`,
    //   fontWeight: 500,
    // },
    // h5: {
    //   fontSize: '1rem',
    //   lineHeight: `${rhythm}rem`,
    //   marginBlockStart: 0,
    //   paddingTop: `${rhythm * 0.7}rem`,
    //   marginBlockEnd: `${rhythm * 0.3}rem`,
    //   letterSpacing: '0.005rem',
    //   fontWeight: 500,
    // },

    // h1: {
    //   fontSize: `${Math.pow(ratio, 4)}rem`,
    //   lineHeight: `${Math.pow(ratio , 4) * Math.sqrt(Math.sqrt(Math.sqrt(rhythm))) }rem`,
    //   // paddingBottom: '20px',
    //   marginBlockStart: 0,
    //   marginBlockEnd: `${((Math.pow(ratio, 4) * Math.sqrt(Math.sqrt(rhythm))) % rhythm)}rem`,
    //   fontWeight: 500,
    // },
    // h2: {
    //   fontSize: `${Math.pow(ratio, 3)}rem`,
    //   lineHeight: `${Math.pow(ratio, 3) * Math.sqrt(Math.sqrt(rhythm))}rem`,
    //   marginBlockStart: 0,
    //   marginBlockEnd: `${((Math.pow(ratio, 3) * Math.sqrt(Math.sqrt(rhythm))) % rhythm)}rem`,
    //   fontWeight: 500,
    // },
    // h3: {
    //   fontSize: `${Math.pow(ratio, 2)}rem`,
    //   lineHeight: `${Math.pow(ratio, 2) * Math.sqrt(rhythm)}rem`,
    //   marginBlockStart: 0,
    //   marginBlockEnd: `${((Math.pow(ratio, 2) * Math.sqrt(rhythm)) % rhythm)}rem`,
    //   fontWeight: 500,
    // },
    // h4: {
    //   fontSize: `${Math.pow(ratio, 1)}rem`,
    //   lineHeight: `${Math.pow(ratio, 1) * Math.sqrt(rhythm)}rem`,
    //   marginBlockStart: 0,
    //   marginBlockEnd: `${(Math.pow(ratio, 1) * Math.sqrt(rhythm)) % rhythm}rem`,
    //   fontWeight: 500,
    // },
    // h5: {
    //   fontSize: `${ratio}rem`,
    //   lineHeight: `${ratio * Math.sqrt(rhythm)}rem`,
    //   marginBlockStart: 0,
    //   marginBlockEnd: `${(ratio * Math.sqrt(rhythm)) % rhythm}rem`,
    //   fontWeight: 400,
    // },
    h6: {
      fontSize: `${ratio}rem`,
      lineHeight: `${ratio * rhythm}`,
      marginBlockStart: 0,
      marginBlockEnd: `${ratio * rhythm}rem`,
      fontWeight: 500,
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
        'p, ul, ol': {
          marginBlockStart: 0,
          marginBlockEnd: `${rhythm}rem`,
          lineHeight: `${rhythm}rem`,
        },
        'ul, ol': {
          paddingLeft: `${rhythm}rem`,
        },
        
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

initialTheme = responsiveFontSizes(initialTheme,
  {
    factor: 1.1,
    variants: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  })
const theme: Theme = makeGlobalsFromTheme(initialTheme, ['h1',  'h2', 'h3', 'h4', 'h5', 'h6']);

export default theme;