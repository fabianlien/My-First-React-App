import React from 'react'

function EventsFunctional() {
  
    function clickHandler() {
        console.log("click!")
    }
  
    return (
    <div>
        <br></br>
        <button onClick={clickHandler}>Click Me - functional component</button>
    </div>
  )
}

export default EventsFunctional