import "./style.css";
import uncheckedot from "../../assets/img/unchecked-dot.png";

export default function dragButton() {
  return (
    <div className="dragButton">
      <img src={uncheckedot} alt="" />
      <div className="dot"></div>
      <p>Start dragging this task to create a new one</p>
    </div>
  );
}
