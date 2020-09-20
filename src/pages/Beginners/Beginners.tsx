import React from 'react';
import { useLocation } from 'react-router-dom';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CardToBlock from "../../components/CardToBlock/CardToBlock";
import ContactButton from "../../components/ContactButton/ContactButton";
import ResponsiveContainer from '../../components/ResponsiveContainer/ResponsiveContainer'
// import useHashScrolling from "../../hooks/useHashScrolling"


import * as DList from "../../components/DescriptionList/DescriptionList"

import tjt from "../../images/Taijitu.svg";
import cmcForm from "../../images/cmc4_form.jpg";
// import birds from "../../images/birds1_fade.jpg";

import theme from '../../global/theme'

import * as formList from "./formList"


const useStyles = makeStyles({
  formImageBox: {
    display: 'flex',
    alignContent: 'center',
    width: '100%',
    paddingBottom: '3rem',
    paddingLeft: '1.5rem',
    [theme.breakpoints.up('xs')]: {
      paddingTop: '0',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '1.5rem',
    },
    '& img': {
      [theme.breakpoints.down('sm')]: {
        maxWidth: '90%',
      },
    },
    
  },
  squareTaoCardImage: {
    width: '100px',
    padding: '0.5rem',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      maxWidth: '300px',

    },
  },
  buttonImageBox: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'space-between',
    height: '100%',
    marginLeft: 'auto',

  },
});



