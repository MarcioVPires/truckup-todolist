import "./style.css";
import Dots from "../../assets/dots.png";
import Task from "../task";

export default function ListTab({ type }) {
  return (
    <div className="tab_container">
      <div className="tab_wrapper">
        <div className="tab_header">
          <h1>{type}</h1>
          <img src={Dots} alt="" />
        </div>
        <div className="list_container">
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task final />
          <Task />
          <Task />
        </div>
      </div>
      <div className="transparency"></div>
    </div>
  );
}
