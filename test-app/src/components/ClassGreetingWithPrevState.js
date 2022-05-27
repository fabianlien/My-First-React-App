import React from "react";

class StatefulGreetingWithPrevState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0,
        };
    }

    handleClick() {
        this.setState((prevState) => {
            return {
                introduction: prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
            }
        }, () => {console.log(this.state.introduction, this.state.buttonText)});
    }

    incrementCount() {
        this.setState((prevState) => {
            return {count: prevState.count + 1}
        });
    }

        
    incrementByFive() {
        for (let i=0; i<5; i++) {
            this.incrementCount()
        }
    }

    resetCount() {
        this.setState({count: 0});
    }

    render() {
        return (
        <div>
            <h1>{this.state.introduction} {this.props.greeting}</h1>
            <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            <button onClick={() => this.incrementCount()}>Click Count: {this.state.count}</button>
            <button onClick={() => this.resetCount()}>Reset</button>
        </div>
        )
    }
}

export default StatefulGreetingWithPrevState