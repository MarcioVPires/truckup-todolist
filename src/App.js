
import './App.css';
import Todo from './components/todo'
import InProgress from './components/inprogress'
import Done from './components/done'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Room of Thoughts</h1>
      </header>
      <Todo />
      <InProgress />
      <Done />

    </div>
  );
}

export default App;
