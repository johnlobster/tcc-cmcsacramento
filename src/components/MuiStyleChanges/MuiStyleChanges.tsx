
import { withStyles} from '@material-ui/core/styles'

import theme from "../../global/theme";

// This component overwrites Mui classes with modified styles
// and defines some global classes. Can't really put global classes in 'theme'
// if they refer to values in 'theme'



const MuiStyleChanges = withStyles({
  // @global is handled by jss-plugin-global.
  '@global': {
    // You should target [class*="MuiButton-root"] instead if you nest themes.

    // Class to allow <Grid container className="responsiveContainer"> to give a
    // responsive backdrop
    // Didn't work otherwise because mui drops tags
    '.responsiveContainer': {
      [theme.breakpoints.up('xs')]: {
        width: '100%',
        padding: '1rem 0.1rem 1rem 0.1rem',

      },
      [theme.breakpoints.between('sm', 'md')]: {
        width: '85%',
        padding: '1rem 0.3rem 1rem 0.3rem',

      },
      [theme.breakpoints.up('md')]: {
        width: '75%',
        padding: '1rem 0.5rem 1rem 0.5rem',

      },
      maxWidth: `${theme.breakpoints.values.md}px`,
      // margin: '1rem auto 2rem auto',
      marginLeft: 'auto',
      marginRight: 'auto',

    },
    // two changes for cards
    // 1. height: 100% makes each card the same size in a row
    // 2. display flex column makes the card content behave when the card grows because of the height change
    '.MuiCard-root': {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }
  },
})(() => null);

export default MuiStyleChanges;

// const MuiStyleChanges: React.FunctionComponent = () => {
  
//   const classes=styleChanges();

//   return (
//     <div className={classes.changes}></div>
//   )
// }

// export default MuiStyleChanges;
  
//   // … <GlobalCss />

//   // @global is handled by jss-plugin-global. 
//   '@global': {
//     // You should target [class*="MuiButton-root"] instead if you nest themes. 
//     '.MuiButton-root': {
//       fontSize: '1rem',
//     },
//   },
// })(() => null); 