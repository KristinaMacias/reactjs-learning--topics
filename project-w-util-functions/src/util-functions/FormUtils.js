//* create a user message
// handle change to be exported here and imported to another component for use
export const handleChange = (e, setInputText) => {
  setInputText(e.target.value);
}

// handle submit to be exported here and imported to another component for use
export const handleSubmit = (e, inputText, setInputText, setArray) => {
  e.preventDefault();

  setArray((prevState) => [...prevState, inputText]); //update the state by adding user text to the back of an existing arr
  setInputText(""); //reset inputText state to empty string
};

//* delete a user message

//* update a user message

//? read a user message? not sure if this is the best place for it
