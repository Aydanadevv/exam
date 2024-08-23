import React from "react";
import scss from "./todo.module.scss";

const todo = () => {
  return (
    <div className={scss.todo}>
      <div className="container">
        <div className={scss.context}>
          <h1>TODO</h1>
        </div>
      </div>
    </div>
  );
};

export default todo;
