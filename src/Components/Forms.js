import React, { useState } from "react";

const Forms = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    password: "",
    car: []
  });

  // const onFirstNameChange = (event) => {
  //   setUser({ ...user, firstName: event.target.value });
  // };

  // const onLastNameChange = (event) => {
  //   setUser({ ...user, lastName: event.target.value });
  // };

  // const onPasswordChange = (event) => {
  //   setUser({ ...user, password: event.target.value });
  // };

  const onInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onMultiSelect = (event) => {
    user.car.push(event.target.value);
    setUser({ ...user, car: user.car });
  };

  return (
    <div>
      Forms
      <form>
        <input
          type="text"
          placeholder="First Name"
          value={user.firstName}
          name="firstName"
          onChange={(event) => onInputChange(event)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={user.lastName}
          name="lastName"
          onChange={(event) => onInputChange(event)}
        />
        <input
          type="password"
          placeholder="password"
          value={user.password}
          name="password"
          onChange={(event) => onInputChange(event)}
        />
        <input type="text" value={user.car.join(",")} />
        <select name="car" onChange={(event) => onMultiSelect(event)}>
          <option value={1}>Car 1</option>
          <option value={2}>Car 2</option>
          <option value={3}>Car 3</option>
        </select>
      </form>
      <div>
        first name - {user.firstName} <br />
        last name - {user.lastName}
        <br />
        password - {user.password}
      </div>
    </div>
  );
};

export default Forms;
