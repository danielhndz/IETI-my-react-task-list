export function useTasks() {
  const [tasks, setTasks] = useState([]);

  const createTask = () => {
    // TODO
  };
  const deleteTask = (name) => {
    let updatedTasks = [...tasks];
    updatedTasks = updatedTasks.filter((task) => task.name != name);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };
  const updateTask = (isChecked, name) => {
    let updatedTasks = [...tasks];
    updatedTasks.forEach((task) => {
      if (task.name === name) {
        task.isCompleted = isChecked;
      }
    });
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  useEffect(() => {
    console.log("El componente ha sido montado (es visible por primera vez)");
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (
      savedTasks != null &&
      savedTasks != undefined &&
      savedTasks.length > 0
    ) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    console.log("La variable 'tasks' cambió");
    console.log(tasks);
  }, [tasks]);

  return [createTask, deleteTask, updateTask];
}
