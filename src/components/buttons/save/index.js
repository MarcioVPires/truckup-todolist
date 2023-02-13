import "./style.css";
import save_icon from "../../../assets/img/save-task-symbol.png";

export default function saveBTN() {
  return (
    <div className="save_task_btn">
      <img src={save_icon} alt="save icon" />
      <p>Save Task</p>
    </div>
  );
}
