import "./style.css";
import { useState } from "react";
import SaveBTN from "../buttons/save";
import DiscardBTN from "../buttons/discard";
import todo_list_icon from "../../assets/img/checked-dot.png";
import progress_list_icon from "../../assets/img/unchecked-dot.png";
import done_list_icon from "../../assets/img/done-dot.png";

export default function Task({ type, final, data }) {
  const [toggle, setToggle] = useState(false);
  const listIcon = {
    done: done_list_icon,
    progress: progress_list_icon,
    todo: todo_list_icon,
  };

  return (
    <div className="task_wrapper">
      <div className="task_container">
        <div className="title_container">
          <img
            className="listIcon"
            src={listIcon[type]}
            alt=""
            style={{
              right: type === "done" ? "283px" : "292px",
            }}
          />
          <h1 className={!toggle ? "task_title" : "expanded_task_title"}>
            {data.title}
          </h1>
        </div>
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
  );
}
