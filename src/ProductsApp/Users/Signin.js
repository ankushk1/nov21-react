import React from "react";
import { signIn, signUp } from "../../utils/ApiUtils";
import { useFromHook } from "../../utils/CustomHooks";
import { error, success } from "../../utils/NotificationUtils";

const Signin = () => {
  const { formInputs, onInputChange } = useFromHook();

  const onSignin = async () => {
    const apiResponse  = await signIn(formInputs);
    console.log(apiResponse);
    if(apiResponse.status === 200) {
      success(apiResponse.data.message);
      localStorage.setItem("jwt", apiResponse.data.token)
    } else{
      error(apiResponse.data.message);
    }
  }

  return (
    <div>
     <div className="fs-3"> Signin</div>
      <div className="d-flex m-auto flex-column w-75 my-3">
        <input
          className="form-control"
          type="text"
          name="email"
          placeholder="email"
          value={formInputs.email}
          
          onChange={(e) => onInputChange(e)}
        />
        <input
          className="form-control"
          type="password"
          name="password"
          placeholder="password"
          value={formInputs.password}
          onChange={(e) => onInputChange(e)}
        />
      </div>
      <button className="btn btn-secondary" onClick={onSignin}>Sign In</button>
    </div>
  );
};

export default Signin;
