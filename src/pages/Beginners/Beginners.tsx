import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CardToBlock from "../../components/CardToBlock/CardToBlock";
import tjt from "../../images/Taijitu.svg";
import cmcForm from "../../images/cmc4_form.jpg";

const useStyles = makeStyles({
  formImageBox: {
    display: 'flex',
    alignContent: 'center',
    width: '100%',
    '& img': {
      marginLeft: 'auto',
      maxWidth: '90%',
      paddingTop: '4rem',
    }
  },
});

const formList = (
  <div>
    <h6>List of postures for 37 movement Cheng man ching form</h6>
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
      <Grid container spacing={2} className="responsiveContainer">
        <Grid item xs={12}>
          <h3 ref={topRef} >Beginners</h3>

          <p>As a beginner, you will work on</p>
          <ul>
            <li>37 Posture form</li>
            <li>5 Principles</li>
            <li>Warm up exercises and Qigong</li>
          </ul>

          <Grid container>
            <Grid item xs={12} sm={7}>
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
            <Grid item xs={12} sm={5}>
              <div className={classes.formImageBox}>
                <img src={cmcForm} alt="Tai chi form" />
              </div>
              
            </Grid>
          </Grid>
          
        </Grid>
        
      </Grid>

      <Grid container spacing={2} className="responsiveContainer">
        <CardToBlock id="Beginners_principles" cardContent={principlesCard} elementToScrollTo={topRef.current}>
          <h4>Basic principles of Tai Chi</h4>
          <p>Intro</p>

          <h5>
            Five Basic Principles:<br />
            (Represented with the Acronym BURST)
          </h5>

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

            <dt><strong>R</strong>: Relax</dt>
            <dd>Be aware of and let go of any tension in the body</dd>
            <dd>This is the pivotal principle in Tai Chi</dd>

            <dt><strong>S</strong>: Separate the Weight</dt>
            <dd>Weight is not to be distributed evenly on both legs</dd>
            <dd>One leg is ‘Substantial’ and the other is ‘Insubstantial’</dd>
            <dd>(Except for in the Preparation Posture)</dd>

            <dt><strong>T</strong>: Turn the Waist</dt>
            <dd>Never move the body independently of the hips/waist</dd>
            <dd>All movements come from the center-hips/waist</dd>
            <dd>Move from the hips/waist</dd>
            <dd>Power comes from the legs</dd>
            <dd>Is controlled by the waist/hips</dd>
            <dd>Is expressed through the fingers</dd>

          </dl>

          <h5>Additional concepts</h5>

          <dl>
            <dt>
              Softness (Yielding)
            </dt>
            <dd>Water is the softest element in the universe yet unstoppable. Soft always overcomes the hard</dd>
            
            <dt>
              Smooth Flow
            </dt>
            <dd>Momentum from one movement leads into the next</dd>
            <dd>Movements always flow from the previous movement</dd>
            <dd>In essence; Only one movement from start to finish</dd>

            <dt>
              Silk Reeling
            </dt>
            <dd>Movements are steady with no break between postures</dd>
            <dd>Like pulling silk from a cocoon.</dd>

            <dt>
              Natural Breathing
            </dt>
            <dd>Breathe through the nose</dd>
            <dd>Tongue lightly touching upper palette</dd>
            <dd>Breathe like a little child</dd>
            <dd>Abdomen expands when inhaling</dd>
            <dd>Abdomen contracts when exhaling</dd>
            <dd>Additional inhalation into the back of the lungs</dd>
            <dd>Allow chest to sink-Plucking up the back</dd>

            <dt>
              Rooting
            </dt>
            <dd>Weight falls naturally with gravity to the ground</dd>
            <dd>Imagine you are being rooted to the ground through feet</dd>          

          </dl>
        </CardToBlock>

        <CardToBlock id="Beginners_squareTao" cardImage={tjt} imageAlt="test" cardContent={squareTaoCard} elementToScrollTo={topRef.current}>
          <p>A meaningful sentence</p>
        </CardToBlock>

        <CardToBlock id="Beginners_formList" cardContent={formList} elementToScrollTo={topRef.current}>
          <p>Yet another card</p>
        </CardToBlock>
      </Grid>

    </div>

    

  );
}

export default Beginners;