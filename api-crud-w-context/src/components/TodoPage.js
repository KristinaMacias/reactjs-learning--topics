import React from "react";
import Form from './Form'
import DisplayTasks from "./DisplayTasks";


export default function TodoPage () {
    return (
        <div>
            <h1>Todo List:</h1>
            <Form />
            <DisplayTasks />
        </div>
    )
}