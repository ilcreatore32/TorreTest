import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";

const Job = () => {
  let { id } = useParams();
  const [data, setData] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const torre = await axios
        .get(`https://torre.co/api/suite/opportunities/${id}`)
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
    <main>
      <Typography
        sx={{ margin: "2%", textAlign: "center" }}
        variant="h3"
        component="h2"
      >
        Job
      </Typography>
      {/* {result
        ? result.map((item) => {
            return (
              <>
                <div key={item.id}>
                  <p>{item.objective}</p>
                  <a href="https://search.torre.co/people/_search/?">
                    {item.status}
                  </a>
                </div>
              </>
            );
          })
        : null} */}
    </main>
  );
};

export default Job;
