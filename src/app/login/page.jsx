import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="login">
      <section>
        <form>
          <input type="email" placeholder="Enter your Email" />
          <input type="password" placeholder="Enter your Password" />

          <button type="submit">Login</button>

          <p>OR</p>
          <Link href={"/register"}>New User</Link>
        </form>
      </section>
    </div>
  );
};

export const metadata = {
  title: "Login",
  description: "Login for Full Stack To do app",
};

export default page;
