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


// Primary yellow #fac456
const initialTheme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(252, 184, 67, 1)',
      contrastText: '#FFFFFF',
      fade: 'rgba(252, 184, 67, 1)' // custom. With yellow main colour, this looks better without fade
    },
    secondary: {
      main: 'rgba(168, 0, 0, 1)',
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
      paper: 'rgba(240, 240, 240, 1)',
      articlePaper: 'rgba(240, 240, 240, 1)',
      default: '#FFFFFF'
    }
  },
  
  //       lineHeight: `${Math.round(Math.pow(ratio, 4)/ rhythm)}rem`,

  typography: {
    fontSize: 16,
    // using rhythm (1.5), but not ratio, i.e. ratio changes as font size gets bigger
    
    // breakpoints

    // sm: 600
    // md: 960
    // lg: 1280
    // xl: 1920

    h1: {
      fontWeight: 500,

      // mobile first
      // h2 setting
      fontSize: `${rhythm * 2}rem`,
      lineHeight: `${2.5 * rhythm}rem`,
      marginBlockStart: 0,
      paddingTop: `${rhythm * 1.5}rem`,
      marginBlockEnd: `${rhythm * 0.5}rem`,
      '@media screen and (min-width:600px)': {
        fontSize: `${2.7 * rhythm}rem`,
        lineHeight: `${3 * rhythm}rem`,
        marginBlockStart: 0,
        // reduced padding at top by 1 rhythm
        paddingTop: `${rhythm}rem`,
        marginBlockEnd: `${rhythm}rem`,
      },
      
    },
    h2: {
      // mobile first
      // h3 setting
      fontSize: `${(1.4 * rhythm)}rem`,
      lineHeight: `${(2 * rhythm)}rem`,
      marginBlockStart: 0,
      paddingTop: `${rhythm * 1.6}rem`,
      marginBlockEnd: `${rhythm * 0.4}rem`,
      '@media screen and (min-width:600px)': {
        fontSize: `${rhythm * 2}rem`,
        lineHeight: `${2.5 * rhythm}rem`,
        marginBlockStart: 0,
        paddingTop: `${rhythm * 1.5}rem`,
        marginBlockEnd: `${rhythm * 0.5}rem`,
      },
      
      fontWeight: 500,
    },
    h3: {
      // mobile first
      // h4 setting
      fontSize: `${0.95 * rhythm}rem`,
      lineHeight: `${(1.5 * rhythm)}rem`,
      marginBlockStart: 0,
      paddingTop: `${rhythm * 0.6}rem`,
      marginBlockEnd: `${rhythm * 0.4}rem`,
      '@media screen and (min-width:600px)': {
        fontSize: `${(1.4 * rhythm)}rem`,
        lineHeight: `${(2 * rhythm)}rem`,
        marginBlockStart: 0,
        paddingTop: `${rhythm * 1.6}rem`,
        marginBlockEnd: `${rhythm * 0.4}rem`,
      },
      fontWeight: 500,
    },
    h4: {
      fontSize: '1rem',
      lineHeight: `${rhythm}rem`,
      marginBlockStart: 0,
      paddingTop: `${rhythm * 0.7}rem`,
      marginBlockEnd: `${rhythm * 0.3}rem`,
      letterSpacing: '0.005rem',
      '@media screen and (min-width:600px)': {
        fontSize: `${0.95 * rhythm}rem`,
        lineHeight: `${(1.5 * rhythm)}rem`,
        marginBlockStart: 0,
        paddingTop: `${rhythm * 0.6}rem`,
        marginBlockEnd: `${rhythm * 0.4}rem`,
      },
      
      fontWeight: 500,
    },
    h5: {
      fontSize: '1rem',
      lineHeight: `${rhythm}rem`,
      marginBlockStart: 0,
      paddingTop: `${rhythm * 0.7}rem`,
      marginBlockEnd: `${rhythm * 0.3}rem`,
      letterSpacing: '0.005rem',
      fontWeight: 500,
    },

    
    h6: {
      fontSize: `${ratio}rem`,
      lineHeight: `${ratio * rhythm}rem`,
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
        // '@page': {
        //   marginTop: '0.5in',
        //   marginLeft: '0',
        //   marginRight: '0',
        //   marginBottom: '0.5in',
        //   fontSize: '0.7em',
        // },
        // '@media print': {
        //   noPrint: {
        //     display: 'none',
        //   },
        // },
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