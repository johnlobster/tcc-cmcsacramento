import React from 'react';

import {AppBar, Toolbar, IconButton, Box} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

import MyStyles from './Header.module.scss';

interface MoreProps {
  desktop: boolean
}


const Header:React.FunctionComponent<MoreProps> = (props) => {

  // const buttonClasses = buttonStyles();
  // const titleClasses = titleStyles();
  // classes={{root: buttonClasses.root}}
  return(
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={MyStyles.menuButton} aria-label="menu">
            <MenuIcon fontSize="large"   />
          </IconButton>
          <Box className={MyStyles.titleBox}>
            <Box className={MyStyles.title}>
              Tai Chi
            </Box >
            { props.desktop &&
              <Box className={MyStyles.info}>
                <div >Jinbao(Golden Treasure) Tai Chi</div>
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