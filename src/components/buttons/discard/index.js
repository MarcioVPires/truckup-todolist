import "./style.css";
import discard_icon from "../../../assets/img/discard-symbol.png";

export default function discardBTN() {
  return (
    <div className="discard_task_btn">
      <img src={discard_icon} alt="discard icon" />
      <p>Discard</p>
    </div>
  );
}
