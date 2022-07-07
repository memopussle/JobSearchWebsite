import {  alpha, makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    marginTop: "5rem",
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
    transform: "translate(1rem, 1.25rem)",
  },
  submitButton: {
    backgroundColor: "#fa7436",
    "&:hover": { backgroundColor: "#fc824a" },
    color: "#ffffff",
    marginTop: "1.5rem"
  },
  list: {
    marginTop: "2rem",
    height: "50vh",
    overflow: "auto",
  },

  inputInput: {
    width: "100%",
    border: "1px solid #b5b5b5",
    borderRadius: "10px",
    textIndent: "5rem",
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    margin: "0.5rem 0",
  },

  selectOption: {
    width: " 10vw",
    marginTop: "0.25rem"
  },

  label: {
    marginTop: "0.5rem",
    color: "black"
   
  },
  remoteMargin: {
    marginRight: "2rem"
  }

}));