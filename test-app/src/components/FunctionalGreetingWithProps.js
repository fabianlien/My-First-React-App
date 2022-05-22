import React from "react"; //not necessary in later versions of react, but good for backwards compatability.

const FunctionalGreetingWithProps = (props) => {
    return (
    <div>
        <h1>Hello with props! {props.greeting}</h1>
        <h3>Name: {props.name}</h3>
        <h3>Age: {props.age}</h3>
    </div>
    )
}
export default FunctionalGreetingWithProps;