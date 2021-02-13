import React from 'react';

import { Grid, Paper } from  '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import theme from "../../global/theme";

import { Draft } from '../../components/Draft/Draft'
import ResponsiveContainer from '../../components/ResponsiveContainer/ResponsiveContainer'
import ExpandingCard from "../../components/ExpandingCard/ExpandingCard"
import CGrid from '../../components/CGrid/CGrid'

const instructorList = [
  {
    name: "Craig Townsend",
  },
  {
    name: "Paul Huey",
  },
  {
    name: "Gary Lee",
  },
  {
    name: "John Webster",
  },
]

function cantOpen()  {
  return true
}

const useStyles = makeStyles({
  bioBox: {
    [theme.breakpoints.up('xs')]: {
      width: "80%",
      margin: "1rem auto"
    },    
  },
  myPaper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    height: "100%",
  }
})

// the card open/closed state is an array of booleans
type boolArray = Array< boolean >
const initOpen: ( length: number) => boolArray = (length) => {
  const outputArray: boolArray = []
  for ( let i=0; i < length; i++) {
    outputArray[i] = false
  }
  return outputArray
}
const About: React.FunctionComponent = (props) => {

  const styles = useStyles()

  // state for opening/closing cards
  const initOpenArray: boolArray = initOpen(instructorList.length) 
  const [openList, openListUpdate] = React.useState(initOpenArray)

  const toggleCard: (index: number, cardOpen: boolean) => void = (index, cardOpen) => {
    const newOpenList: boolArray = []
    for (let i = 0; i < instructorList.length; i++) {
      console.log(`${i} `)
      if ( i === index) {
        newOpenList[i] = cardOpen
      } else {
        newOpenList[i] = openList[i]
      }
    }
    // console.log(`About:ToggleCard(${index}, open) New open list:`)
    openListUpdate(newOpenList)
  }

  // pass buttonFunctions[i] to each card (ExpandingCard), so that it can call toggleCard with the right index
  const buttonFunctions: Array< (open: boolean) => void > = []
  for( let i=0; i < instructorList.length; i++) {
    buttonFunctions[i] = (open ) => {
      toggleCard( i, open)
    }  
  }

  return(
    <div>
      <ResponsiveContainer>
        <h1>About Jīnbǎo (Golden treasure) Tai Chi Chuan</h1>

        <Draft>
          Origin of name and other stuff about club
        </Draft>

        <h2>Instructors</h2>

        {/* use my own components instead of mui - testing */}
        {/* <div className={styles.bioBox}>
          <CGrid container >
            {instructorList.map((item, index) => {
              const cardContent = (
                <h4>{item.name}</h4>
                )
                return (
                  <CGrid item                  
                  key={`Instructor_${index}`}
                  xs={12} sm={6} md={4}
                  >
                    <div className={styles.myPaper}>
                      <h4>{item.name}</h4>
                      <p>Something cool about {item.name}</p>
                    </div>
                    
                  </CGrid>
                  )
                })}
          </CGrid>
        </div> */}



        <div className={styles.bioBox}>

          <Grid container spacing={2}>
            {instructorList.map((item, index) => {
              const cardContent = (
                <h4>{item.name}</h4>
              )
              return (
                  <ExpandingCard
                    open={openList[index]}
                    openCallback={buttonFunctions[index]}
                    id={`Instructor_${index}`}
                    key={`Instructor_${index}`}
                    cardContent={cardContent}
                    xs={12} sm={6} md={4}
                  >
                    <Draft>
                      Something cool about {item.name}
                    </Draft>
                  </ExpandingCard>
              )
            })}

          </Grid>
        </div>
        
      </ResponsiveContainer>
      


    </div>
  );
}

export default About;