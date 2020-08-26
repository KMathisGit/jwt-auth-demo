import React from "react";
import { useHistory } from "react-router-dom";

function NotFound(props) {
  const history = useHistory();

  history.push("/");

  return null;
}

export default NotFound;
