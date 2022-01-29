import React, { useState } from "react";
import { FormControl, FilledInput } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { postMessage } from "../../store/utils/thunkCreators";
import PhotoInput from "./PhotoInput";
import SnackbarSuccess from "../SnackbarSuccess";
import SnackbarError from "../SnackbarError";
import axios from "axios";

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
  const [successBarOpen, setSuccessBarOpen] = useState(false);
  const [errorBarOpen, setErrorBarOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { postMessage, otherUser, conversationId, user } = props;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handlePictureUpload = async (event) => {
    const files = Array.from(event.target.files);
    const formData = new FormData();
    const promises = [];

    const typeIsAllowed = files.every(
      (file) =>
        file.type === "image/png" ||
        file.type === "image/jpeg" ||
        file.type === "image/jpg" ||
        file.type === "image/gif"
    );

    files.forEach((file) => {
      if (typeIsAllowed) {
        setIsLoading(true);
        formData.append("file", file);
        formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
      }
      const axiosInstance = axios.create({
        transformRequest: (data, headers) => {
          delete headers.common["x-access-token"];
          return data;
        },
        data: formData,
      });
      promises.push(axiosInstance.post(process.env.REACT_APP_CLOUD_NAME, formData, axiosInstance));
    });

    try {
      const allImages = await Promise.all(promises);
      const imageUrls = allImages.map((image) => image.data.secure_url);
      if (imageUrls.length === 0) {
        setErrorMessage("Attachment failed. Please try again.");
        setErrorBarOpen(true);
      }

      setAttachments(imageUrls);
      setIsLoading(false);
      setSuccessBarOpen(true);
    } catch (error) {
      setErrorMessage(error.message);
      setErrorBarOpen(true);
    }
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
      {successBarOpen && (
        <SnackbarSuccess setSnackBarOpen={setSuccessBarOpen} snackBarOpen={successBarOpen} />
      )}
      {errorBarOpen && (
        <SnackbarError
          setSnackBarOpen={setErrorBarOpen}
          errorMessage={errorMessage}
          snackBarOpen={errorBarOpen}
        />
      )}
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
