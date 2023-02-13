import "./style.css";
import Dots from "../../assets/img/dots.png";
import Task from "../task";
import { useState, useEffect } from "react";
import done_title_symbol from "../../assets/img/done-symbol.png";

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
          <span>
            {type === "done" && (
              <img src={done_title_symbol} alt="done_title_symbol" />
            )}
            <h1>{title}</h1>
          </span>
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
                type={type}
              />
            ))}
        </div>
      </div>
      <div className="transparency"></div>
    </div>
  );
}
