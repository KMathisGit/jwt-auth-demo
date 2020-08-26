import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

function SessionDetails({ userContext, accessToken }) {
  const history = useHistory();
  const details = {
    "Logged In": userContext.isLoggedIn,
    User: userContext.user,
    "Access Token": accessToken,
  };

  return (
    <div className="session-details">
      <h2>Session Details</h2>
      <pre>{JSON.stringify(details, null, 2)}</pre>
      {userContext.isLoggedIn && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            history.push("/login");
          }}
          size="large"
        >
          Logout
        </Button>
      )}
    </div>
  );
}

export default SessionDetails;
