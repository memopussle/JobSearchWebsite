import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { Container } from "@material-ui/core";
import { getJobsData } from "./components/api";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";




const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      "sans-serif",
    ].join(","),
  },
});

const App = () => {
  const [query, setQuery] = useState("chef in New York");
  const [jobData, setJobData] = useState([]);
  const [coordinates, setCoordinates] = useState({});


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
      setJobData(data);
    });
  }, [query]);
  console.log(query);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />

        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Map
                jobData={jobData}
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
              />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;
