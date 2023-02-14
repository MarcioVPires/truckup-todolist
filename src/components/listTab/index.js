import "./style.css";
import Dots from "../../assets/img/dots.png";
import Task from "../task";
import { useState } from "react";
import done_title_symbol from "../../assets/img/done-symbol.png";
import { useEffect } from "react";

export default function ListTab({ title, type, tasks }) {
  const [activeTask, setActiveTask] = useState("none");

  function toggle(listID) {
    listID === activeTask ? setActiveTask("none") : setActiveTask(listID);
  }

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
                listID={`${type}${i}`}
                data={curr}
                type={type}
                active={activeTask == `${type}${i}` ? true : false}
                toggle={toggle}
              />
            ))}
        </div>
      </div>
      <div className="transparency"></div>
    </div>
  );
}
