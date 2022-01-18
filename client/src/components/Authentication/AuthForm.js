import React from "react";
import {
  Grid,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    position: "relative",
    marginTop: "0.25rem",
    marginBottom: "2rem",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    [theme.breakpoints.up("sm")]: {
      position: "relative",
      marginTop: "5rem",
      marginRight: "1rem",
      marginLeft: "calc(6.06rem + 6.06rem * 0.095)",
      marginBottom: "1rem",
      width: "37.1%",
      minWidth: "20rem",
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  formWelcome: {
    fontWeight: 600,
    fontSize: "1.625rem",
    lineHeight: "2.5rem",
    color: "#000000",
    [theme.breakpoints.up("sm")]: {
      fontWeight: 600,
      fontSize: "1.625rem",
      lineHeight: "2.5rem",
      color: "#000000",
    },
  },
  formInput: {
    width: "100%",
    height: "4.125rem",
    marginTop: "1.5rem",
  },
  formInputText: {
    paddingLeft: "5px",
    fontWeight: 600,
    fontSize: "0.875rem",
    lineHeight: "1.1875rem",
    color: "#000000 !important",
  },
  formInputLabel: {
    paddingLeft: "5px",
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: "1.1875rem",
    color: "#b0b0b0 !important",
  },
  formInputHelper: {
    position: "absolute",
    bottom: "7px",
    right: "7px",
    fontWeight: 600,
    fontSize: "0.75rem",
    lineHeight: "1rem",
    textAlign: "center",
    color: "#3A8DFF !important",
  },
  formButton: {
    position: "relative",
    marginTop: "1.5rem",
    marginLeft: "calc((100% - 10rem) / 2)",
    width: "10rem",
    height: "3rem",
    background: "#3A8DFF",
    color: "#ffffff",
    borderRadius: "3px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.35)",
    "&:hover": {
      color: "#3A8DFF",
      background: "#ffffff",
    },
    "&active": {
      color: "#3A8DFF",
      background: "#ffffff",
    },
    [theme.breakpoints.up("sm")]: {
      position: "relative",
      marginTop: "1.5rem",
      marginLeft: "calc((100% - 10rem) / 2)",
      width: "10rem",
      height: "3.5rem",
      background: "#3A8DFF",
      color: "#ffffff",
      borderRadius: "3px",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.35)",
      "&:hover": {
        color: "#3A8DFF",
        background: "#ffffff",
      },
      "&active": {
        color: "#3A8DFF",
        background: "#ffffff",
      },
    },
  },
}));

const AuthForm = (props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={{ xs: 1, sm: 3 }} direction="column" className={classes.form}>
      <Grid item xs={12}>
        <Typography className={classes.formWelcome}>{props.textContent}</Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControl margin="normal" required className={classes.formInput}>
          <TextField
            label="Username"
            aria-label="username"
            type="text"
            name="username"
            fullWidth
            required
            InputProps={{ className: classes.formInputText }}
            InputLabelProps={{ className: classes.formInputLabel }}
          />
        </FormControl>
      </Grid>
      {props.isRegisterForm && (
        <Grid item xs={12}>
          <FormControl margin="normal" required className={classes.formInput}>
            <TextField
              label="E-mail address"
              aria-label="e-mail address"
              type="email"
              name="email"
              fullWidth
              required
              InputProps={{ className: classes.formInputText }}
              InputLabelProps={{ className: classes.formInputLabel }}
            />
          </FormControl>
        </Grid>
      )}
      <Grid item xs={12}>
        <FormControl
          margin="normal"
          required
          className={classes.formInput}
          error={props.isRegisterForm ? !!props.formErrorMessage.confirmPassword : undefined}
        >
          <TextField
            label="Password"
            aria-label="password"
            type="password"
            name="password"
            fullWidth
            required
            helperText={
              !props.isRegisterForm && (
                <span onClick={() => console.log("Password reset...")}>Forgot?</span>
              )
            }
            InputProps={{ className: classes.formInputText, minLength: 6 }}
            InputLabelProps={{ className: classes.formInputLabel }}
            FormHelperTextProps={{ className: classes.formInputHelper }}
          />
          {props.isRegisterForm && (
            <FormHelperText>{props.formErrorMessage.confirmPassword}</FormHelperText>
          )}
        </FormControl>
      </Grid>
      {props.isRegisterForm && (
        <Grid item xs={12}>
          <FormControl
            margin="normal"
            required
            className={classes.formInput}
            error={props.isRegisterForm ? !!props.formErrorMessage.confirmPassword : undefined}
          >
            <TextField
              label="Confirm Password"
              aria-label="confirm password"
              type="password"
              name="confirmPassword"
              fullWidth
              required
              InputProps={{ className: classes.formInputText, minLength: 6 }}
              InputLabelProps={{ className: classes.formInputLabel }}
            />
            {props.isRegisterForm && (
              <FormHelperText>{props.formErrorMessage.confirmPassword}</FormHelperText>
            )}
          </FormControl>
        </Grid>
      )}
      <Grid item xs={12}>
        <Button type="submit" variant="contained" size="large" className={classes.formButton}>
          {props.buttonContent}
        </Button>
      </Grid>
    </Grid>
  );
};

export default AuthForm;
