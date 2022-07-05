import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { Container } from "@material-ui/core";
import { getJobsData } from "./components/api";
import { JobDetails } from "./components/JobDetails/JobDetails"

const App = () => {
  const [query, setQuery] = useState("chef in New York");
  const [jobData, setJobData] = useState([]);

  console.log(jobData)
//API call
  useEffect(() => {
    getJobsData(query).then((data) => {
      setJobData(data);
    });
  }, [query])
console.log(query);

  return (
    <div>
      <CssBaseline />
      <Header />
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Map />
          </Grid>
          <Grid item xs={12} md={4}>
            <List query={ query} setQuery={setQuery} jobData={jobData} />

          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
