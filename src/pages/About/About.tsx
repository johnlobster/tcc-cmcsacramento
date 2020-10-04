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


const About: React.FunctionComponent = (props) => {

  const styles = useStyles()

  // ToDo, create list length instructorList.length
  const initOpenArray = Array.prototype.fill(false, 0, instructorList.length) // ugly syntax to create a [false, false ..] array
  const [openList, openListUpdate] = React.useState(initOpenArray)

  // ToDo, create list of functions calling openListUpdate
  
  const toggleCard: (index: number) => void = (index) => {
    const currentOpenList = openList
    const newOpenList = initOpenArray
    for( let i= 0; i < initOpenArray.length; i++) {
      if ( i === index) {
        newOpenList[i] = ! currentOpenList[i]
      } else {
        newOpenList[i] = currentOpenList[i]
      }
    }
    console.log(`About:ToggleCard(${index}) New open list: ${newOpenList}`)
    openListUpdate(newOpenList)
  }

  return(
    <div>
      <ResponsiveContainer>
        <h1>About Jīnbǎo (Golden treasure) Tai Chi Chuan</h1>

        <Draft>
          Origin of name and other stuff about club
        </Draft>

        <h2>Instructors</h2>

        {/* use my own components instead of mui - much easier */}
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
                    openCallback={cantOpen}
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