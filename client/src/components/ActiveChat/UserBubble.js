import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Avatar } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: (props) => (props.otherUser ? "flex-start" : "flex-end"),
    marginTop: 20,
    marginRight: "2.5rem",
    marginBottom: 5,
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6,
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
  bubble: {
    background: (props) =>
      props.otherUser ? "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)" : "#F4F6FA",
    borderRadius: (props) => (props.otherUser ? "0 10px 10px 10px" : "10px 10px 0 10px"),
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: (props) => (props.otherUser ? "#FFFFFF" : "#91A3C0"),
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  visual: {
    display: "flex",
    marginBottom: 5,
  },
  image: {
    objectFit: "cover",
    width: (props) => (props.length < 2 ? "9.375rem" : "calc(150px * 0.75)"),
    marginLeft: (props) => (props.otherUser ? 0 : "5px"),
    marginRight: (props) => (props.otherUser ? "5px" : 0),
    height: "auto",
    background: "#F4F6FA",
    borderRadius: (props) => (props.otherUser ? "10px 0px 10px 10px" : "10px 10px 10px 0px"),
    transform: "matrix(-1, 0, 0, 1, 0, 0)",
  },
}));

const UserBubble = (props) => {
  const classes = useStyles(props);
  const { text, time, attachments, otherUser, length } = props;

  let content;

  if (attachments === null) {
    content = (
      <Box className={classes.root}>
        {otherUser && (
          <Avatar alt={otherUser.username} src={otherUser.photoUrl} className={classes.avatar} />
        )}
        <Box>
          {
            <Typography className={classes.date}>
              {otherUser && otherUser.username} {time}
            </Typography>
          }

          <Box className={classes.bubble}>
            <Typography className={classes.text}>{text}</Typography>
          </Box>
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
              className={classes.image}
              length={length}
            />
          ))}
        </Box>
        {text && attachments.length < 2 && (
          <Box className={classes.bubble}>
            <Typography className={classes.text}>{text}</Typography>
          </Box>
        )}
        {attachments.length > 1 && <Typography className={classes.date}>{time}</Typography>}
      </Box>
    );
  }

  return content;
};

export default UserBubble;
