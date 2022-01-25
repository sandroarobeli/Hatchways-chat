import React, { useState } from "react";
import { FormControl, FilledInput } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { postMessage } from "../../store/utils/thunkCreators";
import PhotoInput from "./PhotoInput";

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: 20,
  },
}));

const Input = (props) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { postMessage, otherUser, conversationId, user } = props;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handlePictureUpload = (event) => {
    const files = Array.from(event.target.files);
    const formData = new FormData();
    const fetchArray = [];

    const typeIsAllowed = files.every(
      (file) =>
        file.type === "image/png" ||
        file.type === "image/jpeg" ||
        file.type === "image/jpg" ||
        file.type === "image/gif"
    );

    files.forEach((file, index) => {
      if (typeIsAllowed) {
        setIsLoading(true);
        formData.append("file", file);
        formData.append("upload_preset", "docs_upload_example_us_preset");
      }
      fetchArray[index] = fetch("https://api.cloudinary.com/v1_1/demo/image/upload", {
        method: "POST",
        body: formData,
      }).then((response) => response.json());
    });

    const allImages = Promise.all(fetchArray);
    allImages
      .then((images) => {
        let imageUrls = images.map((image) => image.secure_url);
        setAttachments(imageUrls);
        setIsLoading(false);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: event.target.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments,
    };

    await postMessage(reqBody);
    setText("");
    setAttachments([]);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder={isLoading ? "Uploading images. Please wait..." : "Type something..."}
          disabled={isLoading ? true : false}
          value={text}
          name="text"
          onChange={handleChange}
          endAdornment={<PhotoInput onPictureUpload={handlePictureUpload} />}
        />
      </FormControl>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postMessage: (message) => {
      dispatch(postMessage(message));
    },
  };
};

export default connect(null, mapDispatchToProps)(Input);
