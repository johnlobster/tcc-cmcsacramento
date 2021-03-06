import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles, createStyles } from '@material-ui/core/styles';
// import { Theme } from '@material-ui/core';

const linkStyles = makeStyles(() =>
  createStyles({
    root: {
      textDecoration: 'none',
      fontSize: '1.1rem',
      
    }
  })
)

interface LinkMoreProps {
  to: string;
  color?: string; // not sure that this is a good idea
  className?: string;
}
const MyLink: React.FunctionComponent<LinkMoreProps> = (props) => {
  const linkClasses = linkStyles(); 

  return(
    <span className={props.className} >
      <Link to={props.to} className={linkClasses.root}>
        {props.children}
      </Link> 
    </span>
  );
}

export default MyLink;