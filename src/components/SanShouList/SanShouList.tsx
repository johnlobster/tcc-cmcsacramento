// import printJS from 'print-js';
// import {useReactToPrint} from 'react-to-print'
import React from 'react';

import { Grid, Modal, Popper, Button, ButtonGroup, Paper } from '@material-ui/core';

import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import theme from "../../global/theme";

import { sanShouData, CompassDirectionEnum, compassName, SanShouSideEnum} from "../../data/san-shou"
import { processSimpleMarkdown, TxtArr} from "../../global/processSimpleMarkdown"

import VSeparator from "../../components/VSeparator/VSeparator"



const useStyles = makeStyles({
  name: {
    fontSize: '1.5em',
  },
  sideSpan: {
    fontWeight: 'bold',
    paddingRight: '0.4em',
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
  modalBody: {
    backgroundColor: 'white',
    // width: '59vw',
    // height: '80vw',
    // width: '100vw',
    // height: '135vw',
    width: '8.5in',
    height: '11.5in',
    fontSize: '0.7em'
    
  },
  modalContent: {
    padding: '5rem',
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
    
  const handlePrint = (event: React.MouseEvent<HTMLInputElement>) => {
  }
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
          <React.Fragment>

          { (item.side === SanShouSideEnum.A && (
            (showSide === "both") || (showSide === "A"))) &&
              (
                
              <Grid item key={item.index} xs={12} sm={6}>
                <Grid container xs={12} spacing={1}>

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

                <Grid item key={item.index} xs={12} sm={6}>
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

  const [popperAnchorEl, popperSetAnchorEl] = React.useState<null | HTMLElement>(null);

  const handlePopperClick = (event: React.MouseEvent<HTMLElement>) => {
    popperSetAnchorEl(popperAnchorEl ? null : event.currentTarget);
  };

  // const handlePopperClick = (event: React.MouseEvent<HTMLElement>) => {
  //   const reactRootElement = document.getElementById("root")

  //   popperSetAnchorEl(popperAnchorEl ? null : event.currentTarget);
  // };
  const popperOpen = Boolean(popperAnchorEl);
  const popperId = popperOpen ? 'simple-popper' : undefined;

  const [modalOpen, updateModalOpen] = React.useState(false)
  
  const handleModalClick = (event: React.MouseEvent<HTMLElement>) => {
    const reactRootElement = document.getElementById("root")
    if (reactRootElement) {
      // reactRootElement.style.visibility = 'hidden'
      reactRootElement.style.display = 'none'

    }
    setTimeout( () => {
      window.print()
    }, 4000)
    updateModalOpen(true);
  };
  const handleModalClose = (event: React.MouseEvent<HTMLElement>) => {
    updateModalOpen(false);
    const reactRootElement = document.getElementById("root")
    if (reactRootElement) {
      // reactRootElement.style.visibility = 'visible'
      reactRootElement.style.display = 'block'

    }
  };
  const printSanShouList = (event: React.MouseEvent<HTMLElement>) => {
    console.log("Print me")

    // const el = document.getElementById('sanShouListElement')
    // if (el) {
    //   d.print(el)
    // }
    // printJS('sanShouListElement','html')
  }

  return(
    <React.Fragment>
      <h3>San Shou form list of postures</h3>
      
      <div>
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
      <VSeparator lines={1} />

      <div>
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
      </div>
      
      <div className="printSSList">
        <Grid container spacing={1} id="sanShouListElement" >
          {listBoth}
        </Grid>
      </div>
      
  
      <VSeparator lines={1} />
      <Button variant="contained" color="secondary" onClick={printSanShouList}>
        Send list to printer
      </Button>

      <Button variant="contained" color="secondary" onClick={handleModalClick}>
        Printable version in a Modal
      </Button>

      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={ssStyles.modalBody}>
          <div className={ssStyles.modalContent}>
            <h3>A list of moves</h3>
            <Grid container spacing={1} >
              {listBoth}
            </Grid>
          </div>
          
        </div>
      </Modal>
      {/* Button for opening the printed version */}
      {/* <Button variant="contained" color="secondary" onClick={handlePopperClick}>
        Printable version
      </Button>

      <Popper id={popperId} open={popperOpen} anchorEl={popperAnchorEl} placement={'top-start'}>
        <Paper elevation={2} variant="outlined" className={ssStyles.popUp}>
          <Button variant="contained" color="secondary" onClick={handlePopperClick}>
            Close printable San Shou list
          </Button>

          <div id="sanShouPrintablePage" className={ssStyles.popUpPage}>
            <Grid container spacing={1}>
              {listBoth}
            </Grid>
          </div>

          <Button variant="contained" color="secondary" onClick={handlePopperClick}>
            Close printable San Shou list
          </Button>
        </Paper>
      </Popper> */}

    </React.Fragment>
  );
}

export default SanShouList;

//               {/* {item.side === SanShouSideEnum.A && ( */}

// CSS reset copied over for @media print
/*
<style>
  @media print {

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line - height: 1;
}
ol, ul {
    list - style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
	content: none;
}
table {
    border - collapse: collapse;
	border-spacing: 0;
}
      }
    </style>
    */