import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h2>Welcome to Torre.co</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/People">People</Link>
        <Link to="/Jobs">Jobs</Link>
      </nav>
    </>
  );
};

export default Home;
