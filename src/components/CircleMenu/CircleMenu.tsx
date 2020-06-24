import React from 'react';
// import { Link } from 'react-router-dom';

import { Box, Theme, Button,Link as MLink} from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

// would be really cool to make this responsive ....
// ToDo how about using em instead of rem and change the font-size in the parent
// ToDo should allow responsive sizes. Would have to use calc, which could be ok, but need to have a fallback

// ToDo a11y - this is a menu, needs to be described as a menu

import { data as pageData}  from "../../data/page-info"
import Taijitu from "../../images/Taijitu.svg";

// Making this component generic would require
// - pageData as a prop
// - passing some styling in
// - box size and radial distance as props
// - center image as a prop

// sets up sizing for the menu items. Each item is in a box boxWidth by boxHeight
// and size rem from the center
const size:number = 10; // will be in rem
const boxWidth: number = 8;
const boxHeight: number = 4;

// note that position: absolute doesn't work if the parent is static. So have
// to create a position:relative box with zero offset

const topBoxStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: `${2*size}rem`,
      maxWidth: '30rem',
      height: `${2*size}rem`,
      maxHeight: '30rem',
      margin: '0 auto 1.5rem auto',

      position: 'relative',
    }
  })
)

const linkButtonStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'absolute',
      width: `${boxWidth}rem`,
      height: `${boxHeight}rem`,
      color: theme.palette.text.primaryColor,
      fontWeight: 'bold',
      fontSize: '1.2rem',
      '& a': {
        color: theme.palette.text.primaryColor,
        fontWeight: 'bold',
        fontSize: '1.2rem',
      },
      '& a:visited': {
          color: theme.palette.text.primaryLinkVisited,
      },  
      '&:hover': {
        boxShadow: theme.shadows[6]
      },
          
      
      
    },
    
  })
)

const tjtStyles = makeStyles((theme:Theme) =>
  createStyles({
    root: {
      height: '4rem',
      width: '4rem',
      position: 'absolute',
      top: `${size-2}rem`,
      right: `${size-2}rem`,
      margin: '0 auto'
    }
  })
)
const xy =  (() => {
  const arc: number = (2 * Math.PI) / pageData.length; // radians
  let output: any[] = [];
  pageData.forEach((value, index) => {
    const print = {
      top: ((size-(boxHeight/2)) + (size * Math.sin(index * arc))).toString() + 'rem',
      right: ((size - (boxWidth / 2)) + (size * Math.cos(index * arc))).toString() + 'rem'
    }
    // console.log(`${index} top: ${print.top} right: ${print.right}`);
    output.push(print);
  });
  return output;
})()

const CircleMenu: React.FunctionComponent = (props) => {
  const topBoxClasses = topBoxStyles(); 
  const linkButtonClasses = linkButtonStyles(); 
  const tjtClasses= tjtStyles();
  return (
    <div>
      <Box className={topBoxClasses.root} aria-label="menu">
        <img src={Taijitu} alt="Yin yang symbol" className={tjtClasses.root}/>

          {pageData.map((item, index) => {
            return (
              <Button className={linkButtonClasses.root}
                style={{ top: xy[index].top, right: xy[index].right }}
                key={`${item.name}${index}`}>
                <MLink href={item.name} >{item.menu}</MLink>
              </Button>
              
            )
            })
          }
        
          
        
      </Box>
    </div>
  );
}

export default CircleMenu;