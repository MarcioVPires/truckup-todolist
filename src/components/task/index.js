import "./style.css";
import { useState } from "react";
import SaveBTN from "../buttons/save";
import DiscardBTN from "../buttons/discard";
import todo_list_icon from "../../assets/img/checked-dot.png";
import progress_list_icon from "../../assets/img/unchecked-dot.png";
import done_list_icon from "../../assets/img/done-dot.png";

export default function Task({ type, data, active, toggle, listID }) {
  const listIcon = {
    done: done_list_icon,
    progress: progress_list_icon,
    todo: todo_list_icon,
  };

  return (
    <div className="task_wrapper">
      <div className={`task_container ${!active && "task_container_collapse"}`}>
        <div className="title_container" onClick={() => toggle(listID)}>
          <img className="listIcon" src={listIcon[type]} alt="" />
          <h1 className={active ? "task_title" : "task_title_collapsed"}>
            {data.title}
          </h1>
        </div>

        <div style={{ display: active ? "block" : "none" }}>
          <div className="line" />
          <textarea
            name="description"
            id="description"
            placeholder="Description"
          ></textarea>
          <div className="task_buttons_wrapper">
            <DiscardBTN />
            <SaveBTN />
          </div>
        </div>
      </div>
    </div>
  );
}
