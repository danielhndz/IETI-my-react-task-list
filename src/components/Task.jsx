import { useEffect, useState } from "react";

export const Task = (props) => {
  const { name, description, isCompleted, onDeleteClick, onCheckboxClick } =
    props;
  const [isChecked, setIsChecked] = useState(isCompleted);

  useEffect(() => {
    if (isChecked != isCompleted) {
      setIsChecked(isCompleted);
    }
  });

  const handleDeleteClick = () => {
    console.log("handleDeleteClick");
    onDeleteClick(name);
  };

  const handleCheckboxClick = () => {
    console.log("handleCheckboxClick");
    setIsChecked(!isChecked);
    onCheckboxClick(!isChecked, name);
  };

  return (
    <li>
      <article className="card">
        <label
          htmlFor="isCompleted"
          style={{ textDecoration: isChecked ? "line-through" : "" }}
        >
          {name}
        </label>
        <input
          type="checkbox"
          id="isCompleted"
          checked={isChecked}
          onChange={handleCheckboxClick}
        />
        <br />
        {description}
        <button onClick={handleDeleteClick} style={{ margin: "5px" }}>
          Delete
        </button>
      </article>
    </li>
  );
};
