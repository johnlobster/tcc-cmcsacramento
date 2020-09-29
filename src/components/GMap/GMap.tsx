import React from 'react';

import google from 'google'

import { GoogleMap, LoadScript, Marker, InfoBox } from '@react-google-maps/api'

import { makeStyles } from '@material-ui/core/styles';

import taijitu from '../../images/Taijitu.svg'
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
    lat: 38.601662, lng: -121.309458
  }

  // use to position infobox
  // const offsetLocation = {
  //   lat: communityCenterLocation.lat - 0.000020,
  //   lng: communityCenterLocation.lng - 0.000020
  // }

  const iconSize = new google.maps.Size(40, 40)

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
          {/* <InfoBox position={offsetLocation} >
            <img src={taijitu} alt="Class location" width="40" />
          </InfoBox> */}
          <Marker 
            position={communityCenterLocation} 
            icon={{ url: taijitu, size: iconSize }}
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