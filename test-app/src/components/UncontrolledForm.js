import React, { Component } from 'react'

export class UncontrolledForm extends Component {
  
    constructor(props) {
        super(props)
        this.inputName = React.createRef();
        this.inputCategory = React.createRef();
        this.inputComment = React.createRef();
    }


    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.inputName.current.value);
        console.log(this.inputCategory.current.value);
        console.log(this.inputComment.current.value);
    }

    render() {
        return (
            <div>
                <h2>Please fill out the form:</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name-field">Your Name: </label>
                        <input ref={this.inputName} type="text" id="nameField" name="name"></input>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="select-category">Select a category: </label>
                        <select ref={this.inputCategory} id="selectCategory">
                            <option>Website</option>
                            <option>Order</option>
                            <option>Inquiry</option>
                        </select>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="textarea-comment">Comment: </label>
                        <textarea ref={this.inputComment} id="textComment" name="comment"/>
                    </div>
                    <br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

export default UncontrolledForm