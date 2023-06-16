import React from "react";
import Form from "./addToDoForm";
const page = () => {
  return (
    <div className="container">
      <Form />
      <section className="todosContainer"></section>
    </div>
  );
};

export default page;
