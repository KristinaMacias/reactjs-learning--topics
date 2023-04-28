import React, { useContext, useState, useEffect } from "react";
import { postData, fetchData } from "../rest/api-utility";
import { TodoContext } from "../App";

export default function Form() {
  const { allTasks, setTasks } = useContext(TodoContext);
  const [taskInput, setTaskInput] = useState("");

  const handleChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postData(taskInput); //passing in the taskInput from state to postData
      setTasks([...allTasks, response]);
      setTaskInput("");
    } catch (error) {
      console.log(error);
    }
    const fetchedData = await fetchData();
    return fetchedData;
  };

  

  return (
    <form>
      <input type="text" onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
