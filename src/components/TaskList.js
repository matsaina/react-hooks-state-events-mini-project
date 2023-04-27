import React from "react";

function TaskList({ tasks }) {
  return (
    <div className="tasks">
      {tasks.map((task) => {
        return (
          <>
            <li key={task}>{task.text} </li>
          </>
        );
      })}
    </div>
  );
}

export default TaskList;
