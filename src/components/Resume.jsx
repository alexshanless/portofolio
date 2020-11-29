import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Navbar from "./Navbar";
import bg from '../images/under-construction-signage-on-laptop-keyboard-211122.jpg'

const useStyles = makeStyles((theme) => ({

  title: {
    color: "white",
    padding: "0",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: '#233'
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />

      <Box component="header" style={{ background: '#233', height: "100vh" }}>
        <Typography variant="h3" align="center">
          <br /> About Me
        </Typography>
        <Box component="div">
          <Typography variant="h6" align="center" className={classes.title}>
            A versatile and passionate Full-Stack Software Developer committed
            to delivering functional clean code. Seeking work alongside
            industry-leading thinkers to craft intuitive, quality software.{" "}
          </Typography>
          <br />
          <Typography variant="h4" align="center">
            TECHNICAL SKILLS
            <Grid container spacing={3}>
              <Grid item xs>
                <Paper className={classes.paper}>HTML</Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper}>CSS</Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper}>Javascript</Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper}>React</Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper}>Node.JS</Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper}>Express</Paper>
              </Grid>
            </Grid>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
