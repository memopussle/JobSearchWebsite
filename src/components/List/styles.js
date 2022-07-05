import {  makeStyles, alpha } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    marginTop: "5rem",
  },
  inputForm: {
    display: "flex",
    flexDirection: "column",
  },

  inputInput: {
    margin: "0.5rem 0px 0.5rem 0",
    "&:focus": { paddingLeft: "50px" },
    textIndent: "2rem",
    position: "relative",
  },

  searchIcon: {
    position: "absolute",
    transform: "translate(1rem,1.5rem)",
  },
  locationIcon: {
    position: " absolute",
    transform: "translate(1rem, 5.75rem)",
  },
  submitButton: {
    backgroundColor: "#fa7436",
      "&:hover": { backgroundColor: "#fc824a" },
    color: "#ffffff"
  },
}));