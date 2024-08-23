import React from "react";
import scss from "./page.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
п
const page = () => {
  return (
    <div className={scss.todo}>
      <div className="container">
        <div className={scss.context}>
          <div className={scss.todoBlock}>
            <h1>CREATE</h1>
            <input type="text" placeholder="name" />
            <input type="text" placeholder="lastName" />
            <input type="text" placeholder="img" />
            <button className={scss.todoButton}>create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
