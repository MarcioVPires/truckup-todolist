import "./App.css";
import { getTaskList } from "./components/utils/fetching-tasks";
import DragButton from "./components/dragButton";
import ListTab from "./components/listTab";
import Logo from "./assets/img/logo.svg";

function App() {
  const tasks = getTaskList();

  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} alt="" />
        <h1>Room of Thoughts</h1>
        <p>Don't think, throw in the room</p>
        <DragButton />
      </header>

      <div className="tab_list">
        <ListTab title="To-do" type="todo" tasks={tasks.todo} />
        <ListTab title="In Progress" type="progress" tasks={tasks.progress} />
        <ListTab title="Done" type="done" tasks={tasks.done} />
      </div>
    </div>
  );
}

export default App;
