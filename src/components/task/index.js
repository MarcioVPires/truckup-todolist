import "./style.css";

export default function Task({ type, final, data }) {
  return (
    <div className="task_wrapper">
      <h1>{data.title}</h1>
    </div>
  );
}
