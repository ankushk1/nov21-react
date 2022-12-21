import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = (props) => {
  console.log(props)
  return (
    <div>ComponentB
      {/* <ComponentC /> */}
    </div>
  )
}

export default ComponentB