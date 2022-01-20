import React from "react";
import { Box, Typography, Card, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Image from "../../assets/bg-img.png";
import BubbleLogo from "../../assets/bubble.svg";

const useStyles = makeStyles((theme) => ({
  banner: {
    width: "100%",
    height: "50vh",
    backgroundImage: `url(${Image})`,
    borderRadius: 0,
    [theme.breakpoints.up("sm")]: {
      marginLeft: 0,
      minWidth: "18rem",
      width: "41.5vw",
      height: "100vh",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  },
  bannerContent: {
    background: "linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)",
    width: "100%",
    height: "50vh",
    opacity: 0.85,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      height: "100vh",
    },
  },
  bannerLogo: {
    width: "4.1875rem",
    height: "4.125rem",
    position: "relative",
    top: "calc(50vh * 0.285)",
    [theme.breakpoints.up("sm")]: {
      top: "calc(100vh * 0.285)",
    },
  },
  bannerTextBox: {
    position: "relative",
    top: "calc(50vh * 0.285 + 39.5px)",
    [theme.breakpoints.up("sm")]: {
      top: "calc(100vh * 0.285 + 39.5px)",
    },
  },
  bannerText: {
    fontWeight: 400,
    textAlign: "center",
    fontSize: "1.625rem",
    lineHeight: "2.5rem",
    color: "#ffffff",
  },
}));

const SideBanner = () => {
  const classes = useStyles();

  return (
    <Card className={classes.banner}>
      <Box className={classes.bannerContent}>
        <CardMedia component="img" image={BubbleLogo} alt="" className={classes.bannerLogo} />
        <Box className={classes.bannerTextBox}>
          <Typography className={classes.bannerText}>Converse with anyone</Typography>
          <Typography className={classes.bannerText}>with any language</Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default SideBanner;
