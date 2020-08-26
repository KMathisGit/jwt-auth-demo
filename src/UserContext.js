import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const initState = null;

  const [userContext, setUserContext] = useState(initState);

  return (
    <UserContext.Provider
      value={{
        userContext: userContext,
        setUserContext: setUserContext,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
