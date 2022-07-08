import {
  Button,
  Box,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  InputBase,
  CircularProgress,
} from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { JobDetails } from "../JobDetails/JobDetails";
import { Autocomplete } from "@react-google-maps/api";

const List = ({ setQuery, jobData, setCoordinates, isLoading }) => {
  const classes = useStyles();

  const [isRemote, setIsRemote] = useState("all");
  const [employmentType, setEmploymentType] = useState("all");

  const [autocomplete, setAutoComplete] = useState(null);

  const onLoad = (autoC) => setAutoComplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat(); // googlemap recommendation
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
    let place = autocomplete.getPlace();
    let inputValue = place.formatted_address;

    //try to establish query inside onPLaceChange
    let query = `${searchForm.job} in ${inputValue} ${remoteValue} ${employmentTypeValue}`;

    setQuery(query);
    //change searchForm.location to google suggestion
    searchForm.location = inputValue;
    console.log(inputValue);
  };

  const [searchForm, setSearchForm] = useState({
    job: "",
    location: "",
  });

  const handleChange = (event) => {
    setSearchForm({ ...searchForm, [event.target.name]: event.target.value });
  };

  //if else statement to determine isRemote
  let remoteValue;
  if (isRemote === "yes") {
    remoteValue = "working remotely";
  } else if (isRemote === "no") {
    remoteValue = "at office";
  } else if (isRemote === "all") {
    remoteValue = "";
  }

  let employmentTypeValue;
  if (employmentType === "fullTime") {
    employmentTypeValue = " full-time";
  } else if (employmentType === "partTime") {
    employmentTypeValue = " part-time";
  } else if (employmentType === "all") {
    employmentTypeValue = "";
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    onPlaceChanged();
  };

  return (
    <>
      <div className={classes.container}>
        <form className={classes.formControl} onSubmit={handleSubmit}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search jobs…"
              value={searchForm.job}
              onChange={handleChange}
              name="job"
              className={classes.inputInput}
            />
          </div>
          <LocationOnOutlinedIcon className={classes.locationIcon} />
          <Autocomplete onLoad={onLoad} onPlaceChanged={handleSubmit}>
            <InputBase
              placeholder="Location"
              value={searchForm.location}
              onChange={handleChange}
              name="location"
              className={classes.inputInput}
            />
          </Autocomplete>
          <Box display="flex">
            <div className={classes.remoteMargin}>
              <InputLabel className={classes.label}>Remote</InputLabel>
              <Select
                value={isRemote}
                onChange={(e) => setIsRemote(e.target.value)}
                className={classes.selectOption}
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </Select>
            </div>
            <div>
              <InputLabel className={classes.label}>Employment Type</InputLabel>
              <Select
                value={employmentType}
                onChange={(e) => setEmploymentType(e.target.value)}
                className={classes.selectOption}
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="fullTime">Full-time</MenuItem>
                <MenuItem value="partTime">Part-time</MenuItem>
              </Select>
            </div>
          </Box>
          <Button
            variant="contained"
            size="large"
            type="submit"
            className={classes.submitButton}
          >
            Search
          </Button>
        </form>
        {isLoading ? (
          <Box
            display="flex"
            className={classes.loading}
            alignItems="center"
            justifyContent= "center"
          >
            <CircularProgress size="7rem" />
          </Box>
        ) : (
          <Grid container spacing={3} className={classes.list}>
            {jobData.map((eachJobData) => (
              <JobDetails
                eachJobData={eachJobData}
                key={eachJobData.job_id}
                latitude={eachJobData.job_latitude}
                longitude={eachJobData.job_longitude}
              />
            ))}
          </Grid>
        )}
      </div>
    </>
  );
};

export default List;
