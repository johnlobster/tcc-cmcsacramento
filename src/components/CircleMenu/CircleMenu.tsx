import React from 'react';
// import { Link } from 'react-router-dom';

import { Theme, Box, Button, Link as MLink} from '@material-ui/core';
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
const size = 6
; // will be in rem
const boxWidth = 8;
const boxHeight = 3;
interface XYData {
  top: string; // string so can be added to style attribute
  right: string;
}
// note that position: absolute doesn't work if the parent is static. So have
// to create a position:relative box with zero offset

const topBoxStyles = makeStyles(() =>
  createStyles({
    root: {
      

      position: 'absolute',
      right: `${size}rem`,
      top: `${size}rem`,
    },
    outerBox: {
      position: 'relative',
      width: `${2 * size}rem`,
      maxWidth: '30rem',
      height: `${2 * size}rem`,
      maxHeight: '30rem',
      margin: '1.5rem auto 1.5rem auto',
    },
    testLine: {
      width: `${boxWidth}rem`,
      height: `${size}rem`,
      borderStyle: 'solid',
      borderWidth: '0 0.5px 0 0.5px',
      color: 'black',
      position: 'absolute',
      transformOrigin: 'center top',
      left: `-${boxWidth/2}rem`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center'
      // transform: `rotate(45deg) translate(${size}rem, ${size}rem)`,
      // transformOrigin: `${size}rem ${size}rem`,
      
    },
    spanText: {
      transformOrigin: 'center bottom',
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
      borderStyle: 'solid',
      borderWidth: '0.5px',
      fontWeight: 'bold',
      fontSize: '1.2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0',
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

const tjtStyles = makeStyles(() =>
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
// if point is below 0y, subtract height/2, if above 0y, add height/2
// if point is left of x0, add width/2. If right of x0, subtract width/2
// top: ((size - (boxHeight / 2)) + (size * Math.sin(index * arc))).toString() + 'rem',
// right: ((size - (boxWidth / 2)) + (size * Math.cos(index * arc))).toString() + 'rem'
// ToDo only need 2 decimals. I think that there is a toString option or a Math.round option
const xy: XYData[] =  ((): XYData[] => {
  const arc: number = (2 * Math.PI) / pageData.length; // radians
  const output: XYData[] = [];
  pageData.forEach((value, index) => {
    const print: XYData = {
      top: ((size - (boxHeight / 2)) + ((size)* Math.sin(index * arc))).toFixed(2) + 'rem',
      right: ((size - (boxWidth / 2)) + ((size)* Math.cos(index * arc))).toFixed(2) + 'rem'
    }
    // console.log(`${index} top: ${print.top} right: ${print.right}`);
    // console.log(`  ${(index*arc)} radians sin  ${Math.sin(index * arc)}  cos ${Math.cos(index * arc)}`)
    output.push(print);
  });
  return output;
})()

//                 transformOrigin: `${size}rem ${size}rem`,

const CircleMenu: React.FunctionComponent = () => {
  const topBoxClasses = topBoxStyles(); 
  const linkButtonClasses = linkButtonStyles(); 
  const tjtClasses= tjtStyles();
  return (
    <div className={topBoxClasses.outerBox}>
      <Box className={topBoxClasses.root} aria-label="menu">
        <img src={Taijitu} alt="Yin yang symbol" className={tjtClasses.root}/>
        {pageData.map( (item, index) => {
          return (
            <span className={topBoxClasses.testLine} key={`${item.name}`} 
              style={{ 
                transform: `rotate(${index * (360 / pageData.length)}deg ) 
                            
                `}}
            >
              <span className={topBoxClasses.spanText} 
                style={{transform: `rotate(-${index * (360 / pageData.length)}deg )`}}
              >{item.menu}
              </span>
            </span>
          )
        })}
        {pageData.map((item, index) => {
          return (
            <Button 
              className={linkButtonClasses.root}
              style={{ top: xy[index].top, right: xy[index].right }}
              key={`${item.name}`}
            >
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