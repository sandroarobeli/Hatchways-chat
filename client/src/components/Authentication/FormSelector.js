import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  selectorContainer: {
    position: "relative",
    marginTop: "calc(50vh * 0.043)",
    height: "3.375rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.up("sm")]: {
      position: "relative",
      marginTop: "calc(100vh * 0.043)",
      marginRight: "calc(100% * 0.041)",
      marginLeft: "5rem",
      height: "3.375rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
  },
  selectorText: {
    fontSize: "0.875rem",
    lineHeight: "1.1875rem",
    fontWeight: 400,
    color: "#b0b0b0",
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.875rem",
      lineHeight: "1.1875rem",
      fontWeight: 400,
      color: "#b0b0b0",
      paddingRight: "1.875rem",
      textAlign: "center",
    },
  },
  selectorButton: {
    width: "10.625rem",
    height: "100%",
    background: "#ffffff",
    borderRadius: "5px",
    boxShadow: "0px 2px 12px rgba(74, 106, 149, 0.2)",
    fontWeight: 600,
    fontSize: "0.875rem",
    lineHeight: "1.1875rem",
    color: "#3A8DFF",
    "&:hover": {
      color: "#ffffff",
      background: "#3A8DFF",
    },
    "&:active": {
      color: "#ffffff",
      background: "#3A8DFF",
    },
    [theme.breakpoints.up("sm")]: {
      width: "10.625rem",
      height: "100%",
      background: "#ffffff",
      borderRadius: "5px",
      boxShadow: "0px 2px 12px rgba(74, 106, 149, 0.2)",
      fontWeight: 600,
      fontSize: "0.875rem",
      lineHeight: "1.1875rem",
      color: "#3A8DFF",
    },
  },
}));

const FormSelector = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.selectorContainer}>
      <Typography className={classes.selectorText}>{props.textContent}</Typography>
      <Button className={classes.selectorButton} onClick={props.onClick}>
        {props.buttonContent}
      </Button>
    </Box>
  );
};

export default FormSelector;
