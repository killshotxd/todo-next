import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="login">
      <section>
        <form>
          <input type="email" placeholder="Enter your Email" />
          <input type="password" placeholder="Enter your Password" />

          <button type="submit">Register</button>

          <p>OR</p>
          <Link href={"/login"}>Already Registered ?</Link>
        </form>
      </section>
    </div>
  );
};

export const metadata = {
  title: "Register",
  description: "Register for Full Stack To do app",
};

export default page;
