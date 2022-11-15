import React from "react";
import { useState } from "react";

export const useFromHook = () => {
  const [formInputs, setFromInputs] = useState({});

  const onInputChange = (event) => {
    setFromInputs({ ...formInputs, [event.target.name]: event.target.value });
  };

  const onSubmit = (message) => {
    console.log(message);
  };

  return {
    formInputs,
    onInputChange,
    onSubmit
  };
};

export const useTheme = () => {
  const [theme, setTheme] = useState("light");

  const onThemeChange = (theme) => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const renderButton = () => {
    return (
      <div>
        {theme !== "light" ? (
          <div onClick={() => onThemeChange("dark")}>
            <i className="fa-solid fa-sun btn btn-warning me-2"></i>
          </div>
        ) : (
          <div onClick={() => onThemeChange("light")}>
            <i className="fa-solid fa-moon btn btn-dark"></i>
          </div>
        )}
      </div>
    );
  };
  return {
    theme,
    onThemeChange,
    renderButton
  };
};
