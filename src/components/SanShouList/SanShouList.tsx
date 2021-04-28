import React from 'react';

import { Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import { sanShouData, CompassDirectionEnum, compassName, SanShouSideEnum} from "../../data/san-shou"
import { processSimpleMarkdown, TxtArr} from "../../global/processSimpleMarkdown"


const useStyles = makeStyles({
  name: {
    fontSize: '1.5em',
  },
  sideSpan: {
    fontWeight: 'bold',
    paddingRight: '0.4em',
  }
})

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }


const SanShouList: React.FunctionComponent = (props) => {

  const ssStyles = useStyles()

  return(
    <React.Fragment>
      <h3>San Shou form list of postures</h3>
      <Grid container spacing={1}>
        {sanShouData.map((item, index, array) => {
          return (
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
                <Grid item xs={1}>
                  {/* An indent for the description */}
                </Grid>
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
              </Grid>



            </Grid>
          )
        })}
      </Grid>
  
    </React.Fragment>
  );
}

export default SanShouList;

//               {/* {item.side === SanShouSideEnum.A && ( */}
