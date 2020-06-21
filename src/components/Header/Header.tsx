import React from 'react';
import { Link } from 'react-router-dom';

import {AppBar, Toolbar, IconButton, Box, Menu, MenuItem, Theme} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

import MyStyles from './Header.module.scss';

import { makeStyles, createStyles } from '@material-ui/core/styles';

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
    },
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
    },
  }),
);
interface MoreProps {
  desktop: boolean
}

// <MenuItem onClick={menuClose}>Profile</MenuItem>
//  <MenuItem onClick={menuClose}>My account</MenuItem>
//  <MenuItem onClick={menuClose}>Logout</MenuItem>

const Header:React.FunctionComponent<MoreProps> = (props) => {

  // const buttonClasses = buttonStyles();
  // const titleClasses = titleStyles();
  // classes={{root: buttonClasses.root}}
  // className={MyStyles.menuButton}

  // const fake = MyStyles.menuButton;

  const infoClasses = infoStyles();
  const titleClasses = titleStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const menuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const menuClose = () => {
    setAnchorEl(null);
  };
  return(
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" 
            className={MyStyles.menuButton} 
            onClick={menuOpen}
            aria-label="menu">
            <MenuIcon fontSize="large"   />
          </IconButton>

          <Menu
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
            <Box className={MyStyles.menu}>
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

          <Box className={MyStyles.titleBox}>
            <Box className={titleClasses.root + " " + MyStyles.title}>
              Tai Chi
            </Box >
            { props.desktop &&
              <Box className={infoClasses.root + " " + MyStyles.info}>
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