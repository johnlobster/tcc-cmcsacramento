// import printJS from 'print-js';
// import {useReactToPrint} from 'react-to-print'
import React from 'react';

import { Grid, Modal, Popper, Button, ButtonGroup, Paper } from '@material-ui/core';

import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import theme from "../../global/theme";

import { sanShouData, CompassDirectionEnum, compassName, SanShouSideEnum} from "../../data/san-shou"
import { processSimpleMarkdown, TxtArr} from "../../global/processSimpleMarkdown"

import VSeparator from "../../components/VSeparator/VSeparator"
import { SSL_OP_ALL } from 'constants';



const useStyles = makeStyles({
  name: {
    fontSize: '1.5em',
  },
  breakControl: {
    pageBreakBefore: 'avoid',
    breakBefore: 'avoid-page'
    
  },
  sideSpan: {
    fontWeight: 'bold',
    paddingRight: '0.4em',
  },
  popperRoot: {
    width: '100%',
    zIndex: 1000,
    backgroundColor: 'white',
    fontSize: '0.7em',

  },
  popperPage: {
    margin: '0 3rem 0 3rem',

  },
  popUp: {
    // Needs to be size of American letter 8.5x11 inches
    // so height will be 11/8 times width, multiply by 1.375
    width: '92vw',
    marginLeft: '4vw', // center
  },
  popUpPage: {
    height: '126.5vw',
    backgroundColor: 'white',
    fontSize: '0.25em',

  },
  modalRoot: {
    // overflow: 'scroll',
  },
  modalBody: {
    backgroundColor: 'white',
    // width: '59vw',
    // height: '80vw',
    // width: '100vw',
    // height: '135vw',
    width: '85%',
    // height: '11.5in',
    fontSize: '0.7em',
    marginLeft: '7%',

    
  },
  modalContent: {
    padding: '2.5rem',
  },
  
  myPopOverBase: {
    position: "fixed",
    left: '0',
    top: '0',
    zIndex: 1000,
    width: '100%',
    backgroundColor: 'white',

  },
  myPopOverPaper: {
    fontSize: '0.7em',
    margin: '0 3rem 0 3rem',
  },
})

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const selectButtonStyles = makeStyles({
  common: {
    margin: '0.5em',
    borderColor: `${theme.palette.secondary.main}`,
    borderWidth: '0.35em',
    borderRadius: '4px',
  },
  activeButton: {
    padding: '0.7em',
    borderStyle: 'solid',
  },
  inactiveButton: {
    borderStyle: 'hidden',
    padding: '1.05em',

  },
  
})

interface SelectButtonProps {
  onClick: React.MouseEventHandler<HTMLInputElement>;
  active: boolean;
}
const SelectButton: React.FunctionComponent<SelectButtonProps> = (props) => { 
  const styles = selectButtonStyles()
  return (
    <span className={styles.common + " " + (props.active ? (styles.activeButton) : (styles.inactiveButton))}>
    <Button
      onClick={props.onClick}
      variant="contained"
      component="span"
      color="secondary"
    >
      {props.children}

    </Button>
  </span>
)}

const undisplayElement: ( elementId: string) => void = (elementId) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.style.display = 'none'
  }
} 

const redisplayElement: (elementId: string) => void = (elementId) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.style.display = 'block'
  }
}

