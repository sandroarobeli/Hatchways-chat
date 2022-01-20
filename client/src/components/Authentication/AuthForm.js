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
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(4),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
      marginRight: "calc((100% - 380px) / 2 + 1.22vw)",
      marginLeft: "calc((100% - 380px) / 2 - 1.22vw)",
      marginBottom: theme.spacing(13.25),
      width: "380px",
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
  },
  formInput: {
    width: "100%",
    height: "4rem",
    marginTop: theme.spacing(1),
  },
  formInputText: {
    paddingLeft: theme.spacing(0.625),
    fontWeight: 600,
    fontSize: "0.875rem",
    lineHeight: "1.1875rem",
  },
  formInputLabel: {
    paddingLeft: theme.spacing(0.625),
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: "1.1875rem",
  },
  formInputHelper: {
    position: "absolute",
    bottom: "7px",
    right: "7px",
    fontWeight: 600,
    fontSize: "0.75rem",
    lineHeight: "1rem",
    textAlign: "center",
    color: "#3A8DFF",
  },
  formButton: {
    position: "relative",
    marginTop: theme.spacing(3),
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
      height: "3.5rem",
    },
  },
}));

const AuthForm = (props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={{ xs: 1, sm: 2 }} direction="column" className={classes.form}>
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
            InputProps={{ className: classes.formInputText, color: "#000000" }}
            InputLabelProps={{ className: classes.formInputLabel, color: "secondary" }}
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
              InputProps={{ className: classes.formInputText, color: "#000000" }}
              InputLabelProps={{ className: classes.formInputLabel, color: "secondary" }}
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
                <Typography variant="inherit" onClick={() => console.log("Password reset...")}>
                  Forgot?
                </Typography>
              )
            }
            InputProps={{ className: classes.formInputText, minLength: 6, color: "#000000" }}
            InputLabelProps={{ className: classes.formInputLabel, color: "secondary" }}
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
              InputProps={{ className: classes.formInputText, minLength: 6, color: "#000000" }}
              InputLabelProps={{ className: classes.formInputLabel, color: "secondary" }}
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
