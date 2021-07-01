import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import { UserContext } from "./UserContext";
import { validateToken, setAuthToken } from "./api/Api";
import SessionDetails from "./SessionDetails";
import NotFound from "./NotFound";

function App() {
  const { userContext, setUserContext } = useContext(UserContext);
  const [checkingToken, setCheckingToken] = useState(true);
  const accessToken = localStorage.getItem("access_token");

  const setDefaultLoggedOut = () => {
    setUserContext({
      isLoggedIn: false,
      user: null,
    });
    localStorage.removeItem("access_token");
  };

  useEffect(() => {
    if (accessToken) {
      setAuthToken(accessToken);
      validateToken(accessToken).then((response) => {
        if (response && response.status === 200) {
          setUserContext({
            isLoggedIn: true,
            user: response.data.username,
          });
          setCheckingToken(false);
        } else {
          setDefaultLoggedOut();
        }
        setCheckingToken(false);
      });
    } else {
      setDefaultLoggedOut();
      setCheckingToken(false);
    }
  }, []);

  // check if accessToken is valid
  if (checkingToken) return null;

  return (
    <div className="App">
      <h1 className="App-header">
        JWT Auth
        <br /> Demonstration
      </h1>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => <Home {...props} userContext={userContext} />}
        />
        <Route
          path="/login"
          render={(props) => (
            <Login {...props} setUserContext={setUserContext} />
          )}
        />
        <Route
          path="/register"
          render={(props) => (
            <Register {...props} setUserContext={setUserContext} />
          )}
        />
        <Route component={NotFound} />
      </Switch>
      <SessionDetails userContext={userContext} accessToken={accessToken} />
      <pre className="app-description">
        This application is a simple demonstration of using a json web token
        (JWT) to authenticate a client in order to access data. This application
        is configured to store JWT in local storage to keep you logged in across
        sessions - as long as token is not expired (1 hour expiration).
      </pre>
    </div>
  );
}

export default App;
