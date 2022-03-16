import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Typography from "@mui/material/Typography";
import axios from "axios";

import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";

const TorrePaper = styled(Paper)(({ theme }) => ({
  width: "80%",
  margin: "15px auto",
  padding: "15px",
  color: theme.palette.success.main,
  backgroundColor: " #383b40",
  "&:hover": {
    borderColor: "#afb94b",
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

const People = () => {
  const [data, setData] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const torre = await axios
        .post("https://search.torre.co/people/_search/?")
        .then((result) => {
          return result.data;
        })
        .catch((error) => {
          return error;
        });
      setData(torre);
      setResult(torre.results);
      console.log("data from response: ", torre);
      console.log("data from response: ", torre.results);
    };
    if (data === null) {
      fetchData();
    }
  }, [data]);

  return (
    <>
      <main>
        <Typography sx={{margin:"2%",textAlign:"center"}} variant="h3" component="h2">
          Find people at Torre
        </Typography>
        {result
          ? result.map((item) => {
              return (
                <>
                  <TorrePaper key={item.ggId} elevation={3}>
                    <h3>{item.name}</h3>
                    <p>{item.professionalHeadline}</p>
                    <TorreButton variant="outlined">Mensaje</TorreButton>
                    <TorreButton
                      component={Link}
                      to={`User/${item.username}`}
                      variant="contained"
                      sx={{ backgroundColor: "#cddc39", color: "#383b40" }}
                    >
                      Signal
                    </TorreButton>
                  </TorrePaper>
                </>
              );
            })
          : null}
      </main>
    </>
  );
};

export default People;
