import React from "react";
import { Link } from "react-router-dom";
import { signUp } from "../../utils/ApiUtils";
import { useFromHook } from "../../utils/CustomHooks";
import { error, success } from "../../utils/NotificationUtils";

const SignUp = () => {
  const { formInputs, onInputChange } = useFromHook();

  const onSignup = async () => {
    const apiResponse = await signUp(formInputs);
    if(apiResponse.status === 200) {
      success(apiResponse.data.message);
    } else{
     error(apiResponse.data.message);
    }
  };

  return (
    <div>
      <div className="fs-3"> SignUp</div>
      <div className="d-flex m-auto flex-column w-75 my-3">
        <input
          className="form-control"
          type="text"
          name="firstname"
          placeholder="firstname"
          value={formInputs.firstname}
          onChange={(e) => onInputChange(e)}
        />
        <input
          className="form-control"
          type="text"
          name="lastname"
          placeholder="lastname"
          value={formInputs.lastname}
          onChange={(e) => onInputChange(e)}
        />
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
      <button className="btn btn-primary" onClick={onSignup}>
        Sign Up
      </button>

      <div className="mt-2">
        Already signup? <Link to="/signin">Signin</Link> here.
      </div>
    </div>
  );
};

export default SignUp;
