import React, { useContext } from "react";
import { FormContext } from "./UserForm";

export default function MessageList() {

  const MessageStateArr = useContext(FormContext); //receiving context from UserForm

  return (
    (
      <>
        {/* mapped state received from context */}
        {MessageStateArr.map((message, index) => {
          return (
            <div key={index} style={{backgroundColor:"coral", margin:100}}>
              <h3 style={{padding:20}}>{message}</h3>
            </div>
          );
        })}
      </>
    )
  );
}
