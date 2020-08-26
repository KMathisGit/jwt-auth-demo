import React, { useContext, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Companies from "./Companies";
import Home from "./Home";
import { UserContext } from "./UserContext";
import { validateToken, setAuthToken } from "./api/Api";
import SessionDetails from "./SessionDetails";
import NotFound from "./NotFound";

function App() {
  const { userContext, setUserContext } = useContext(UserContext);
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
      validateToken(accessToken).then((response) => {
        if (response && response.status === 200) {
          setUserContext({
            isLoggedIn: true,
            user: response.data.username,
          });
          setAuthToken(accessToken);
        } else {
          setDefaultLoggedOut();
        }
      });
    } else {
      setDefaultLoggedOut();
    }
  }, []);

  // check if accessToken is valid
  if (!userContext) return null;

  return (
    <div className="App">
      <h1 className="App-header">
        React Mock <br /> Auth Login App
      </h1>
      <Switch>
        <Route path="/" exact component={Companies} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
      <pre>
        This application is a simple demonstration of using a json web token
        (JWT) to authenticate a client in order to access data. This application
        is configured to store JWT in local storage to keep you logged in across
        sessions - as long as token is not expired (1 hour expiration).
      </pre>
      <SessionDetails userContext={userContext} accessToken={accessToken} />
    </div>
  );
}

export default App;
