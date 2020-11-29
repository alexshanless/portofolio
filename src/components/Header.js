import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../images/avatar.png";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: "100px",
    height: "100px",
    margin: "5px",
  },
  title: {
    color: "gold",
  },
  subtitle: {
    color: "teal",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "27%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Alex Bilba" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Alex Bol", "Alex Bilba"]} typeSpeed={100} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={["Web Developer", "MERN Stack", "Google-Fu Master"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
