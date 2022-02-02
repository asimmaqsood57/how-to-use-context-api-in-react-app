import React, { useContext } from "react";

import classes from "./NavBar.module.css";

import AuthContext from "../Store/auth-context";

const NavBar = () => {
  const ctx = useContext(AuthContext);

  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact {ctx.isLoggedIn}</li>
      </ul>
    </nav>
  );
};

export default NavBar;
