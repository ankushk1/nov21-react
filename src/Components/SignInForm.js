import React from 'react'
import { useFromHook } from '../utils/CustomHooks';

const SignInForm = () => {

  const { formInputs, onInputChange, onSubmit } = useFromHook();

  return (
    <div>
      <br /><br />
      <h4>Sign in From</h4>
      <input
          type="text"
          placeholder="Email"
          value={formInputs.email}
          name="email"
          onChange={(event) => onInputChange(event)}
        />
        <input
          type="text"
          placeholder="Password"
          value={formInputs.password}
          name="password"
          onChange={(event) => onInputChange(event)}
        />

        <button onClick={() => onSubmit("Signin submit called")}>Submit</button>
    </div>
  )
}

export default SignInForm