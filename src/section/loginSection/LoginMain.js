import { async } from "@firebase/util";
import React, { useState } from "react";
import { UseAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const LoginMain = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  console.log(loginEmail, loginPassword);
  const { loginUser, user } = UseAuth();
  console.log("user", user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser(loginEmail, loginPassword);
    navigate("/dashboard", {
      state: {
        user,
      },
    });
    try {
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>Login form</h1>
      <form onSubmit={handleSubmit}>
        <label>email</label>
        <input
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="">password</label>
        <input
          type="password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default LoginMain;
