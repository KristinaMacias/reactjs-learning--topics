import React, { useState } from 'react';
import { handleChange, handleSubmit } from '../util-functions/FormUtils'

export default function Form() {
     //state hooks
     const [inputText, setInputText] = useState(''); //state variable to handle user text string
     const [allMessages, setAllMessages] = useState([]); //state variable array to hold all messages
 

     // handle change. the utility function needs (e and setter function) passed to it
     const handleTextChange = (e) => {
        handleChange(e, setInputText) //calling handleChange
        // passes the event object and updater function (setInputText)
     }
     
     // handle submit. the utility function needs (event, inputText, and setter functions) passed to it
     const handleTextSubmit = (e) => {
        handleSubmit(e, inputText, setInputText, setAllMessages)
     }

     return (
         <div>
             <input type="text" onChange={handleTextChange} value={inputText}/>
             <button onClick={handleTextSubmit}>Submit</button>
         </div>
     )
}

