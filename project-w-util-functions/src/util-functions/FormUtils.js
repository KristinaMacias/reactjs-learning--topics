export const handleChange = (event, setInputText) => {
  setInputText(event.target.value);
};

export const handleSubmit = (event, allText, setAllText, inputText, setInputText) => {
  event.preventDefault();
  setAllText([...allText, inputText]);
  setInputText("");
};
