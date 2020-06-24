import React from 'react';

import {AppBar, Toolbar, IconButton, Box, Menu, MenuItem, MenuList, Theme, Link} 
  from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import {data} from "../../data/page-info";

const headerStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconButton: {
      color: theme.palette.primary.contrastText
    },
    menu: {
      '& a': {
      textDecoration: 'none',
      color: theme.palette.text.primaryColor
      }
    },
    titleBox: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'center'
    },
    info: {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '0.75rem',
      },
      [theme.breakpoints.between('sm', 'lg')]: {
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
    },
    title: {
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
  })
);


interface MoreProps {
  desktop: boolean
}

const Header:React.FunctionComponent<MoreProps> = (props) => {

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
      <AppBar position="static" className={headerClasses.appBar}>
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
            variant="menu"
            anchorEl={anchorEl}
            keepMounted
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={menuClose}
          >
            <Box>
              Menu items
            </Box>
            <MenuList>
              
              {data.map((item, index) => {
                return (
                  <MenuItem onClick={menuClose}>
                    <Link href={item.name} >
                      {item.menu}
                    </Link>
                  </MenuItem>
                )
              })}
              
            </MenuList>
          </Menu>

          <Box className={headerClasses.titleBox}>
            <Box className={headerClasses.title}>
              Tai Chi
            </Box >
            { props.desktop &&
              <Box className={headerClasses.info}>
                <div >Jinbao(Golden Treasure) Tai Chi Chuan</div>
                <div >
                  Sacramento Cheng Man-ching Tai Chi Group
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