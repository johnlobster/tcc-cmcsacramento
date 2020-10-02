import React from 'react';


import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'

import { makeStyles } from '@material-ui/core/styles';

import taijitu from '../../images/tjt4.png'
// import theme from "../../global/theme";

const useStyles = makeStyles({
  mapStyles: {
    width: "500px",
    height: "500px"
  },
  topBox: {
    margin: "1rem",
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
  },
})
// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const GMap: React.FunctionComponent = (props) => {

  const classes= useStyles()

  const mapStyles = {
    width: "500px",
    height: "500px"
  }

  const communityCenterLocation = {
    lat: 38.601668, lng: -121.309464
  }

  
  const parkLocation = {
    lat: 38.600766,
    lng: -121.310778
  }

  const theatreLocation = {
    lat: 38.600540, 
    lng: -121.309190,
  }

  const hsLocation = {
    lat: 38.599775, 
    lng: -121.308382
  }
  

  return (
    <div className={classes.topBox}>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={16}
          center={communityCenterLocation}
        >
          <Marker
            position={communityCenterLocation}
            icon={{ url: taijitu }}
            opacity={0.8}
          />
          <Marker 
            position={parkLocation}
            label="Hagan Park"
            opacity={0.6} 
          />
          <Marker
            position={theatreLocation}
            label="Community theatre"
            opacity={0.6} 
          />
          <Marker
            position={hsLocation}
            label="High school"
            opacity={0.6} 
          />
          
        </GoogleMap>
      </LoadScript>
    </div>
    
  )

}

export default GMap;

/*
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.063533514349!2d-121.3118612495437!3d38.60140787951741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809addab44082533%3A0xd2077a03010da7ad!2sHagan%20Community%20Center!5e0!3m2!1sen!2sus!4v1601356605530!5m2!1sen!2sus" 
width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
*/