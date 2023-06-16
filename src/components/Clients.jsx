"use client";

import Link from "next/link";
import { useState, createContext, useContext } from "react";

const Context = createContext({ user: {} });

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

  const { user } = useContext(Context);

  return (
    <>
      {user.id ? (
        <button className="btn" onClick={logOutHandler}>
          LogOut
        </button>
      ) : (
        <Link href={"/login"}>Login</Link>
      )}
    </>
  );
};

export const TodoBtn = ({ id, completed }) => {
  const deleteHandler = (id) => {
    alert(`Deleting todo with ,${id}`);
  };
  return (
    <>
      <input type="checkbox" checked={completed} />
      <button
        className="btn"
        onClick={() => {
          deleteHandler(id);
        }}
      >
        Delete
      </button>
    </>
  );
};
