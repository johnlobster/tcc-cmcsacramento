import React from 'react'

// Simple wrapper to conditionally include material
// If in author mode, children are displayed

const Draft: React.FunctionComponent = (props) => {

  return (
    <React.Fragment>
      { process.env.REACT_APP_BUILD_MODE === "author" ? 
        (props.children) :
        (<p>Not quite finished yet ...</p>)}
    </React.Fragment>
  )

}

export default Draft