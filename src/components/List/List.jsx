import { Typography, Button, TextField, Box, Grid } from "@material-ui/core";
import React, {useState} from "react";
import useStyles from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { JobDetails } from "../JobDetails/JobDetails";

const List = ({ setQuery, jobData}) => {

  const classes = useStyles();

  const [searchForm, setSearchForm] = useState({
    job: "",
    location: "",
  });


  const handleChange = (event) => {

    setSearchForm({ ...searchForm, [event.target.name]: event.target.value });
  };
 

  
  const handleSubmit = (event) => {
    event.preventDefault();
    let query = `${searchForm.job} in ${searchForm.location}`
    setQuery(query);

  };

  return (
    <div className={classes.container}>
      <Typography variant="h4">Search Jobs</Typography>
      <form className={classes.formControl} onSubmit={handleSubmit}>
        <Box className={classes.inputForm}>
          <SearchIcon className={classes.searchIcon} />
          <TextField
            id="search-job"
            label="Search Jobs"
            variant="outlined"
            value={searchForm.job}
            onChange={handleChange}
            name="job"
            className={classes.inputInput}
          />

          <LocationOnOutlinedIcon className={classes.locationIcon} />
          <TextField
            id="search-location"
            label="Location"
            variant="outlined"
            value={searchForm.location}
            onChange={handleChange}
            name="location"
            className={classes.inputInput}

          />
          <Button variant="contained" size="large" type="submit" className={classes.submitButton}>
            Search
          </Button>
        </Box>
      </form>
      <Grid container spacing={3}>
        {jobData.map((eachJobData) => (
          <JobDetails eachJobData={eachJobData} key={eachJobData.job_id}  />
        ))}
     </Grid>
    </div>
  );
};

export default List;
