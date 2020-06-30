import React from "react"
import CSSTransition from 'react-transition-group/CSSTransition';
import { makeStyles } from '@material-ui/core/styles';

import theme from "../../global/theme"

// SlideArticle
// basic animation similar to mui Slide, but uses display: none/block at
// for initial visibility and after exiting page
// inherits all attributes of CSSTransition and Transition

const transitionStyles = makeStyles({
  initialNotDisplayed: {
    display: 'none',
  },
  initialDisplayed: {
    display: 'block',
  },
  enter: {
    transform: 'translateX(-100vw)',
    transition: 'none',
    display: 'block',
  },
  enterActive: {
    transform: 'translateX(0px)',
    transition: `transform ${theme.transitions.duration.enteringScreen}ms ${theme.transitions.easing.easeIn}`,
    display: 'block',
  },
  enterDone: {
    transform: 'translateX(0)',
    transition: 'none',
    display: 'block',
  },
  exit: {
    transform: 'translateX(0)',
    transition: 'none',
    display: 'block',
  },
  exitActive: {
    transform: 'translateX(-100vw)',
    transition: `transform ${theme.transitions.duration.leavingScreen}ms ${theme.transitions.easing.easeIn}`,
    display: 'block',
  },
  exitDone: {
    transform: 'translateX(-100vw)',
    transition: 'none',
    display: 'none',
  },
})

interface MoreProps {
  in: boolean;
  id: string;
  className?: string;
}

const SlideArticle: React.FunctionComponent<MoreProps> = (props) => {

  const tClasses = transitionStyles();

  // const passClassName: () => string = () => {
  //   if (initialIn) {
  //     return 
  //   }
  // } 

  const initialIn = React.useRef( props.in)
  // const initialClass = React.useRef(props.id ? tClasses.initialDisplayed : tClasses.initialNotDisplayed)
  // React.useEffect( () => { // runs only once, so captures initial props values but runs after render
  //   console.log(`SlideArticle mounts id ${props.id} in ${props.in} Initial in ${initialIn.current}`)
  //   // if (props.in) {
  //   //   initialClass.current = tClasses.initialDisplayed
  //   // } else {
  //   //   initialClass.current = tClasses.initialNotDisplayed
      
  //   // } 
    
  // })

  // React.useEffect(() => {
  //   console.log(`SlideArticle id ${props.id} in ${props.in} Initial in ${initialIn.current}`)
  // }, [props.in, props.id, props.className])

  return (
    <CSSTransition 
      {...props} 
      className={initialIn.current ? tClasses.initialDisplayed : tClasses.initialNotDisplayed}
      id={props.id + "hackMe"} 
      in={props.in} 
      timeout={theme.transitions.duration.enteringScreen}
      classNames={{ ...tClasses }}
    />
  )
}

export default SlideArticle
