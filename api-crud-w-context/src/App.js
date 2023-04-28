import React, { createContext, useState, useEffect } from "react";
import { fetchData, deleteData } from "./rest/api-utility";
import TodoPage from "./components/TodoPage";

export const TodoContext = createContext();

function App() {
  // state array hook to hold information retrieved from the api
  const [allTasks, setTasks] = useState([]);

  // useEffect hook to executed after the component has been rendered to the screen, and then again after every subsequent re-render, unless the dependencies have not changed
  useEffect(() => {
    async function updateState() {
      // async function to try and call my fetchData function
      try {
        const apiData = await fetchData();
        setTasks(apiData); // setTasks (updateState)  with api data
      } catch (error) {
        console.log("error in useEffect: ", error);
      }
    }
    updateState(); //calling the above function
  }, []);

  return (
    <div className="App">
      <TodoContext.Provider value={{ allTasks, setTasks }}>
        <TodoPage />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
