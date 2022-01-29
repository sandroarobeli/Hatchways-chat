import React from "react";
import Box from "@material-ui/core/Box";
import SvgIcon from "@material-ui/core/SvgIcon";
import IconButton from "@material-ui/core/IconButton";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAlt";

// For some reason material-ui v4 doesn't have this icon yet...
const ContentCopyIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
    </SvgIcon>
  );
};

const PhotoInput = (props) => {
  return (
    <Box style={{ display: "flex" }}>
      <IconButton component="div" disableRipple>
        <SentimentSatisfiedAltIcon color="secondary" width="22px" height="22px" />
      </IconButton>
      <label htmlFor="multiPicture">
        <input
          style={{ display: "none" }}
          type="file"
          onChange={props.onPictureUpload}
          multiple
          id="multiPicture"
          accept="image/*"
        />
        <IconButton component="div" disableRipple>
          <ContentCopyIcon color="secondary" width="22px" height="22px" />
        </IconButton>
      </label>
    </Box>
  );
};

export default PhotoInput;
