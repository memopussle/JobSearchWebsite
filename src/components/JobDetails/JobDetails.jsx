import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
} from "@material-ui/core";
import useStyles from "./styles";
import WorkOutlineRoundedIcon from "@material-ui/icons/WorkOutlineRounded";
import AttachMoneyOutlinedIcon from "@material-ui/icons/AttachMoneyOutlined";

export const JobDetails = ({ eachJobData }) => {
  const classes = useStyles();
  return (
    <>
      <Card sx={{ maxWidth: 245 }}>
        <CardContent className={classes.jobList}>
          <Typography variant="h5">
            {eachJobData.job_title} - {eachJobData.employer_name}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {eachJobData.job_city} - 
            {eachJobData.job_country}
          </Typography>
          <Typography variant="body1" className={classes.jobDescription}>
            {eachJobData.job_description.slice(0, 300).concat("...")}
          </Typography>

          {eachJobData?.job_min_salary && eachJobData?.job_max_salary && (
            <Box display="flex">
              <AttachMoneyOutlinedIcon fontSize="small" />
              <Typography variant="body2">
                {eachJobData.job_min_salary} - {eachJobData.job_max_salary}
              </Typography>
            </Box>
          )}

          <Box display="flex" className={classes.employmentType}>
            <WorkOutlineRoundedIcon fontSize="small" />
            <Typography variant="body2">
              {eachJobData.job_employment_type?.charAt(0).toUpperCase() +
                eachJobData.job_employment_type?.slice(1).toLowerCase()}
            </Typography>
          </Box>

          {/* make sure eachJobData.job_benefits array exists */}
          {eachJobData?.job_benefits?.map((jobBenefits, i) => (
            <Chip
              key={i}
              size="small"
              label={jobBenefits}
              className={classes.jobBenefits}
            ></Chip>
          ))}

          <Typography variant="body2" className={classes.postDate}>
            Post:{" "}
            {new Date(eachJobData.job_posted_at_datetime_utc).toLocaleString()}
          </Typography>

          <Box display="flex" justifyContent="space-between">
            <Button
              variant="contained"
              size="large"
              className={classes.button}
              onClick={() => window.open(eachJobData.job_apply_link, "_blank")}
            >
              Apply Now
            </Button>
            {eachJobData.employer_website && (
              <Button
                variant="contained"
                size="large"
                className={classes.button}
                onClick={() =>
                  window.open(eachJobData.employer_website, "_blank")
                }
              >
                Website
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
