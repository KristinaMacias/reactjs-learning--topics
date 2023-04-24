import React, { useContext } from "react";
import { SurveyContext } from "../pages/SurveyPage";
import { handleChange, handleSubmit } from "../util-functions/FormUtils";

const Form = () => {
  // Destructure context received from SurveyPage
  const { inputText, setInputText, allText, setAllText } = useContext(SurveyContext);

  return (
    <form
      onSubmit={(event) =>
        handleSubmit(event, allText, setAllText, inputText, setInputText)
      }
    >
      <label>
        Input Text:
        <input
          type="text"
          value={inputText}
          onChange={(event) => handleChange(event, setInputText)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
