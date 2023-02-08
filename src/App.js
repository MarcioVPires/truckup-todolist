import "./App.css";
import ListTab from "./components/listTab";
import Logo from "./assets/logo.svg";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(() => {
    const list = JSON.parse(localStorage.getItem("task-list"));
    return list ? list : { type: "todo", name: "no task" };
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} alt="" />
        <h1>Room of Thoughts</h1>
        <p>Don't think, throw in the room</p>
      </header>

      <div className="tab_list">
        <ListTab type="todo" tasks={tasks.todo} />
        <ListTab type="progress" tasks={tasks.progress} />
        <ListTab type="done" tasks={tasks.done} />
      </div>
    </div>
  );
}

export default App;
