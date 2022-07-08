import { makeStyles } from "@material-ui/core/styles";


//theme.breakpoints.up("sm") :sm and up breakpoint
export default makeStyles((theme) => ({
  header: {
    backgroundColor: "#fa7436",
    color: "#fefcfb",
    boxShadow: "none",
  },

  title: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  menuIcon: {
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
