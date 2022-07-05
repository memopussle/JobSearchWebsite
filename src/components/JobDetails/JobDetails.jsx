import React from "react";
import { Card, CardHeader, CardMedia, CardContent, Typography } from "@material-ui/core";


export const JobDetails = ({ eachJobData }) => {

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title={eachJobData.employer_name ? eachJobData.employer_name : null}
          subheader={eachJobData.job_city}
        />
        <CardContent>
          <Typography variant="body1">
            {eachJobData.job_description.slice(0, 300).concat("...")}
          </Typography>
         
        </CardContent>
      </Card>
    </>
  );
};


