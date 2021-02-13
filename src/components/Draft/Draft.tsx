import React from 'react'

// Simple wrapper to conditionally include material
// If in author mode, children are displayed

import { Paper } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const draftStyles = makeStyles({
  box: {
    paddingLeft: '1.75rem',
  },
  notFinished: {
    fontStyle: 'italic',
    fontSize: '1.2rem',
  },
  quote: {
    paddingTop: '1rem',
    paddingLeft: '2.5rem',
    paddingRight: '0.75rem',
    fontSize: '1.4rem',
    fontStyle: 'italic',
  },
  laotzu: {
    paddingLeft: '1rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    fontSize: '1.25rem',
    fontVariant: 'small-caps',
  }
})

export const DraftMessage: React.FunctionComponent = () => {

  const classes = draftStyles()

  return (
    <div className={classes.box}>
      <p className={classes.notFinished}>This content isn't quite finished</p>

      <Paper elevation={3}>
        <div className={classes.quote}>
        Trying to understand is like straining through muddy water.<br />
        Have the patience to wait!<br />
        Be still and allow the mud to settle.<br />
        </div>
        <div className={classes.laotzu}>
          Lao Tzu: Dao de ching chapter 15
        </div>
      </Paper>
    
    </div>
  )
}
export const Draft: React.FunctionComponent = (props) => {

  return (
    <React.Fragment>
      { process.env.REACT_APP_BUILD_MODE === "author" ? 
        (props.children) :
        (
          <DraftMessage />
        )}
    </React.Fragment>
  )
}

