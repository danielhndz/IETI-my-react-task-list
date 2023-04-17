import "./App.css";
import Header from "./components/Header";
import { TaskList } from "./components/TaskList";

const taskArray = [
  { name: "Buy a new gaming laptop" },
  { name: "Complete a previous task" },
  { name: "Create video for Youtube" },
  { name: "Create a new portafolio site" },
];

function App() {
  return (
    <div className="App">
      <Header title="Todo App" />
      <TaskList tasks={taskArray} />
    </div>
  );
}

export default App;
