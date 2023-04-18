import "./App.css";
import Header from "./components/Header";
import { TaskList } from "./components/TaskList";

const tasks = [
  {
    name: "Buy a new gaming laptop",
    description: "description 1",
    isCompleted: false,
  },
  {
    name: "Complete a previous task",
    description: "description 2",
    isCompleted: false,
  },
  {
    name: "Create video for Youtube",
    description: "description 3",
    isCompleted: false,
  },
  {
    name: "Create a new portfolio",
    description: "description 4",
    isCompleted: false,
  },
];

function App() {
  return (
    <div className="App">
      <Header title="Todo App" />
      <TaskList list={tasks} />
    </div>
  );
}

export default App;
