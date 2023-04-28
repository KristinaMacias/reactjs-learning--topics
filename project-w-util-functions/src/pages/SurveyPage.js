import React, { createContext, useState} from 'react';
import Form from '../components/Form'
import FormDisplay from '../components/FormDisplay';

export const SurveyContext = createContext(); // create context for SurveyPage

const SurveyPage = () => {
  const [inputText, setInputText] = useState(""); // state variable for input text
  const [allText, setAllText] = useState([]); // state variable for all text
  const [isEditing, setIsEditing] = useState(false); //state variable to recognize when edit is desired

  return (
    // pass state variables and setter functions to context
    // <SurveyContext.Provider value={{ inputText, setInputText, allText, setAllText, isEditing, setIsEditing }}>
    <SurveyContext.Provider value={{ inputText, setInputText, allText, setAllText, isEditing, setIsEditing }}>
      <div>
        <h1>Survey Page</h1>
        <Form />
        <FormDisplay />
      </div>
    </SurveyContext.Provider>
  );
}

export default SurveyPage;