import "./style.css";

export default function Task({ type, final }) {
  return (
    <div className="task_wrapper">
      <h1>Task {final && "Final"}</h1>
    </div>
  );
}
