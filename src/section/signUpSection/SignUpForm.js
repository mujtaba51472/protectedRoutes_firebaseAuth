import { async } from "@firebase/util";
import React, { useState } from "react";
import { UseAuth } from "../../hooks/useAuth";

const SignUpForm = () => {
  const [registerEmail, setregisterEmail] = useState("");
  const [registerPassword, setregisterPassword] = useState("");
  // console.log(registerEmail , registerPassword)
  const { registerUser } = UseAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await registerUser(registerEmail, registerPassword);
    } catch (error) {
      console.log("myerror", error.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="text"
          value={registerEmail}
          onChange={(e) => setregisterEmail(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="">Password</label>
        <input
          type="password"
          value={registerPassword}
          onChange={(e) => setregisterPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default SignUpForm;
