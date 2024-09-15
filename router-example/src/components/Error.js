import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h2>Error Page Not Found</h2>
      <Link to="/">Return Home</Link>
    </div>
  );
};

export default Error;
