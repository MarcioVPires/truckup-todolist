import "./style.css";
import Dots from "../../assets/dots.png";
import Task from "../task";
import { useState, useEffect } from "react";

export default function ListTab({ type }) {
  const [tasks, setTasks] = useState(() => {
    const list = JSON.parse(localStorage.getItem("task-list"));

    return list ? list : { type: "todo", name: "no task" };
  });

  useEffect(() => {
    console.log(tasks);
  }, []);

  return (
    <div className="tab_container">
      <div className="tab_wrapper">
        <div className="tab_header">
          <h1>{type}</h1>
          <img src={Dots} alt="" />
        </div>
        <div className="list_container">
          {tasks &&
            tasks.map((curr) => {
              return (
                curr.type === type && <Task data={curr} setTasks={setTasks} />
              );
            })}
        </div>
      </div>
      <div className="transparency"></div>
    </div>
  );
}
