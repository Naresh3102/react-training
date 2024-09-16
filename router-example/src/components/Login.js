import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (name === "naresh") {
      console.log("Logged in");
      // Navigate logic
      navigate("/about");
    } else {
      console.log("Invalid");
    }
  };
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <input type="password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
