import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  particleCanva: {
    position: "absolute",
    opacity: "0.3",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Particles
        canvasClassName={classes.particleCanva}
        params={{
          particles: {
            number: {
              value: 25,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 10,
                color: "blue",
              },
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: true,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: true,
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
    </>
  );
};

export default Home;
