import React, { useContext } from "react";
import { TodoContext } from "../App";
import { deleteData, fetchData } from "../rest/api-utility";

export default function DisplayTasks() {
  const { allTasks, setTasks } = useContext(TodoContext);
  const [ isEditing, setIsEditing ] = useState(false);

  const handleDelete =  async (id) => {
    console.log(id)
    try {
      await deleteData(id);
      const updatedData = await fetchData();
      setTasks(updatedData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    console.log(allTasks),
    (
      <div>
        {allTasks.map((task) => {
          return (
            <div key={task.id}>
              <h3>{task.taskInput}</h3>
              {/* pass an arrow function and task.id so its known which one to delete */}
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    )
  );
}
