import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  jobList: {
    boxShadow: "0px 1rem 1.5rem #c7c3c3",
    margin: "1rem",
  },
  jobDescription: {
    padding: "2rem 0",
  },
  button: {
    backgroundColor: "#fa7436",
    "&:hover": { backgroundColor: "#fc824a" },
    color: "#ffffff",
  },
  jobBenefits: {
    backgroundColor: "#fc824a",
    "&:hover": { backgroundColor: "#ff9361" },
    color: "#ffffff",
    margin: "0.25rem",
  },
  employmentType: {
    margin: "1rem 0",
  },
  postDate: {
    margin: "1rem 0"
  }
}));