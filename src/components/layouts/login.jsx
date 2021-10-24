import React, { useState, useEffect } from "react";
import TextField from "../textField";
import { validator } from "../../utils/validator";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const validatorConfig = {
    email: {
      isRequired: { message: "Email is requred" },
      isEmail: { message: "Email is incorrect" },
    },
    password: {
      isRequired: { message: "Password is requred" },
      isCapitalSymbol: {
        message: "Password must contain at least 1 capital letter",
      },
      isContainDigit: {
        message: "Password must contain at least 1 number",
      },
      min: {
        message: "Password must contain at least 8 symbols",
        value: 8,
      },
    },
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <h3 className="mb-4">Sign in</h3>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              name="email"
              value={data.email}
              onChange={handleChange}
              error={errors.email}
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              error={errors.password}
            />
            <button
              type="submit"
              disabled={!isValid}
              className="btn btn-primary w-100 mx-auto mb-2"
            >
              Submit
            </button>
          </form>
          <Link to="/login/signup">
            <button
              type="button"
              className="btn btn-outline-secondary w-100 mx-auto"
            >
              New user? Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
