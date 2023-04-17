export const Task = (props) => {
  const { name, completed } = props;

  return (
    <li>
      <label>
        <input type="checkbox" checked={completed} />
        {name}
      </label>
    </li>
  );
};
