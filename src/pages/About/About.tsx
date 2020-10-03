import React from 'react';

import { Grid } from  '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import theme from "../../global/theme";

import { Draft } from '../../components/Draft/Draft'
import ResponsiveContainer from '../../components/ResponsiveContainer/ResponsiveContainer'
import ExpandingCard from "../../components/ExpandingCard/ExpandingCard"

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
  }
})


const About: React.FunctionComponent = (props) => {

  const styles = useStyles()

  // ToDo, create list length instructorList.length
  const tmp = [false, false, false, false]
  const [openList, openListUpdate] = React.useState(tmp)
  // ToDo, create list of functions calling openListUpdate
  
  const toggleCard: (index: number) => void = (index) => {

  }

  return(
    <div>
      <ResponsiveContainer>
        <h1>About Jīnbǎo (Golden treasure) Tai Chi Chuan</h1>

        <Draft>
          Origin of name and other stuff about club
        </Draft>

        <h2>Instructors</h2>

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