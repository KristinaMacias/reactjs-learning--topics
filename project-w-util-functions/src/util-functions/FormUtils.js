//* utility functions for form

// handleChange to capture input text and use the setter function to update state
export const handleChange = (event, setInputText) => {
  setInputText(event.target.value);
};

// handleSubmit to capture input text and use the setter function to update state
// ...allText is the spread operator to add the new input text to the array
export const handleSubmit = (
  event,
  allText,
  setAllText,
  inputText,
  setInputText
) => {
  event.preventDefault();
  setAllText([...allText, inputText]);
  setInputText("");
};

// handle delete
export const handleDelete = (index, allText, setAllText) => {
  const allUpdatedText = allText.filter((_, id) => id !== index);
  setAllText(allUpdatedText);
};

// show edit form 

export const showEditForm = (setIsEditing) => {
  setIsEditing(true)
}