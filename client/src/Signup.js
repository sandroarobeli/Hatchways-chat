import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, CssBaseline } from "@material-ui/core";
import { register } from "./store/utils/thunkCreators";
import SideBanner from "./components/Authentication/SideBanner";
import FormSelector from "./components/Authentication/FormSelector";
import AuthForm from "./components/Authentication/AuthForm";

const Login = (props) => {
  const history = useHistory();
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container justify="center" spacing={{ xs: 1, sm: 2 }}>
      <CssBaseline />
      <Grid item xs={12} sm={4}>
        <SideBanner />
      </Grid>
      <Grid item xs={12} sm={8}>
        <Grid container spacing={1} direction="column">
          <Grid item xs={12}>
            <FormSelector
              textContent={"Already have an account?"}
              buttonContent={"Login"}
              onClick={() => history.push("/login")}
            />
          </Grid>
          <Grid item xs={12}>
            <form onSubmit={handleRegister}>
              <AuthForm
                textContent={"Create an account."}
                buttonContent={"Create"}
                isRegisterForm={true}
                formErrorMessage={formErrorMessage}
              />
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
