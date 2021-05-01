import React from 'react';

import { Grid } from '@material-ui/core';

// import VSeparator from '../../components/VSeparator/VSeparator'
import ResponsiveContainer from '../../components/ResponsiveContainer/ResponsiveContainer'
import ExpandingCard from "../../components/ExpandingCard/ExpandingCard"

import SanShouList from "../../components/SanShouList/SanShouList"
import sanShou from "../../images/sanShou.jpg"

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const sanShouCardInfo = (
  <div >
    <img src={sanShou} alt="San Shou opening" height="100" />
    <h6>San Shou list of movements</h6>

  </div>
)

const Advanced: React.FunctionComponent = (props) => {

  const [sanShouListOpen, sanShouListOpenUpdate] = React.useState(false);

  return(
    <div>
      <div id="advancedMainSectionID">
        <ResponsiveContainer >

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
                  <li><em>Da lu</em> - four posture two person form, moving feet with applications</li>
                  <li><em>San shou</em> - advanced two person form, moving feet with applications</li>
                  <li><em>San shou</em> - free form with partner</li>
                </ul>
                <li>
                  Tai chi classics
                </li>
                <li>Long form (Yang 108 posture)</li>
                <li>
                  Sword form, <em>Jian</em>
                </li>
              </ul>
            </Grid>

          </Grid>
        </ResponsiveContainer>
      </div>
      

      <ResponsiveContainer>

        <h2>More information and articles</h2>

        <ExpandingCard
          open={sanShouListOpen}
          openCallback={sanShouListOpenUpdate}
          cardContent={sanShouCardInfo}
          id="SanShou_formList"
          xs={12} sm={6} md={4}
        >
          <SanShouList />
        </ExpandingCard>

      </ResponsiveContainer>
      
    </div>
  );
}

export default Advanced;