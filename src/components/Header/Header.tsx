import React from 'react';
import { Link } from 'react-router-dom';

import {AppBar, Toolbar, IconButton, Box, Menu, MenuItem, Theme} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

import { makeStyles, createStyles } from '@material-ui/core/styles';

const headerStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconButton: {
      color: 'white'
    },
    menu: {
      backgroundColor: 'yellow',
      '& a': {
      textDecoration: 'none',
      color: 'black'
      }
    },
    titleBox: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'center'
    }
  })
);

const infoStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
      [theme.breakpoints.between('xs','sm')]: {
        fontSize: '0.75rem',
      },
      [theme.breakpoints.between('sm','lg')]: {
        fontSize: '1.5rem',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '2.5rem',
      },
      fontWeight: 'bold',
      letterSpacing: '0.15rem',
      padding: '0 0.75rem 0.5rem 0.75rem'
    },
    appBar: {
      backgroundColor: theme.palette.primary.fade
    }
  }),
);

const titleStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '3rem',
      },
      [theme.breakpoints.between('sm', 'lg')]: {
        fontSize: '5rem',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '7rem',
      },
      fontFamily: 'RoofRunnersActive, serif',
      letterSpacing: '0.4rem',
      padding: '0.5rem 0.75rem 0 0.75rem'

    },
  }),
);
interface MoreProps {
  desktop: boolean
}

const Header:React.FunctionComponent<MoreProps> = (props) => {

  // const buttonClasses = buttonStyles();
  // const titleClasses = titleStyles();
  // classes={{root: buttonClasses.root}}
  // className={MyStyles.menuButton}

  // const fake = MyStyles.menuButton;

  const infoClasses = infoStyles();
  const titleClasses = titleStyles();
  const headerClasses = headerStyles();


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const menuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const menuClose = () => {
    setAnchorEl(null);
  };

  //   
  //  + " "  
  return(
    <div >
      <AppBar position="static" className={infoClasses.appBar}>
        <Toolbar>
          <IconButton edge="start" 
            className={headerClasses.iconButton}
            onClick={menuOpen}
            aria-label="menu">
            <MenuIcon fontSize="large"   />
          </IconButton>

          <Menu className={headerClasses.menu}
            id="simple-menu"
            color="secondary"
            anchorEl={anchorEl}
            keepMounted
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorEl)}
            onClose={menuClose}
          >
            <Box >
              <MenuItem onClick={menuClose}>
              <Link to="/Home" >
                Home
              </Link>
              </MenuItem>
              <MenuItem onClick={menuClose}>
                <Link to="/Beginners">
                  Beginners
                  </Link>
              </MenuItem>
            </Box>
          </Menu>

          <Box className={headerClasses.titleBox}>
            <Box className={titleClasses.root}>
              Tai Chi
            </Box >
            { props.desktop &&
              <Box className={infoClasses.root}>
                <div >Jinbao(Golden Treasure) Tai Chi Chuan (taijiquan) </div>
                <div >
                  Chen man ching Tai chi Sacramento
                </div>
              </Box>
            }
                        
          </Box>
          
        </Toolbar>
      </AppBar>
    </div>
    
  );
}

export default Header;