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
      width: "100%",
      minWidth: "18rem",
      height: "100vh",
      backgroundImage: `url(${Image})`,
      borderRadius: 0,
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
      background: "linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)",
      width: "100%",
      height: "100vh",
      opacity: 0.85,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  bannerLogo: {
    width: "4.1875rem",
    height: "4.125rem",
    position: "relative",
    top: "calc(50vh * 0.285)",
    [theme.breakpoints.up("sm")]: {
      position: "relative",
      top: "calc(100vh * 0.285)",
      width: "4.1875rem",
      height: "4.125rem",
    },
  },
  bannerTextBox: {
    position: "relative",
    top: "calc(50vh * 0.436)",
    [theme.breakpoints.up("sm")]: {
      position: "relative",
      top: "calc(100vh * 0.436)",
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
