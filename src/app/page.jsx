import React from "react";
import Form from "./addToDoForm";
import { TodoItem } from "@/components/ServerComponents";
const page = () => {
  return (
    <div className="container">
      <Form />
      <section className="todosContainer">
        <TodoItem
          title={"Sample Task"}
          description={"Sample Description"}
          id={"sampleId"}
          completed={true}
        />
      </section>
    </div>
  );
};

export default page;
