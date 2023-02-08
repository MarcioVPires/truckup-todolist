import { useState } from "react";
import "./style.css";

export default function Task({ type, final, data }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="task_wrapper">
      <h1
        className={!toggle ? "task_title" : "expanded_task_title"}
        onClick={() => setToggle(!toggle)}
      >
        {"•  " + data.title}{" "}
      </h1>
    </div>
  );
}
