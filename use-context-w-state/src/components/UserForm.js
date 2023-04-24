import React, { createContext, useState } from "react";
import MessageCard from "./MessageCard";

//context provider
export const FormContext = createContext(); //creating provider context. see value userMessages

export default function UserForm() {
  //hooks to manage state
  const [userText, setUserText] = useState(""); //to manage the text input
  const [userMessages, setUserMessages] = useState([]); //to manage all the user messages

  //handle the event
  const handleEvent = (e) => {
    setUserText(e.target.value); //updates the userText state variable
  };

  //handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserMessages([...userMessages, userText]); //spreads the state array and adds userText to the back of the array

    //clear form
    setUserText("");
  };

  return (
    // wrapping context provider and setting the value
    <FormContext.Provider value={userMessages}>
      <form style={{backgroundColor:"gray", padding:30}}>
        <h1>Submit Some Text: </h1>
        <input type="text" onChange={handleEvent} value={userText} />
        <button onClick={handleSubmit}>Submit</button>
      </form>

      {/* children components */}
      <MessageCard />
    </FormContext.Provider>
  );
}
