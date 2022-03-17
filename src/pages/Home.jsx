import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import JobsPicture from "../assets/pictures/Jobs.jpg";
import TalentPicture from "../assets/pictures/Talent.jpg";
import { styled } from "@mui/material/styles";

const TorreCard = styled(Card)(({ theme }) => ({
  color: theme.palette.success.main,
  backgroundColor: " #383b40",
  width: "",
  "&:hover": {
    border: "1px solid #afb94b",
  },
}));

const TorreButton = styled(Button)(({ theme }) => ({
  color: "#cddc39",
  borderColor: "#cddc39",
  "&:hover": {
    borderColor: "#afb94b",
  },
  "&.MuiButton-contained:hover": {
    backgroundColor: "#afb94b",
  },
}));

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
        <Box
          sx={{
            display: "flex",
            gap: 3,
            justifyContent: "center",
            margin: "20px",
          }}
        >
          <TorreCard sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height="400"
              image={TalentPicture}
              alt="Talent"
            />
            <CardContent>
              <Typography sx={{ fontSize: 14 }} gutterBottom>
                With Torre.co
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{ textAlign: "center" }}
              >
                Find talent for your company
              </Typography>
            </CardContent>
            <CardActions>
              <TorreButton
                component={Link}
                to="/TorreTest/People"
                variant="outlined"
                size="small"
              >
                Find talent
              </TorreButton>
            </CardActions>
          </TorreCard>
          <TorreCard sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height="400"
              image={JobsPicture}
              alt="Jobs"
            />
            <CardContent>
              <Typography sx={{ fontSize: 14 }} gutterBottom>
                With Torre.co
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{ textAlign: "center" }}
              >
                Find your future job or companies
              </Typography>
            </CardContent>
            <CardActions>
              <TorreButton
                component={Link}
                to="/TorreTest/Jobs"
                variant="outlined"
                size="small"
              >
                Find jobs
              </TorreButton>
            </CardActions>
          </TorreCard>
        </Box>
      </main>
    </>
  );
};

export default Home;
