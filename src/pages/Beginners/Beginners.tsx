import React from 'react';

import { Card, CardContent, Button, Box, Grid, GridSize } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import theme from "../../global/theme";

import CardToBlock from "../../components/CardToBlock/CardToBlock";
import tjt from "../../images/Taijitu.svg";

const useStyles = makeStyles({
  container: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '85%',
    },
    [theme.breakpoints.up('md')]: {
      width: '75%',
    },
    maxWidth: `${theme.breakpoints.values.md}px`,
    padding: '1rem',
    margin: '1rem auto 2rem auto'
  },
});

// add more props 
// add <Beginners-moreProps> to type
// interface Beginners-moreProps {
// }


const aCard = (
  <div>
    <h6>I got passed down !!!</h6>
  </div>
);

const principlesCard = (
  <div>
    <h6 >Principles of Tai Chi</h6>
  </div>
);

const squareTaoCard = (
  <div>
    <h6 >The square Tao</h6>
  </div>
);
const Beginners:React.FunctionComponent = (props) => {

  const classes = useStyles();

  const topRef = React.useRef(null);

  return(
    <div>
      <Grid container className={classes.container} spacing={1}>
        <Grid item xs={12}>
          <h3 ref={topRef} >Beginners</h3>

          <p>As a beginner, you will work on</p>
          <ul>
            <li>37 Posture form</li>
            <li>5 Principles</li>
            <li>Warm up exercises and Qigong</li>
          </ul>

          <h5>5 Principles</h5>
          <p>
            Professor Chen man ching emphasized 5 principles of Tai chi
          </p>
          <ul>
            <li>Relax</li>
            <li>Upright body</li>
            <li>Turn the waist</li>
            <li>Separate the weight</li>
            <li>Fair ladies' hand</li>
          </ul>
        </Grid>
        
      </Grid>

      <Grid container className={classes.container} spacing={2}>
        <CardToBlock id="Beginners_principles" cardContent={principlesCard} elementToScrollTo={topRef.current}>
          <h5>
            Five Basic Principles:<br />
            (Represented with the Acronym BURST)
          </h5>

          
          <p>Intro</p>

          <dl>
            <dt><strong>B</strong>: Beautiful Ladies Hand</dt>
            <dd>Straight relaxed wrists</dd>
            <dd>No tension in arms, wrists or fingers</dd>
            
            <dt><strong>U</strong>: Upright Body</dt>
            <dd>Coccyx (Tail Bone) tucks down slightly to straighten lower back</dd>
            <dd>Imagine that tail bone is if pulled down with weight</dd>
            <dd>Chin turns slightly down</dd>
            <dd>Top of head is pulled up as if lifted with a string</dd>
            <dd>Lower body is pulled down to the ground with gravity</dd>
            <dd>Upper body floats loose and free as if suspended</dd>

          </dl>

          

                           

          

          .

          

          

          



          {/* R: Relax

          Be aware of and let go of any tension in the body

          This is the pivotal principle in Tai Chi



          S: Separate the Weight

          Weight is not to be distributed evenly on both legs

          One leg is ‘Substantial’ and the other is ‘Insubstantial’

          (Except for in the Preparation Posture)



          T: Turn the Waist

          Never move the body independently of the hips/waist

          All movements come from the center-hips/waist

          Move from the hips/waist

          Power comes from the legs

          Is controlled by the waist/hips

          Is expressed through the fingers



          Additional Concepts:



          Softness (Yielding)

          Water is the softest element in the universe yet

          unstoppable. Soft always overcomes the hard



          Smooth Flow 

          Momentum from one movement leads into the next

          Movements always flow from the previous movement

          In essence; Only one movement from start to finish



          Silk Reeling

          Movements are steady with no break between postures

          Like pulling silk from a cocoon. 



          Natural Breathing

          Breathe through the nose

          Tongue lightly touching upper palette

          Breathe like a little child 

          Abdomen expands when inhaling

          Abdomen contracts when exhaling

          Additional inhalation into the back of the lungs

          Allow chest to sink-Plucking up the back



          Rooting

          Weight falls naturally with gravity to the ground

             Imagine you are being rooted to the ground through feet */}
        </CardToBlock>

        <CardToBlock id="Beginners_squareTao" cardImage={tjt} imageAlt="test" cardContent={squareTaoCard} elementToScrollTo={topRef.current}>
          <p>A meaningful sentence</p>
        </CardToBlock>

        <CardToBlock id="test3" cardContent={aCard} elementToScrollTo={topRef.current}>
          <p>Yet another card</p>
        </CardToBlock>
      </Grid>

    </div>

    

  );
}

export default Beginners;