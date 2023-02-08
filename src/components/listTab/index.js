import "./style.css";
import Dots from "../../assets/dots.png";
import Task from "../task";
import { useState, useEffect } from "react";

export default function ListTab({ title, type, tasks }) {
  const [openedTask, setOpenedTask] = useState("none");
  console.log("tasks");
  console.log(tasks);
  // useEffect(() => {
  //   console.log(tasks);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div className="tab_container">
      <div className="tab_wrapper">
        <div className="tab_header">
          <h1>{title}</h1>
          <img src={Dots} alt="" />
        </div>
        <div className="list_container">
          {tasks.length > 0 &&
            tasks.map((curr, i) => (
              <Task
                key={`${type}${i}`}
                data={curr}
                openedTask={openedTask}
                setOpenedTask={setOpenedTask}
              />
            ))}
        </div>
      </div>
      <div className="transparency"></div>
    </div>
  );
}
