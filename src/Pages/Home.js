import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()
  // const history = useHistory()

  const signUp = () => {
    // validations
    // hitting api
    // response from api
    // api is giving error = we simply show error
    // redirect to signin or home page , we use navigate
    navigate("/users",{
      state:{
        name:"ABC",
        city: "Delhi"
      }
    })

    // V5
    // navigate(-1, {
      // state
    // })
    
    // V5 in history, hooks name was useHistory
    // history.push("/users")
  } 

  const onRedirectContact = () => {
    navigate("/contact",{
      state:{
        name:"contact",
      }
    })
  }

  return (
    <div>Home
      <br />
      <button onClick={signUp} className="btn btn-info btn-sm">
        Redirect
      </button>
      <button onClick={onRedirectContact} className="btn btn-info btn-sm">
        Redirect Contact
      </button>
    </div>
  )
}

export default Home