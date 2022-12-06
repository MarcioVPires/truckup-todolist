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
        <ListTab type="Todo" />
        <ListTab type="In Progress" />
        <ListTab type="Done" />
      </div>
    </div>
  );
}

export default App;
