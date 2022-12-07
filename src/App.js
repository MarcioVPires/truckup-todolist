import "./App.css";
import ListTab from "./components/listTab";
import Logo from "./assets/logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} alt="" />
        <h1>Room of Thoughts</h1>
        <p>Don't think, throw in the room</p>
      </header>

      <div className="tab_list">
        <ListTab type="todo" />
        <ListTab type="progress" />
        <ListTab type="done" />
      </div>
    </div>
  );
}

export default App;
