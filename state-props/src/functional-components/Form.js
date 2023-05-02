import React, {useState} from 'react';

export default function Form() {

    //hook for state
    const [nameInput, setNameInput] = useState('');
    const [messageInput, setMessageInput] = useState('');
    const [allMessages, setAllMessages] = useState([]);

    // handleName
    const handleNameEvent = (e) => {
        setNameInput(e.target.value);
    }

    const handleMessageEvent = (e) => {
        setMessageInput(e.target.value)
    }

    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const messageObj = { username: nameInput, message: messageInput }
        setAllMessages([...allMessages, messageObj]);

        //clear input
        setNameInput('');
        setMessageInput('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="textarea" style={{margin: 10}} value={nameInput} onChange={handleNameEvent} /> <br />
                <label>Message:</label>
                <textarea rows={3} style={{margin: 10}} value={messageInput} onChange={handleMessageEvent} /> <br />
                <button type="submit">Submit</button>
            </form>

            {allMessages.map((message, index) => (
                <div key={index}>
                    <h3>{message.username}</h3>
                    <p>{message.message}</p>
                </div>
            ))}
        </div>
    )
}
