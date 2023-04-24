import React from 'react';
import { createContext } from 'react';
import User from './components/User'
import './App.css';

//** Two Sections
// context provider - wrap all the code that needs access to the information in the context
// single prop called value (what ever the value of the context is)
// everything inside the provider (children and children of children) all have access to the variable in the prop :) 
// PASS DOWN PROPS ALL THE WAY DOWN TO ANY OF THE CHILDREN WITHOUT HAVING TO PASS INTO THE PROPS OF EACH COMPONENT LAYER  (Global State)

//the hook:
export const UserContext = createContext(); // This is the provider 

function App() {
  return (
    <UserContext.Provider value="Kristina">
      <User />
    </UserContext.Provider>
  );
}

export default App;
