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
        this.setState({
            introduction: this.state.introduction === "Hello!" ? "Goodbye!" : "Hello!",
            buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
        }, () => {console.log(this.state.introduction, this.state.buttonText)});
    }

    incrementCount() {
        this.setState({count: this.state.count + 1});
        console.log(this.state.count)
    }

    incrementByFive() {
        for (let i=0; i<5; i++) {
            this.incrementCount()
        }
    }

    render() {
        return (
        <div>
            <h1>{this.state.introduction} {this.props.greeting}</h1>
            <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            <button onClick={() => this.incrementByFive()}>Click Count: {this.state.count}</button>
        </div>
        )
    }
}

export default StatefulGreetingWithPrevState