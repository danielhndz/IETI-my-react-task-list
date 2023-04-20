import { useTasks } from "../hooks/useTasks";
import { Task } from "./Task";

export const TaskList = (props) => {
  const { list } = props;
  const [onCreateClick, onDeleteClick, onCheckboxClick] = useTasks();

  return (
    <>
      <button onClick={onCreateClick}>Crear tarea</button>
      <ul>
        {list.map((task) => (
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
    </>
  );
};
