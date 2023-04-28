import React, { useContext } from "react";
import { TodoContext } from "../App";

export default function DisplayTasks() {
  const { allTasks } = useContext(TodoContext);

  return (
    console.log(allTasks),
    (
      <div>
        {allTasks.map((task) => {
          return (
            <div key={task.id} style={{textAlign:'center'}}>
              <h3>{task.taskInput}</h3>
              <button>Delete</button>
            </div>
          );
        })}
      </div>
    )
  );
}
