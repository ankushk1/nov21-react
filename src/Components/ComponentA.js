import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {
  return (
    <div>ComponentA
      <ComponentB name={'abc'}>
        {{a:1, b:2}}
      </ComponentB>
    </div>
  )
}

export default ComponentA