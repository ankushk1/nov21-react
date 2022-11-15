import React, { useState } from "react";
import { useFromHook } from "../utils/CustomHooks";
const Forms = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // const [user, setUser] = useState({
  //   firstName: "",
  //   lastName: "",
  //   password: "",
  //   car: []
  // });

  // const onFirstNameChange = (event) => {
  //   setUser({ ...user, firstName: event.target.value });
  // };

  // const onLastNameChange = (event) => {
  //   setUser({ ...user, lastName: event.target.value });
  // };

  // const onPasswordChange = (event) => {
  //   setUser({ ...user, password: event.target.value });
  // };

  // const onInputChange = (event) => {
  //   setUser({ ...user, [event.target.name]: event.target.value });
  // };

  // const onMultiSelect = (event) => {
  //   user.car.push(event.target.value);
  //   setUser({ ...user, car: user.car });
  // };

  const { formInputs, onInputChange, onSubmit } = useFromHook();

  return (
    <div>
      Forms
      <form>
        <input
        className=""
          type="text"
          placeholder="First Name"
          value={formInputs.firstName}
          name="firstName"
          onChange={(event) => onInputChange(event)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={formInputs.lastName}
          name="lastName"
          onChange={(event) => onInputChange(event)}
        />
        <input
          type="password"
          placeholder="password"
          value={formInputs.password}
          name="password"
          onChange={(event) => onInputChange(event)}
        />
        {/* <input type="text" value={formInputs.car.join(",")} /> */}
        {/* <select name="car" onChange={(event) => onMultiSelect(event)}>
          <option value={1}>Car 1</option>
          <option value={2}>Car 2</option>
          <option value={3}>Car 3</option>
        </select> */}
      </form>
      <button onClick={() => onSubmit("Form submit called")}>Submit</button>

      <div>
        first name - {formInputs.firstName} <br />
        last name - {formInputs.lastName}
        <br />
        password - {formInputs.password}
      </div>
    </div>
  );
};

export default Forms;
