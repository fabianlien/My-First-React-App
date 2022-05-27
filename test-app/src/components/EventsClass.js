import React, { Component } from 'react'

export class EventsClass extends Component {
    clickHandler() {
        console.log('click!');
    }

render() {
    return (
      <div>
          <br></br>
          <button onClick={this.clickHandler}>Click Me - class component</button>
      </div>
    )
  }
}

export default EventsClass