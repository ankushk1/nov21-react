import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Users = (props) => {

  console.log(props)
  // history
  // props.location

  const location = useLocation()

  const params = useParams()
  console.log(params);


  return (
    <div>Users</div>
  )
}

export default Users