import React from 'react';

import { Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import { sanShouData, CompassDirectionEnum, compassName, SanShouSideEnum} from "../../data/san-shou"
import { processSimpleMarkdown, TxtArr} from "../../global/processSimpleMarkdown"


const useStyles = makeStyles({
  name: {
    fontSize: '1.5em',
  },
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
      {sanShouData.map((item) => {
        return (
          <Grid container key={item.index}>
            {item.side === SanShouSideEnum.A && (
              <React.Fragment>
                <Grid container>
                  <Grid item xs={1} className={ssStyles.name}>
                    {item.index}
                  </Grid>
                  <Grid item xs={8} className={ssStyles.name} >
                    {item.bobName}
                  </Grid>
                  <Grid item xs={1} className={ssStyles.name} >
                    {CompassDirectionEnum[item.direction]}
                  </Grid>
                  <Grid item xs={1}>
                    {SanShouSideEnum[item.side]}
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={2}>      
                    {/* An indent for the description */}
                  </Grid>
                  <Grid item xs={8}>
                    {/* {processSimpleMarkdown(item.description)} */}
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
                  </Grid>
                </Grid>

              </React.Fragment>
            
              
            
            )
            }
            
            
          </Grid>
          )
      })
}   
    </React.Fragment>
  );
}

export default SanShouList;