const SanShouList: React.FunctionComponent = (props) => {

  const ssStyles = useStyles()

  // const printableElementRef = React.useRef()
  // const handlePrint = () => {
  //   if (printableElementRef.current) {
  //     useReactToPrint({
  //       content: () => printableElementRef.current,
  //     })
  //   }
    
  // }
  // const handlePrint = 
  //     useReactToPrint({
  //       content: () => printableElementRef.current,
  //     })
    
  // const handlePrint = (event: React.MouseEvent<HTMLInputElement>) => {
  // }
  // control formatting of list of postures
  const [showText, updateShowText] = React.useState(false)
  type Side =  "both" | "A" | "B" 
  const [showSide, updateShowSide] = React.useState("both")
  const handleShowText = (event: React.MouseEvent<HTMLInputElement>) => {
    updateShowText(true);
  };
  const handleHideText = (event: React.MouseEvent<HTMLInputElement>) => {
    updateShowText(false);
  };
  const handleShowBoth = (event: React.MouseEvent<HTMLInputElement>) => {
    updateShowSide("both");
  };
  const handleShowA = (event: React.MouseEvent<HTMLInputElement>) => {
    updateShowSide("A");
  };
  const handleShowB = (event: React.MouseEvent<HTMLInputElement>) => {
    updateShowSide("B");
  };
  
  const listBoth = (
    <React.Fragment>
      {sanShouData.map((item, index, array) => {
        // console.log(`SS list index ${index} ${item.index} side ${item.side}`)
        return (
          <React.Fragment key={item.index}>

          { (item.side === SanShouSideEnum.A && (
            (showSide === "both") || (showSide === "A"))) &&
              (
                
              <Grid item key={item.index} xs={12} sm={6}>
                <Grid container xs={12} spacing={1} className={ssStyles.breakControl}>

                  <Grid item xs={1} className={ssStyles.name}>
                    {item.index}
                  </Grid>
                  <Grid item xs={9} className={ssStyles.name} >
                    {item.bobName}
                  </Grid>
                  <Grid item xs={2} className={ssStyles.name} >
                    {CompassDirectionEnum[item.direction]}
                  </Grid>
                  { showText && (
                    <Grid item xs={1}>
                      {/* An indent for the description */}
                    </Grid> )
                  }
                  { showText && (
                    <Grid item xs={9} >
                      <React.Fragment>
                        <span className={ssStyles.sideSpan}>{SanShouSideEnum[item.side]}:</span>
                        {processSimpleMarkdown(item.description).map((item) => {
                          return (
                            <React.Fragment>
                              {item.type === "Italic" && (
                                <React.Fragment>
                                  <i>{item.value}</i>
                                  <span> </span>
                                </React.Fragment>
                              )
                              }
                              {item.type === "Plain" && (
                                `${item.value} `
                              )
                              }
                            </React.Fragment>
                          )
                        })}
                      </React.Fragment>

                    </Grid>
                  )}
              
                </Grid>
              </Grid>

              )}
            { (item.side === SanShouSideEnum.B && (
              (showSide === "both") || (showSide === "B"))) &&
              (

                <Grid item key={item.index} xs={12} sm={6} className={ssStyles.breakControl}>
                  <Grid container xs={12}>

                    <Grid item xs={1} className={ssStyles.name}>
                      {item.index}
                    </Grid>
                    <Grid item xs={9} className={ssStyles.name} >
                      {item.bobName}
                    </Grid>
                    <Grid item xs={2} className={ssStyles.name} >
                      {CompassDirectionEnum[item.direction]}
                    </Grid>
                    {showText && (
                      <Grid item xs={1}>
                        {/* An indent for the description */}
                      </Grid>)
                    }
                    {showText && (
                      <Grid item xs={9} >
                        <React.Fragment>
                          <span className={ssStyles.sideSpan}>{SanShouSideEnum[item.side]}:</span>
                          {processSimpleMarkdown(item.description).map((item) => {
                            return (
                              <React.Fragment>
                                {item.type === "Italic" && (
                                  <React.Fragment>
                                    <i>{item.value}</i>
                                    <span> </span>
                                  </React.Fragment>
                                )
                                }
                                {item.type === "Plain" && (
                                  `${item.value} `
                                )
                                }
                              </React.Fragment>
                            )
                          })}
                        </React.Fragment>

                      </Grid>
                    )}

                  </Grid>

                </Grid>
              )}
          </React.Fragment>

        )
      })}
    </React.Fragment>

  )

  const ssTitle = (
    <React.Fragment>
      {showSide === "both" && (
        <h3>San Shou list of movements</h3>
      )}
      {showSide === "A" && (
        <h3>San Shou list of movements: A side only</h3>
      )}
      {showSide === "B" && (
        <h3>San Shou list of movements: B side only</h3>
      )}
    </React.Fragment>
  )
  const [popperAnchorEl, popperSetAnchorEl] = React.useState<null | HTMLElement>(null);
  const [popperOpen, updatePopperOpen] = React.useState(false);
  const scrollPosition = React.useRef([0,0]) // [x,y]

  const popperId = popperOpen ? 'simple-popper' : undefined;

  const openPopper = (event: React.MouseEvent<HTMLElement>) => {
    const windowOrigin = document.getElementById("originMarker")
    if (windowOrigin) {
      popperSetAnchorEl(windowOrigin)
      updatePopperOpen(true)
      // record current position, then scroll to top of page - beginning of popper
      scrollPosition.current = [event.pageX, event.pageY]
      window.scrollTo(0,0)
      // hide most of rest of document for printing
      undisplayElement("headerID")
      undisplayElement("footerID")
      undisplayElement("displayList")
      undisplayElement("advancedMainSectionID")
      
      // open print dialog after 2.5 seconds
      setTimeout( () => {
        window.print()
      }, 2500) 
    } else {
      console.log("SanShouList: error opening popper")
    }
  };
  const closePopper = (event: React.MouseEvent<HTMLElement>) => {
    
    popperSetAnchorEl(null)
    updatePopperOpen(false)
    // restore cursor to previous position
    window.scrollTo(scrollPosition.current[0], scrollPosition.current[1])
    // make rest of document visible again
    redisplayElement("headerID")
    redisplayElement("footerID")
    redisplayElement("displayList")
    redisplayElement("advancedMainSectionID")

  };


  return(
    <React.Fragment>
      <div className="noPrint">
        <h3>San Shou form</h3>
        <p>
          <em>San Shou</em> is an 88 posture two person form where each posture contains a counter and an attack
        </p>
        <p>This list of movements (postures) is an aid to memorizing the form</p>
      </div>
      
      <div className="noPrint">
        <VSeparator lines={2} />
        <ButtonGroup variant="contained">
          <SelectButton
            onClick={handleShowText}
            active={showText}
          >
            Show text
          </SelectButton>
          <SelectButton
            onClick={handleHideText}
            active={! showText}
          >
            Hide text
        </SelectButton>
        </ButtonGroup>
      </div>

      <div className="noPrint">
        <VSeparator lines={1} />
        <ButtonGroup variant="contained">
          <SelectButton
            onClick={handleShowBoth}
            active={showSide==="both"}
          >
            Show both sides
          </SelectButton>
          <SelectButton
            onClick={handleShowA}
            active={showSide === "A"}
          >
            Show side A only
          </SelectButton>
          <SelectButton
            onClick={handleShowB}
            active={showSide === "B"}
          >
            Show side B only
          </SelectButton>
        </ButtonGroup>
        <VSeparator lines={1} />

      </div>
      
      <div id="displayList">
        {ssTitle}
        <div className="printSSList">
          <Grid container spacing={1} id="sanShouListElement" >
            {listBoth}
          </Grid>

        </div>
      </div>
      <VSeparator lines={1} />

  
      
      {/* Button for opening the printed version */}
      <Button variant="contained" color="secondary" onClick={openPopper}>
        Printable version of list
      </Button>

      <Popper open={popperOpen} anchorEl={popperAnchorEl} placement={'top'} >
        <div className={ssStyles.popperRoot}>
          <div className="noPrint">
            <Button variant="contained" color="secondary" onClick={closePopper}>
              Close printable San Shou list
            </Button>
          </div>
          
          <div id="sanShouPrintablePage" className={ssStyles.popperPage}>
            {ssTitle}
            <Grid container spacing={1}>
              {listBoth}
            </Grid>
          </div>

          <div className="noPrint">
            <Button variant="contained" color="secondary" onClick={closePopper}>
              Close printable San Shou list
            </Button>
          </div>
        </div>
      </Popper>

    </React.Fragment>
  );
}

export default SanShouList;
