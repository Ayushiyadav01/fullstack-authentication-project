import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Welcome to User Authentication</h1>
      <div className="text-center mt-3">
        <Link to="/login" className="btn btn-primary mx-2">Login</Link>
        <Link to="/signup" className="btn btn-success mx-2">Sign Up</Link>
      </div>
    </div>
  );
};

export default Home;
