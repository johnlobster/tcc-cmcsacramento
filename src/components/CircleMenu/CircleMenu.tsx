import React from 'react';
import { Link } from 'react-router-dom';

import { Theme, Box, Button } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

// would be really cool to make this responsive ....
// ToDo how about using em instead of rem and change the font-size in the parent
// ToDo should allow responsive sizes. Would have to use calc, which could be ok, but need to have a fallback

// ToDo a11y - this is a menu, needs to be described as a menu

import { allPages } from "../../data/page-info"
import Taijitu from "../../images/Taijitu.svg";

// Making this component generic would require
// - pageData as a prop
// - passing some styling in
// - box size and radial distance as props
// - center image as a prop

// sets up sizing for the menu items. Each item is in a box boxWidth by boxHeight
// and size rem from the center
const size = 8; // will be in rem
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
      width: `${2 * size}rem`,
      maxWidth: '30rem',
      height: `${2 * size}rem`,
      maxHeight: '30rem',
      margin: '1.5rem auto 1.5rem auto',

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
      padding: '0.375rem 0.5rem',
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
      top: `${size - 2}rem`,
      right: `${size - 2}rem`,
      margin: '0 auto'
    }
  })
)



const CircleMenu: React.FunctionComponent = () => {
  const topBoxClasses = topBoxStyles();
  const linkButtonClasses = linkButtonStyles();
  const tjtClasses = tjtStyles();

  // have to account for button padding,  adding to box height and width 
  const xy: XYData[] = ((): XYData[] => {
    const arc: number = (2 * Math.PI) / allPages.length; // radians
    const output: XYData[] = [];
    allPages.forEach((value, index) => {
      const print: XYData = {
        top: (size - (boxHeight / 2) + (size * Math.sin(index * arc))).toFixed(2) + 'rem',
        right: (size - (boxWidth / 2) + (size * Math.cos(index * arc))).toFixed(2) + 'rem'
      }
      // console.log(`${index} top: ${print.top} right: ${print.right}`);
      // console.log(`  ${(index * arc)} radians sin  ${Math.sin(index * arc)}  cos ${Math.cos(index * arc)}`)
      output.push(print);
    });
    return output;
  })()
  
  return (
    <div>
      <Box className={topBoxClasses.root} aria-label="menu">
        <img src={Taijitu} alt="Yin yang symbol" className={tjtClasses.root} />

        {allPages.map((item, index) => {
          return (
            <Button
              className={linkButtonClasses.root}
              style={{ top: xy[index].top, right: xy[index].right }}
              key={`${item.name}`}
            >
              <Link to={item.name} >{item.menu}</Link>
            </Button>

          )
        })
        }

      </Box>
    </div>
  );
}

export default CircleMenu;