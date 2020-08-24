import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Card, CardContent, TextField, Button } from "@material-ui/core";
import { loginUser, setAuthToken } from "./api/Api";
import { useHistory } from "react-router-dom";

const loginSchema = yup.object().shape({
  username: yup.string().required().min(5),
  password: yup.string().min(5),
});

function Login(props) {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    validationSchema: loginSchema,
  });
  const [badLoginState, setBadLoginState] = useState(false);

  const attemptLogin = (data) => {
    loginUser(data).then((response) => {
      debugger;
      if (response.status === 200) {
        setAuthToken(response.data["access_token"]);
        history.push("/companies");
      } else {
        setBadLoginState(true);
      }
    });
  };

  return (
    <div className="form-container">
      <Card style={{ width: "100%" }} elevation={2}>
        <h2>Login Form</h2>
        <CardContent>
          {badLoginState && (
            <h3 style={{ color: "red", margin: "0 0 8px 0" }}>
              Incorrect username and password!
            </h3>
          )}
          <form onSubmit={handleSubmit(attemptLogin)}>
            <TextField
              name="username"
              label="Username"
              variant="outlined"
              inputRef={register}
              margin="dense"
              error={!!errors.username}
              helperText={!!errors.username ? errors.username.message : null}
              style={{ width: "400px" }}
            />
            <br />
            <TextField
              name="password"
              type="password"
              label="Password"
              variant="outlined"
              inputRef={register}
              margin="dense"
              error={!!errors.password}
              helperText={!!errors.password ? errors.password.message : null}
              style={{ width: "400px" }}
            />

            <br />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              size="large"
              style={{
                paddingLeft: "32px",
                paddingRight: "32px",
                margin: "16px",
              }}
            >
              Login
            </Button>
            <br />
            <Button
              variant="text"
              size="large"
              color="primary"
              onClick={() => history.push("/register")}
            >
              Need to register?
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
