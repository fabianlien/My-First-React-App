import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

class MethodsAsPropsParent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true,
        }
    }

    //handleSignIn = () => {
    //    this.setState({isLoggedIn: true})
    //}

    //handleSignOut = () => {
    //    this.setState({isLoggedIn: false})
    //}

    toggleIsLoggedIn = () => {
        this.setState((prevState) => ({isLoggedIn: !prevState.isLoggedIn}))
    }

    render() {
        return (
            <div>
                <MethodsAsPropsChild isLoggedIn={this.state.isLoggedIn} toggleIsLoggedIn={this.toggleIsLoggedIn}/>
            </div>
        )
    }
}

export default MethodsAsPropsParent