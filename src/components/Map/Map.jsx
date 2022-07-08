import React from "react";
import GoogleMapReact from "google-map-react";
import useStyles from "./styles";
import LocationOnOutlined from "@material-ui/icons/LocationOnOutlined";
import { mapStyles } from "./mapStyles";

const Map = ({ setCoordinates, coordinates}) => {


  const classes = useStyles();
  
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB6uGiBEvqJdpWzjhvGlLXMUWjWvs5gwoU" }}
        defaultCenter={coordinates}
        defaultZoom={14}
        center={coordinates}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        }}
      >
        <LocationOnOutlined fontSize="large" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
