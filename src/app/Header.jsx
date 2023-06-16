import Link from "next/link";
import React from "react";
import { LogOutBtn } from "../components/Clients";
const header = () => {
  return (
    <div className="header">
      <div>
        <h2>Todo</h2>
      </div>

      <article>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>

        <LogOutBtn />
      </article>
    </div>
  );
};

export default header;
