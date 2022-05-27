import React from 'react'

function UserData(props) {
  return (
    <h1>{props.isLoaded ? 'Data loaded' : 'Loading...'}</h1>
  )
}

export default UserData