import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Avatar } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginTop: 20,
    marginRight: "2.5rem",
    marginBottom: 5,
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px",
    marginBottom: 5,
  },
  visual: {
    display: "flex",
    marginBottom: 5,
  },
  single: {
    objectFit: "cover",
    width: "9.375rem",
    marginLeft: "5px",
    height: "auto",
    background: "#F4F6FA",
    borderRadius: "10px 10px 10px 0px",
    transform: "matrix(-1, 0, 0, 1, 0, 0)",
  },
  multiple: {
    objectFit: "cover",
    width: "calc(150px * 0.75)",
    marginLeft: "5px",
    height: "auto",
    background: "#F4F6FA",
    borderRadius: "10px 10px 10px 0px",
    transform: "matrix(-1, 0, 0, 1, 0, 0)",
  },
  senderAvatar: {
    width: 20,
    height: 20,
    marginTop: 5,
  },
}));

const SenderBubble = (props) => {
  const classes = useStyles();
  const { time, text, attachments, senderUrl, senderName } = props;

  let content;
  if (attachments === null) {
    content = (
      <Box className={classes.root}>
        <Typography className={classes.date}>{time}</Typography>
        <Box className={classes.bubble}>
          <Typography className={classes.text}>{text}</Typography>
        </Box>
      </Box>
    );
  } else {
    content = (
      <Box className={classes.root}>
        {attachments.length < 2 && <Typography className={classes.date}>{time}</Typography>}
        {text && attachments.length > 1 && (
          <Box className={classes.bubble}>
            <Typography className={classes.text}>{text}</Typography>
          </Box>
        )}
        <Box className={classes.visual}>
          {attachments.map((url) => (
            <Avatar
              key={url}
              variant="square"
              alt={url}
              src={url}
              className={attachments.length > 1 ? classes.multiple : classes.single}
            />
          ))}
        </Box>
        {text && attachments.length < 2 && (
          <Box className={classes.bubble}>
            <Typography className={classes.text}>{text}</Typography>
          </Box>
        )}
        {attachments.length > 1 && <Typography className={classes.date}>{time}</Typography>}
        {attachments.length > 0 && (
          <Avatar alt={senderName} src={senderUrl} className={classes.senderAvatar} />
        )}
      </Box>
    );
  }

  return content;
};

export default SenderBubble;
