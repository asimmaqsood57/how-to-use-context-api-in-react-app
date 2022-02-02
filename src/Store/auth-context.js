import React, { useState } from "react";
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
