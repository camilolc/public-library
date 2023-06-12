import React from "react";

import "../../styles/login.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
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
              type="text"
              placeholder="Email"
              name="email"
              className="auth__input"
              autoComplete="off"
              // value={email}
              // onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="auth__input"
              // value={password}
              // onChange={handleInputChange}
            />
            <button
              type="submit"
              className="ath-button"
              onClick={() => navigate("/home")}

              // disabled={loading}
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
