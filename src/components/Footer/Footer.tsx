import React from 'react';

import { Theme } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles';

import tjt from "../../images/Taijitu.svg";
// add more props 
// add <Footer-moreProps> to type
// interface Footer-moreProps {
// }

const footerStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.fade
    },
    copyBox: {
      display: 'flex',
      justifyContent: 'center',
    },
    copy: {
      fontSize: '0.8rem',
      margin: '0 auto',
      padding: '0.5rem 0 1rem 0'
    },
    contentBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    disclaimer: {
      padding: '1rem 7vw 0 0',
    },
    tjt: {
      height: '5rem',
      width: 'auto',
      padding: '1rem 0 1rem 7vw',
    }
  })
)

const Footer: React.FunctionComponent = (props) => {
  const classes = footerStyles();
  return(
    <div className={classes.root}>
      <div className={classes.contentBox}>
        <img src={tjt} alt="Yin Yang" className={classes.tjt} />
        <span className={classes.disclaimer}>This website collects no data</span>
      </div>
      <div className={classes.copyBox}>
        <span className={classes.copy}><em>© 2020 Jinbao Tai Chi Chuan </em></span>
      </div>
    </div>
    
  );
}

export default Footer;