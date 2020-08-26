import React, { useState, useContext, useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Card, CardContent, TextField, Button } from "@material-ui/core";
import { loginUser, setAuthToken } from "./api/Api";
import { useHistory } from "react-router-dom";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";

const loginSchema = yup.object().shape({
  username: yup.string().required().min(5),
  password: yup.string().min(5),
});

function Login(props) {
  const { userContext, setUserContext } = useContext(UserContext);

  // if user comes to login page ensure a logged out state is in effect
  useEffect(() => {
    setUserContext({
      isLoggedIn: false,
      user: null,
    });
    localStorage.removeItem("access_token");
  }, []);

  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    validationSchema: loginSchema,
  });
  const [badLoginState, setBadLoginState] = useState(false);

  const attemptLogin = (data) => {
    loginUser(data).then((response) => {
      if (response.status === 200) {
        setAuthToken(response.data["access_token"]);
        setUserContext({
          isLoggedIn: true,
          user: data.username,
        });
        toast.success("Nice! You logged in and now have an access token.");
        history.push("/companies");
      } else {
        setBadLoginState(true);
      }
    });
  };

  return (
    <>
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
                defaultValue="admin"
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
                defaultValue="admin"
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
      {/* <Button variant="text" onClick={() => history.push("/companies")}>
        Companies page
      </Button> */}
    </>
  );
}

export default Login;
