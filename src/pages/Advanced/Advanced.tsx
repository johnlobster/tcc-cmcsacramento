import React from 'react';

import { Grid } from '@material-ui/core';

// import VSeparator from '../../components/VSeparator/VSeparator'
import ResponsiveContainer from '../../components/ResponsiveContainer/ResponsiveContainer'

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const Advanced: React.FunctionComponent = (props) => {
  return(
    <div>
      <ResponsiveContainer>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1>Advanced</h1>

            <p>As an advanced student, you will work on</p>
            <ul>
              <li>Relaxation,<em>Sung</em></li>
              <li>Full curriculum</li>
                <ul>
                  <li>Solo form</li>
                  <li>Tuishu (sensing hands), partner work with fixed foot position</li>
                  <li>Moving step Tuishu</li>
                  <li>Da lu - short two person form</li>
                  <li>San shou - advanced two person form with applications</li>
                </ul>
              <li>
                Tai chi classics
              </li>
            </ul>
          </Grid>
        </Grid>
      </ResponsiveContainer>
      
    </div>
  );
}

export default Advanced;