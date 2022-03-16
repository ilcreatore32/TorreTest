import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

const Home = () => {
  return (
    <>
      <main>
        <Typography
          sx={{ margin: "2%", textAlign: "center" }}
          variant="h3"
          component="h2"
        >
          Welcome to Torre.co
        </Typography>
      </main>
    </>
  );
};

export default Home;
