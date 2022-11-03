import React, {useContext} from 'react'
import { messageContext } from '../App'

const ComponentC = () => {

  const message = useContext(messageContext)
  return (
    <div>ComponentC
      {/* <messageContext.Consumer>
        {(value)=> (
          <h3>{value}</h3>
        )}
      </messageContext.Consumer> */}
      <h3>{message}</h3>
    </div>
  )
}

export default ComponentC