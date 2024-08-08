import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
      <h1>Error 404 This page doesn't exists</h1>
      <Link to={"/"}>Click me to go to the home page</Link>
    </div>
  )
}

export default Error
