import React, {useState} from "react";
import GoogleMapReact from "google-map-react";
import useStyles from "./styles";
import { Typography, useMediaQuery, Paper } from "@material-ui/core";
import LocationOnOutlined from "@material-ui/icons/LocationOnOutlined";



const Map = ({ setCoordinates, coordinates, jobData }) => {

  console.log(jobData);
  const [marginBounds, setMarginBounds] = useState({});

  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={coordinates}
        margin={[50, 50, 50, 50]}
        defaultZoom={10}
        center={coordinates}
        options=""
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setMarginBounds({
            ne: e.marginBounds.ne,
            nw: e.marginBounds.nw,
            se: e.marginBounds.se,
            sw: e.marginBounds.sw,
          });
        }}
      >
        {jobData?.map((eachJobData, i) => {
          <div
            key={i}
            lat={Number(eachJobData.job_latitude)}
            lng={Number(eachJobData.job_longitude)}
          >
            <Paper elevation={3}>
              <Typography>{eachJobData.employer_name}</Typography>
            </Paper>
          </div>;
        })}
      </GoogleMapReact>
    </div>
  );
  }



export default Map;
