import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Companies from "./Companies";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/companies" exact component={Companies} />
      </Switch>
    </div>
  );
}

export default App;
