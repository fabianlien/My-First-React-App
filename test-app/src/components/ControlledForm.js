import React, { Component } from 'react'

export class ControlledForm extends Component {
  
    constructor(props) {
        super(props)
    
        this.state = {
            nameField: '',
            selectCategory: 'Website',
            textComment: '',
        }
    }

    updateFormState = (event) => {
        return (
                this.setState({[event.target.id]: event.target.value})
            ) 
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            nameField: '',
            selectCategory: 'Website',
            textComment: '',
        })
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h2>Please fill out the form:</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name-field">Your Name: </label>
                        <input type="text" id="nameField" name="name" onChange={this.updateFormState} value={this.state.nameField}></input>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="select-category">Select a category: </label>
                        <select id="selectCategory" onChange={this.updateFormState} value={this.state.selectCategory}>
                            <option>Website</option>
                            <option>Order</option>
                            <option>Inquiry</option>
                        </select>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="textarea-comment">Comment: </label>
                        <textarea id="textComment" name="comment" onChange={this.updateFormState} value={this.state.textComment}/>
                    </div>
                    <br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

export default ControlledForm