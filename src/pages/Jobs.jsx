import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";

import PublicIcon from "@mui/icons-material/Public";
import PublicOffIcon from "@mui/icons-material/PublicOff";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
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
                  <TorrePaper
                    key={item.id}
                    elevation={3}
                    sx={{ display: "flex", gap: 3 }}
                  >
                    <Box>
                      <Avatar
                        alt={item.username}
                        src={item.organizations[0].picture}
                        sx={{ width: 100, height: 100 }}
                      />
                    </Box>
                    <Box sx={{ width: "100%" }}>
                      <Typography
                        variant="subtitle1"
                        component="h2"
                        sx={{ color: "#cddc39" }}
                      >
                        {item.organizations[0].name}
                      </Typography>
                      <Typography variant="body2" component="h2">
                        {item.objective}
                      </Typography>
                      <Typography variant="body2" component="h2">
                        {item.tagline}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginTop: "10px",
                        }}
                      >
                        {item.remote ? (
                          <Box
                            sx={{
                              display: "flex",
                              gap: 1,
                              alignItems: "center",
                            }}
                          >
                            <PublicIcon />
                            Trabajo remoto
                          </Box>
                        ) : (
                          <Box
                            sx={{
                              display: "flex",
                              gap: 1,
                              alignItems: "center",
                            }}
                          >
                            <PublicOffIcon />
                            Trabajo no remoto
                          </Box>
                        )}
                        <TorreButton
                          component={Link}
                          to={`/TorreTest/Jobs/${item.id}`}
                          sx={{ backgroundColor: "#cddc39", color: "#383b40" }}
                          variant="outlined"
                        >
                          Ver Detalles
                        </TorreButton>
                      </Box>
                    </Box>
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
