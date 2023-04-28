import React, { useContext } from "react";
import { SurveyContext } from "../pages/SurveyPage";
import { handleDelete, showEditForm } from "../util-functions/FormUtils";
import Form from '../components/Form'


export default function FormDisplay() {
  const { allText, setAllText, isEditing, setIsEditing } =
    useContext(SurveyContext);

  return (
    <div>
      <h1>Form Display</h1>
      {allText.map((text, index) => (
        <div key={index} style={{ backgroundColor: "coral", padding: 10 }}>
          <p>
            {text} / id: {index}
          </p>
          <button onClick={() => handleDelete(index, allText, setAllText)}>
            Delete
          </button>
          {/* DOES NOT WORK */}
          <button onClick={() => showEditForm(setIsEditing)}>Edit</button>


          {isEditing ? `Please update your changes and submit` : null}
        </div>
      ))}
    </div>
  );
}
