import React from "react";
import GoogleMapReact from "google-map-react";
import useStyles from "./styles";




const defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 11
};


const Map = () => {
  const classes = useStyles();
  return (
   <div className={classes.mapContainer}>
        <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB6uGiBEvqJdpWzjhvGlLXMUWjWvs5gwoU" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options=""

        >
       
        </GoogleMapReact>
      </div>
    );
  }



export default Map;
