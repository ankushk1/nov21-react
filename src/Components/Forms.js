import React, { useState } from "react";

const Forms = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    password: ""
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

  const onInputChange = (event, fieldName) => {
    setUser({ ...user, [fieldName]: event.target.value });
  };

  return (
    <div>
      Forms
      <form>
        <input
          type="text"
          placeholder="First Name"
          value={user.firstName}
          onChange={(event) => onInputChange(event, "firstName")}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={user.lastName}
          onChange={(event) => onInputChange(event, "lastName")}
        />
        <input
          type="password"
          placeholder="password"
          value={user.password}
          onChange={(event) => onInputChange(event, "password")}
        />
      </form>
      <div>
        first name - {user.firstName} <br />
        last name - {user.lastName}
      </div>
    </div>
  );
};

export default Forms;
