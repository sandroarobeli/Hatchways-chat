import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, CssBaseline } from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";
import SideBanner from "./components/Authentication/SideBanner";
import FormSelector from "./components/Authentication/FormSelector";
import AuthForm from "./components/Authentication/AuthForm";

const Login = (props) => {
  const history = useHistory();
  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container justify="center" spacing={1}>
      <CssBaseline />
      <Grid item xs={12} sm="auto">
        <SideBanner />
      </Grid>
      <Grid item xs={12} sm>
        <Grid container spacing={1} direction="column">
          <Grid item xs={12}>
            <FormSelector
              textContent={"Don't have an account?"}
              buttonContent={"Create account"}
              onClick={() => history.push("/register")}
            />
          </Grid>
          <Grid item xs={12}>
            <form onSubmit={handleLogin}>
              <AuthForm
                textContent={"Welcome back!"}
                buttonContent={"Login"}
                isRegisterForm={false}
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
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
