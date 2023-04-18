import { useEffect, useState } from "react";
import { Task } from "./Task";

export const TaskList = (props) => {
  const { list } = props;
  const [tasks, setTasks] = useState(list);

  const onDeleteClick = (name) => {
    let updatedTasks = [...tasks];
    updatedTasks = updatedTasks.filter((task) => task.name != name);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const onCheckboxClick = (isChecked, name) => {
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
    console.log("El componente se renderizó");
  });

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

  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.name}
          name={task.name}
          description={task.description}
          isCompleted={task.isCompleted}
          onDeleteClick={onDeleteClick}
          onCheckboxClick={onCheckboxClick}
        />
      ))}
    </ul>
  );
};
