import React from 'react';


import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'

import { makeStyles } from '@material-ui/core/styles';

import taijitu from '../../images/tjt4.png'
import theme from '../../global/theme';

// ToDo, change map size based on screen width. The value has to be passed down to the google maps iframe, so
//       probably needs to be state

const mapStyles = {
  width: "550px",
  height: "400px"
}

const useStyles = makeStyles({
  mapStyles: {
    width: mapStyles.width,
    height: mapStyles.height,
  },
  topBox: {
    margin: "1rem",
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapBox: {
    width: mapStyles.width,
    height: mapStyles.height,
    borderColor: "black",
    borderWidth: "0px",
    borderStyle: "none",
    borderRadius: "8px",
    boxShadow: theme.shadows[8]
  }
})
// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const GMap: React.FunctionComponent = (props) => {

  const classes= useStyles()

  const communityCenterLocation = {
    lat: 38.601668, lng: -121.309464
  }

  const mapCenter = {
    lat: 38.601668, lng: -121.309650
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
      <div className={classes.mapBox}>
        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        >
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={16}
            center={mapCenter}
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
      
    </div>
    
  )

}

export default GMap;
