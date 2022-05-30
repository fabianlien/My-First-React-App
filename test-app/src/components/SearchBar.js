import React, { Component } from 'react'
import importedNames from '../names'

export class SearchBar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            names: importedNames,
        }
    }

    handleChange = (event) => {
        let inputText = event.target.value.toLowerCase()
        let filteredNames = importedNames.filter(n => {
            return n.toLowerCase().includes(inputText)
        })
        this.setState({
            names: filteredNames
        })
        
    }

    render() {
        return (
        <div>
            <h1>Name Search</h1>
            <p>Matching names found: {this.state.names.length}</p>
            <form>
                <input type="text" placeholder="search names..." onChange={this.handleChange}></input>
            </form>
            <div>
                {this.state.names.map(n => {
                    return <p key={n}>{n}</p>
                })}
            </div>
        </div>
        )
    }
}

export default SearchBar