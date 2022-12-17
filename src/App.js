import "./App.css";
import ListTab from "./components/listTab";
import Logo from "./assets/logo.svg";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(() => {
    const list = JSON.parse(localStorage.getItem("task-list"));
    return list ? list : { type: "todo", name: "no task" };
  });

  function selectTasksType(type) {
    return tasks.filter((curr) => curr.type === type && curr);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} alt="" />
        <h1>Room of Thoughts</h1>
        <p>Don't think, throw in the room</p>
      </header>

      <div className="tab_list">
        <ListTab type="todo" tasks={selectTasksType("todo")} />
        <ListTab type="progress" tasks={selectTasksType("progress")} />
        <ListTab type="done" tasks={selectTasksType("done")} />
      </div>
    </div>
  );
}

export default App;
