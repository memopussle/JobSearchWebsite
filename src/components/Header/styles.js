import { alpha, makeStyles } from "@material-ui/core/styles";


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
 

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
