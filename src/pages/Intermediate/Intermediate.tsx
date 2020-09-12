import React from 'react';

import { Grid } from '@material-ui/core';

// import VSeparator from '../../components/VSeparator/VSeparator'
import ResponsiveContainer from '../../components/ResponsiveContainer/ResponsiveContainer'

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const Intermediate: React.FunctionComponent = () => {
  return(
    <div>
      <ResponsiveContainer>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h1>Intermediate</h1>

              <p>As an intermediate student, you will work on</p>
              <ul>
                <li>Solo form corrections</li>
                <li>Detailed movements of the body, hips, kwa</li>
                <li>Relaxation,<em>Sung</em></li>
                <li>Fixed step partner work, <em>Tui shu</em></li>
                  <ul>
                    <li>Sensitivity and the ability to follow your partner</li>
                    <li>Posture, relaxation, co-ordination of body movements</li>
                    <li>Softness and not using force</li>
                    <li>Identifying your center, and that of your partner</li>
                    <li>Use of some movements from solo form</li>
                  </ul>
                <li>Moving step partner work</li>
              </ul>

              <p>As you progress, you will become familiar with the following not so secret secrets</p>
              <ul>
                <li>
                  Separating people and skills into beginner, intermediate and advanced is
                  arbitrary.
                  Tai Chi has no testings, rankings, uniforms, colored belts or belt testing fees.
                </li>
                <li>
                  Your form will never be perfect.
                  Whenever you learn something new, it can be put into the form. 
                  There is no end to learning new things about Tai chi
                </li>
                <li>
                  There are many different aspects of Tai Chi. Everyone progresses at a different
                  rate through each aspect.
                  Finding people with better skills in an aspect is an opportunity to learn, not a
                  time to despair about your abilities
                </li>
                <li>
                  Your understanding of principles changes. A new definition may conflict with your previous knowledge.
                  Expect your mind to be blown on a regular basis
                </li>
                <li>
                  There is no separation between Tai Chi for health, and Tai Chi as a martial art.
                  As you progress in any aspect of Tai chi, the health benefits will increase
                </li>
                <li>
                  The (internal) aspects of Tai chi are what is important. 
                  New forms (or related martial arts) will not contain additional material and so
                  the number of forms that you know is not related to your ability in Tai chi
                </li>
              </ul>
            </Grid>
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
