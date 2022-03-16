import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";

import PublicIcon from "@mui/icons-material/Public";
import PublicOffIcon from "@mui/icons-material/PublicOff";

import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";

const TorrePaper = styled(Paper)(({ theme }) => ({
  width: "80%",
  margin: "15px auto",
  padding: "15px",
  color: theme.palette.success.main,
  backgroundColor: " #383b40",
}));

const TorreButton = styled(Button)(({ theme }) => ({
  color: "#cddc39",
  borderColor: "#cddc39",
}));

const Jobs = () => {
  const [data, setData] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const torre = await axios
        .post("https://search.torre.co/opportunities/_search/?")
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
        <Typography
          sx={{ margin: "2%", textAlign: "center" }}
          variant="h3"
          component="h2"
        >
          Find jobs at Torre
        </Typography>
        {result
          ? result.map((item) => {
              return (
                <>
                  <TorrePaper key={item.id} elevation={3}>
                    <h3>{item.organizations[0].name}</h3>
                    <p>{item.objective}</p>
                    <p>{item.tagline}</p>
                    {item.remote ? (
                      <p>
                        <PublicIcon />
                        Trabajo remoto
                      </p>
                    ) : (
                      <p>
                        <PublicOffIcon />
                        Trabajo no remoto
                      </p>
                    )}
                    <TorreButton
                      component={Link}
                      to={`Jobs/${item.id}`}
                      variant="outlined"
                    >
                      Ver Detalles
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

export default Jobs;
