import React from "react";
import { Box } from "@material-ui/core";
import UserBubble from "./UserBubble";
import moment from "moment";

const Messages = (props) => {
  const { messages, otherUser, userId } = props;

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format("h:mm");

        return message.senderId === userId ? (
          <UserBubble
            key={message.id}
            text={message.text}
            time={time}
            attachments={message.attachments}
            length={message.attachments ? message.attachments.length : 1}
          />
        ) : (
          <UserBubble
            key={message.id}
            text={message.text}
            time={time}
            attachments={message.attachments}
            length={message.attachments ? message.attachments.length : 1}
            otherUser={otherUser}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
