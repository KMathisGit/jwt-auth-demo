import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { useHistory } from "react-router-dom";

function Home(props) {
  const { userContext, setUserContext } = useContext(UserContext);
  const history = useHistory();

  if (!userContext || !userContext.isLoggedIn) {
    history.push("/login");
  }

  return <h2>Home</h2>;
}

export default Home;
