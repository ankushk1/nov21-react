import React from 'react'
import { useLocation } from 'react-router-dom'

const Users = (props) => {

  console.log(props)
  // history
  // props.location

  const location = useLocation()
  console.log(location);

  return (
    <div>Users</div>
  )
}

export default Users