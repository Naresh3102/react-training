import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [name, setName] = useState("");
  const { handleLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  const login = () => {
    handleLogin();
    navigate("/");
  };

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <input type="password" />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
