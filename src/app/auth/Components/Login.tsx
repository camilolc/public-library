import React, { ChangeEvent, useEffect, useState, SyntheticEvent } from "react";

import "../../styles/login.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const validateData = {
    email: "camilo@poligran.edu.co",
    password: "admin123",
  };
  const initialState = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState(initialState);
  const [show, setShow] = useState(false);
  const { email, password } = user;

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = target;
    setUser({
      ...user,
      [name as string]: value,
    });
  };

  const validateCredentials = () => {
    if (email === validateData.email && password === password) {
      navigate("/home");
    } else {
      setShow(true);
    }
  };

  return (
    <>
      <div className="auth__main">
        <div className="auth__box-container">
          <h3 className="auth__title">Login</h3>
          <form
            // onSubmit={handleLogin}
            className="animate__animated animate__fadeIn animate__faster"
          >
            <input
              onChange={handleChange}
              type="text"
              placeholder="Email"
              name="email"
              className="auth__input"
              autoComplete="off"
              value={email}
              required
            />
            <input
              value={password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
              name="password"
              className="auth__input"
              required
              // value={password}
            />
            <button
              type="button"
              className="ath-button"
              onClick={validateCredentials}

              // disabled={loading}
            >
              Ingresar
            </button>
          </form>
          {show && (
            <span style={{ color: "red", fontStyle: "italic" }}>
              Credenciales incorrectas
            </span>
          )}
        </div>
      </div>
    </>
  );
};
