"use client";

import { useState, createContext } from "react";

export const Context = createContext({ user: {} });

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};

export const LogOutBtn = () => {
  const logOutHandler = () => {
    alert("Logged Out");
  };

  return (
    <button className="btn" onClick={logOutHandler}>
      LogOut
    </button>
  );
};
