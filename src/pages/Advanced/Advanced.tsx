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
              <li>Relaxation, <em>Sung</em></li>
              <li>Full curriculum</li>
                <ul>
                  <li>Solo form with applications</li>
                  <li><em>Tui shou</em> (sensing hands), partner work with fixed foot position</li>
                  <li>Moving step <em>Tui shou</em> </li>
                  <li><em>Da lu</em> - short two person form</li>
                  <li><em>San shou</em> - advanced two person form with applications</li>
                  <li><em>San shou</em> - free form partner work</li>
                </ul>
              <li>
                Tai chi classics
              </li>
              <li>
                Sword form, <em>Jian</em>
              </li>
            </ul>
          </Grid>
        </Grid>
      </ResponsiveContainer>
      
    </div>
  );
}

export default Advanced;