import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { Container } from "@material-ui/core";
import { getJobsData } from "./components/api";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Geocode from "react-geocode";



const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      "sans-serif",
    ].join(","),
  },
});

const App = () => {
  const [query, setQuery] = useState("New York");
  const [jobData, setJobData] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [isLoading, setIsLoading] = useState(true);
console.log(isLoading);
  //convert user's lat and lng -> city
  //get job generates based on user's location
  useEffect(() => {
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
    Geocode.setLanguage("en");
    Geocode.setLocationType("ROOFTOP");
    Geocode.fromLatLng(coordinates.lat, coordinates.lng).then(
      (response) => {
   
        const address = response.results[0].formatted_address;
        let value = address.split(",").splice(2).join(",");
        setQuery(value);

      },
      (error) => {
        console.error(error);
      }
    );
  }, [coordinates])

  //get user's current location
  useEffect(() => {
 
    navigator.geolocation.getCurrentPosition(
      //to get the current position of the device.
     
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }

   
    );

  }, []);

  //API call
  useEffect(() => {
    getJobsData(query).then((data) => {
 setIsLoading(true);
      setJobData(data);
      setIsLoading(false);
    });
  }, [query]);
  

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />

        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Map
                setCoordinates={setCoordinates}
                coordinates={coordinates}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <List
                query={query}
                setQuery={setQuery}
                jobData={jobData}
                setCoordinates={setCoordinates}
                isLoading={isLoading}
              />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;
