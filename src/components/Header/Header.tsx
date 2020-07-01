import React from 'react';
import {Link as RouterLink} from 'react-router-dom'
import {AppBar, Toolbar, IconButton, Box, Menu, MenuItem, MenuList, Theme, Link, Typography} 
  from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import {data} from "../../data/page-info";

// ToDo - use media hook to disable some of the title
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
      alignItems: 'center',
    },
    routerLink: {
      textDecoration: 'none',
    },
    info: {
      [theme.breakpoints.up('xs')]: {
        fontSize: '0.5rem',
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
    thirdRow: {
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
      display: 'none',
    },
    appBar: {
      backgroundColor: theme.palette.primary.fade
    },
    title: {
      [theme.breakpoints.up('xs')]: {
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
      padding: '0.5rem 0.75rem 0 0.75rem',
      color: theme.palette.primary.contrastText,
      

    },
  })
);

const paperStyles= makeStyles(createStyles(
  {
    root: {
      backgroundColor: "green"
    }
  }
))

const listStyles = makeStyles(createStyles({
  list2: {
    outline: 'none',
  }
}))


// interface MoreProps {
//   desktop: boolean
// }

const Header:React.FunctionComponent = (props) => {

  const headerClasses = headerStyles();
  const paperClasses = paperStyles();
  const listClasses = listStyles();
  
  const [menuOrigin, changeMenuOrigin] = React.useState({ x: 0, y: 0})
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const iconClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if( anchorEl) {
      menuClose();
    } else {
      setAnchorEl(event.currentTarget);
      let rect = event.currentTarget.getBoundingClientRect() as DOMRect;
      // this returns the box around the hamburger menu (good thing because increases touch target)
      // offset menu from origin
      changeMenuOrigin({ x: rect.x + 15, y: rect.y + rect.height -15});
    }
    
  };

  const menuClose = () => {
    setAnchorEl(null);
  };

  // anchorEl={anchorEl}
  return(
    <div >
      <AppBar position="static" className={headerClasses.appBar}>
        <Toolbar>
          <IconButton 
            color= 'inherit'
            
            edge="start" 
            // className={headerClasses.iconButton}
            onClick={iconClick}
            aria-label="menu"
          >
            <MenuIcon fontSize="large"   />
          </IconButton>

          <Menu 
            id="simple-menu"
            color="secondary"
            variant="menu"
            keepMounted
            open={anchorEl? true : false}
            onClose={menuClose}
            anchorReference="anchorPosition"
            anchorPosition={
                { top: menuOrigin.y, left: menuOrigin.x}
            }
            
          >
            
            <MenuList className={listClasses.list2}>
              <MenuItem onClick={menuClose}>
                <Typography color="primary">
                  Close Menu
                </Typography>
              </MenuItem>
              {data.map((item, index) => {
                return (
                  <MenuItem onClick={menuClose} key={item.name}>
                    <Link href={item.name} >
                      {item.menu}
                    </Link>
                  </MenuItem>
                )
              })}
              
            </MenuList>
          </Menu>

          <Box className={headerClasses.titleBox}>
            <RouterLink to="/Home" className={headerClasses.routerLink}>
              <div className={headerClasses.title}>
                Tai Chi
              </div >
            </RouterLink>

            <Box className={headerClasses.info}>
              <div >Jinbao(Golden Treasure) Tai Chi Chuan</div>
              <div className={headerClasses.thirdRow}>
                Sacramento Cheng Man-ching Tai Chi Group
              </div>
            </Box>
          
                        
          </Box>
          
        </Toolbar>
      </AppBar>
    </div>
    
  );
}

export default Header;