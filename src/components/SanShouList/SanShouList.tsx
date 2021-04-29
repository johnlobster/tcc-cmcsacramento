import React from 'react';

import { Grid, Popper, Button, ButtonGroup, Paper } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
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

  }
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

  const popperOpen = Boolean(popperAnchorEl);
  const popperId = popperOpen ? 'simple-popper' : undefined;

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
      

      <Grid container spacing={1}>
        {listBoth}
      </Grid>
  
      <VSeparator lines={1} />
      {/* Button for opening the printed version */}
      <Button variant="contained" color="secondary" onClick={handlePopperClick}>
        Printable version
      </Button>

      <Popper id={popperId} open={popperOpen} anchorEl={popperAnchorEl}>
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
      </Popper>

    </React.Fragment>
  );
}

export default SanShouList;

//               {/* {item.side === SanShouSideEnum.A && ( */}
