import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
  palette,
  PaletteProps,
  spacing,
  SpacingProps,
  typography,
  TypographyProps,
} from '@material-ui/system';

import { data as pageData}  from "../../data/page-info"
import Taijitu from "../../images/Taijitu.svg";

const topBoxStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '20rem',
      maxWidth: '30rem',
      height: '20rem',
      maxHeight: '30rem',
      marginLeft: '5rem',
      marginBottom: '5rem',

      position: 'relative',

      color: 'darkgreen',
      borderStyle: "solid",
      borderWidth: 4,
      borderColor: 'lightgrey'
    }
  })
)

const linkBoxStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'absolute',
      width: '6rem',
      height: '1.5rem',
      backgroundColor: 'greenyellow',
      textAlign: 'center'
    }
  })
)

const tjtStyles = makeStyles((theme:Theme) =>
  createStyles({
    root: {
      height: '4rem',
      width: '4rem',
      position: 'absolute',
      top: '8rem',
      right: '8rem'
    }
  })
)
const xy =  (() => {
  const arc: number = (2 * Math.PI) / pageData.length; // radians
  let output: any[] = [];
  pageData.forEach((value, index) => {
    const print = {
      top: (9.25 + (10 * Math.sin(index * arc))).toString() + 'rem',
      right: (7 + (10 * Math.cos(index * arc))).toString() + 'rem'
    }
    console.log(`${index} top: ${print.top} right: ${print.right}`);
    output.push(print);
  });
  return output;
})()


const CircleMenu: React.FunctionComponent = (props) => {
  const topBoxClasses = topBoxStyles(); 
  const linkBoxClasses = linkBoxStyles(); 
  const tjtClasses= tjtStyles();
  return (
    <div>
      <Box className={topBoxClasses.root} >
        <img src={Taijitu} alt="Yin yang symbol" className={tjtClasses.root}/>

          {pageData.map((item, index) => {
            return (
              <span className={linkBoxClasses.root}
                style={{ top: xy[index].top, right: xy[index].right }}
                key={`${item.name}${index}`}>
                <Link to={item.name}>{item.menu}</Link>
              </span>
            )
            })
          }
        
          
        
      </Box>
    </div>
  );
}

export default CircleMenu;