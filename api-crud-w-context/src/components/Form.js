import React, { useContext, useState } from 'react';
import { postData } from '../rest/api-utility';
import { TodoContext } from '../App';

export default function Form () {
    const { allTasks, setAllTasks } = useContext(TodoContext);
    const [ taskInput, setTaskInput ] = useState("")

    const handleChange = (e) => {
        setTaskInput(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await postData(taskInput);
            setAllTasks([...allTasks], response);
            setTaskInput('')
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange}/>
            <button>Submit</button>
        </form>
    )
}