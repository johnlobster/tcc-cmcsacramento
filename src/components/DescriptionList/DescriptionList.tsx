import React from 'react'

// react wrappers for description list, could do all sorts of things with this
// replacing DL, DT, DD

// can put <p> inside lists - probably the best way to do this

export const DL: React.FunctionComponent = (props) => {

  return (
    <dl>
      {props.children}
    </dl>
  )
}

export const DT: React.FunctionComponent = (props) => {

  return (
    <dt>
      {props.children}
    </dt>
  )
}

export const DD: React.FunctionComponent = (props) => {

  return (
    <dd>
      {props.children}
    </dd>
  )
}
