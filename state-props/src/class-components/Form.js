import React from "react";

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // text input
            textInput: "",
            inputArray: []
        }
    }

    //handle event
    handleEvent = (e) => {
        //console.log(e.target.value)
        this.setState({
            textInput: e.target.value
        })
    }

    //handle submit 
    handleSubmit = () => {
        // e.preventDefault();
        this.setState({
            inputArray: [ this.state.inputArray, this.state.textInput]
        })
    } 

    //render
    render() {
        // return
        return (
            <div>
                <h1>Class Form</h1>
                <input type="text" onChange={this.handleEvent} />
                <button onClick={this.handleSubmit}>Submit</button>

                
            </div>
        )
    }
}