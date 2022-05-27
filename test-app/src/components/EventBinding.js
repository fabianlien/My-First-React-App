import React from "react";

/*The commented out sections below are 4 different ways of binding the "this" keyword to the event handler*/

class EventBinding extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
        };
        /* using .bind in the constructor:
        this.handleClick = this.handleClick.bind(this)
        */
    }

    handleClick() {
        this.setState({
            introduction: "Goodbye!",
        });
        console.log(this.state.introduction)
    }
    
    
    
    /* Defining the event handler as an arrow function:
    handleClick = () => {
        this.setState({
            introduction: "Goodbye!",
        });
        console.log(this.state.introduction)
    }
    */

    render() {
        return (
        <div>
            <h1>{this.state.introduction} {this.props.greeting}</h1>
            <button onClick={this.handleClick}>{this.state.buttonText}</button>
            {/* Using an arrow function:
            <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
    
            Using the .bind method:
            <button onClick={this.handleClick.bind(this)}>{this.state.buttonText}</button>
            */}
        </div>
        )
    }
}

export default EventBinding