import React from 'react';

import { Grid } from '@material-ui/core';

// import VSeparator from '../../components/VSeparator/VSeparator'
import ResponsiveContainer from '../../components/ResponsiveContainer/ResponsiveContainer'
import CardToBlock from "../../components/CardToBlock/CardToBlock"

import { TccSecrets, SecretsCard} from "./secrets"

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const Intermediate: React.FunctionComponent = () => {

  const topRef = React.useRef(null);

  return(
    <div>
      <ResponsiveContainer>

          <Grid container spacing={2}>
            <Grid item xs={12}>
            <h1 ref={topRef} >Intermediate</h1>

              <p>As an intermediate student, you will work on</p>
              <ul>
                <li>Solo form corrections</li>
                <li>Detailed movements of the body, hips, <em>kwa</em></li>
                <li>Relaxation,<em>Sung</em></li>
                <li>Fixed step partner work, <em>Tui shou</em></li>
                  <ul>
                    <li>Sensitivity and the ability to follow your partner</li>
                    <li>Posture, relaxation, co-ordination of body movements</li>
                    <li>Softness and not using force</li>
                    <li>Identifying your center, and that of your partner</li>
                    <li>Use of some movements from solo form</li>
                  </ul>
                <li>Moving step partner work, three step <em>Tui shou</em></li>
              </ul>

              
            </Grid>
          </Grid>

        <Grid container spacing={2}>

          <CardToBlock id="Intermediate_secrets" cardContent={SecretsCard} elementToScrollTo={topRef.current}>
            <TccSecrets />
          </CardToBlock>
        </Grid>
    </ResponsiveContainer>
    </div>
  );
}

export default Intermediate;

/*

import TypographyTest from '../../components/TypographyTest/TypographyTest'

<div>
      <ResponsiveContainer>

      <VSeparator lines={3} />
      <h1>I am Intermediate, using this to test typography</h1>
      <VSeparator lines={2} />
      <TypographyTest />
    </ResponsiveContainer>
    </div>

*/