const principlesCard = (
  <div>
    <h6 >Principles of Tai Chi</h6>
  </div>
);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Beginners: React.FunctionComponent = () => {

  const classes = useStyles();

  const formRef = React.useRef(null);
  const [formListOpen, formListOpenUpdate ] = React.useState(false);

  // temporary version, only works for forms list
  (function useHashScrolling() {
    const { hash } = useLocation()
    React.useEffect(() => {
      // run on mount, check for navigation to hash, otherwise scroll to top
      console.log("useHashScrolling: hash received " + hash + " length " + hash.length)
      if (hash && hash.length > 0) {
        const match: RegExpMatchArray | null = hash.match(/^#(.+)$/) // remove leading '#'
        if (match) {
          const bareHash = match[1]
          if (bareHash === "Beginners_formList") {
            console.log("Scroll to forms list")
            formListOpenUpdate(true)
            if (formRef.current) {
              const scrollToMe = document.getElementById("Beginners_formList");
              if (scrollToMe) {
                scrollToMe.scrollIntoView();
              }
            } else {
              console.log("Ooops, got lost")
            }
          }
          // check location exists
          // const targetElement = document.getElementById(bareHash)
          // if (targetElement) {
          //   console.log(`useHashScrolling: targetElement ${targetElement}`)
          //   // It exists, is it a React element in the list of refs passed in ?
          //   targetElement.scrollIntoView()
          //   // console.log(`About: scrolled to id ${bareHash}`)
          //   return
          // } else {
          //   console.log(`useHashScrolling: could not scroll to bareHash ${bareHash}`)

          // }
        } else {
          // console.log(`About: hash didn't match pattern #(target)`)
        }
      } else {
        // console.log(`About: hash didn't exist or was empty`)
      }
      // scroll to top, would be better to remember last location on this page
      // console.log("About: scroll to top of page")
      // window.scroll({
      //   top: 0,
      //   left: 0,
      //   behavior: 'smooth'
      // });
    })
  })()
  // useHashScrolling(formRef.current)


  const topRef = React.useRef(null);

  // has to be part of component because references a style
  const squareTaoCard = (
    <Grid container>
      <Grid item xs={12} sm={9} >
        <h6 >The square Tao</h6>
      </Grid>
      <Grid item xs={12} sm={3} >
        <img src={tjt} alt="Yin yang symbol" className={classes.squareTaoCardImage} />
      </Grid>
    </Grid>
  );

  

  const tipsCard = (
    <div >
      <h6>10 Essential tips for beginners</h6>
    </div>
  );

  return(
    <div>
      <ResponsiveContainer>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1 ref={topRef} >Beginners</h1>

            <p>As a beginner, you will work on</p>
            <ul>
              <li>37 Posture form</li>
              <li>5 Principles</li>
              <li>Warm up exercises and Qigong</li>
              <li>Introductory partner work (<em>Tui shu</em>)</li>
            </ul>
          </Grid>

          <Grid container>
            <Grid item xs={12} sm={7}>
              <h3>5 Principles</h3>
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
            <Grid item xs={12} sm={5} className={classes.buttonImageBox}>
              <div className={classes.formImageBox}>
                <img src={cmcForm} alt="Tai chi form" />
              </div>
              <ContactButton />
            </Grid>
          
        </Grid>
        </Grid>
      </ResponsiveContainer>

      <ResponsiveContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <CardToBlock id="Beginners_tips" cardContent={tipsCard} elementToScrollTo={topRef.current}>
              <h4>10 Essential tips for beginners</h4>
              <ol>
                <li>
                  Come with an open mind
              </li>
                <li>Follow and copy what the instructors do as closely as you can </li>
                <li>Be Patient with yourself, learning Tai Chi Chuan takes time.</li>
                <li>Wear comfortable loose clothing and flat bottomed shoes</li>
                <li>Relax, relax, relax <em>(Sung)</em></li>
                <li>Never use external muscular strength <em>(Li)</em></li>
                <li>Never lean, the body should always be upright</li>
                <li>Always breathe naturally through the nose</li>
                <li>Try to make all movements fluid and smooth</li>
                <li>and have fun!!!</li>
              </ol>
            </CardToBlock>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardToBlock id="Beginners_principles" cardContent={principlesCard} elementToScrollTo={topRef.current}>
              <h4>Basic principles of Tai Chi</h4>
              <p>Intro</p>

              <h5>
                Five Basic Principles:<br />
              (Represented with the Acronym BURST)
            </h5>

              <DList.DL>
                <DList.DT><strong>B</strong>: Beautiful Ladies Hand</DList.DT>
                <DList.DD>Straight relaxed wrists</DList.DD>
                <DList.DD>No tension in arms, wrists or fingers</DList.DD>

                <DList.DT><strong>U</strong>: Upright Body</DList.DT>
                <DList.DD>Coccyx (Tail Bone) tucks down slightly to straighten lower back</DList.DD>
                <DList.DD>Imagine that tail bone is if pulled down with weight</DList.DD>
                <DList.DD>Chin turns slightly down</DList.DD>
                <DList.DD>Top of head is pulled up as if lifted with a string</DList.DD>
                <DList.DD>Lower body is pulled down to the ground with gravity</DList.DD>
                <DList.DD>Upper body floats loose and free as if suspended</DList.DD>

                <DList.DT><strong>R</strong>: Relax</DList.DT>
                <DList.DD>Be aware of and let go of any tension in the body</DList.DD>
                <DList.DD>This is the pivotal principle in Tai Chi</DList.DD>

                <DList.DT><strong>S</strong>: Separate the Weight</DList.DT>
                <DList.DD>Weight is not to be distributed evenly on both legs</DList.DD>
                <DList.DD>One leg is ‘Substantial’ and the other is ‘Insubstantial’</DList.DD>
                <DList.DD>(Except for in the Preparation Posture)</DList.DD>

                <DList.DT><strong>T</strong>: Turn the Waist</DList.DT>
                <DList.DD>Never move the body independently of the hips/waist</DList.DD>
                <DList.DD>All movements come from the center-hips/waist</DList.DD>
                <DList.DD>
                  Move from the hips/waist, power comes from the legs,
                  is controlled by the waist/hips and expressed through the fingers
              </DList.DD>

              </DList.DL>

              <h5>Additional concepts</h5>

              <DList.DL>
                <DList.DT>
                  Softness (Yielding)
              </DList.DT>
                <DList.DD>Water is the softest element in the universe yet unstoppable. Soft always overcomes the hard</DList.DD>

                <DList.DT>
                  Smooth Flow
              </DList.DT>
                <DList.DD>Momentum from one movement leads into the next</DList.DD>
                <DList.DD>Movements always flow from the previous movement</DList.DD>
                <DList.DD>In essence; Only one movement from start to finish</DList.DD>

                <DList.DT>
                  Silk Reeling
              </DList.DT>
                <DList.DD>Movements are steady with no break between postures</DList.DD>
                <DList.DD>Like pulling silk from a cocoon.</DList.DD>

                <DList.DT>
                  Natural Breathing
              </DList.DT>
                <DList.DD>Breathe through the nose</DList.DD>
                <DList.DD>Tongue lightly touching upper palette</DList.DD>
                <DList.DD>Breathe like a little child</DList.DD>
                <DList.DD>Abdomen expands when inhaling</DList.DD>
                <DList.DD>Abdomen contracts when exhaling</DList.DD>
                <DList.DD>Additional inhalation into the back of the lungs</DList.DD>
                <DList.DD>Allow chest to sink-Plucking up the back</DList.DD>

                <DList.DT>
                  Rooting
              </DList.DT>
                <DList.DD>Weight falls naturally with gravity to the ground</DList.DD>
                <DList.DD>Imagine you are being rooted to the ground through feet</DList.DD>

              </DList.DL>
            </CardToBlock>

          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardToBlock id="Beginners_squareTao" cardImage={tjt} imageAlt="test" cardContent={squareTaoCard} elementToScrollTo={topRef.current}>
              <div>
              <q>
                <br />
                Trying to understand is like straining through muddy water.<br />
                Have the patience to wait!<br />
                Be still and allow the mud to settle.<br />
              </q>
              <br />
                Lao Tzu: Dao de ching chapter 15
              <br />
              <br />
              <br />
              <em>This content isn't quite ready yet</em>
              </div>
              
            </CardToBlock>

          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div ref={formRef}>
              <CardToBlock 
                id="Beginners_formList" 
                cardContent={formList.cardInfo}
                elementToScrollTo={topRef.current}
                open={formListOpen}
              >
                <formList.FormList />
              </CardToBlock>
            </div>
          </Grid>
          

          
          
          
        </Grid>
      </ResponsiveContainer>

    </div>

    

  );
}

export default Beginners;

/*
  To do on scrolling etc.
  - CardToBlock no longer a grid item
  - useHashScrolling to get ref to react element

  1. create explicit refs, pass into useHashScrolling as an array
  2. auto generate refs
*/