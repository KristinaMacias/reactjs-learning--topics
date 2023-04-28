import React, { useContext, useState } from "react";
import { TodoContext } from "../App";
import { deleteData, fetchData, updateData } from "../rest/api-utility";

export default function DisplayTasks() {
  const { allTasks, setTasks } = useContext(TodoContext);
  const [editTaskId, setEditTaskId] = useState(null);
  const [newTaskInput, setNewTaskInput] = useState("");

  const handleDelete = async (id) => {
    console.log(id);
    try {
      await deleteData(id);
      const updatedData = await fetchData();
      setTasks(updatedData);
    } catch (error) {
      console.log(error);
    }
  };

  const showEditForm = async (id) => {
    if (id === editTaskId) {
      // if the current task is already being edited, close the form
      setEditTaskId(null);
      setNewTaskInput("");
    } else {
      // otherwise, set the current task ID as the one being edited
      setEditTaskId(id);
      setNewTaskInput("");
    }
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault(); // prevent form submission
    try {
      const updatedTask = await updateData(editTaskId, { 
        taskInput: newTaskInput, //passing in the newTaskInput from state to updateData
      });
      //map over allTasks and if the task.id matches the editTaskId, return the updatedTask, otherwise return the task
      const updatedData = allTasks.map((task) => {
        if (task.id === editTaskId) {
          return updatedTask;
        }
        return task; //return the task that was not updated
      });
      setTasks(updatedData);
      setEditTaskId(null);
      setNewTaskInput("");
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
              <button onClick={() => showEditForm(task.id)}>Edit</button>

              {/* render edit form */}
              {editTaskId == task.id && (
                <form onSubmit={handleEditSubmit}>
                  <input
                    type="text"
                    value={newTaskInput}
                    onChange={(e) => setNewTaskInput(e.target.value)}
                  />
                  <button type="submit">Submit Edit</button>
                </form>
              )}
            </div>
          );
        })}
      </div>
    )
  );
}
