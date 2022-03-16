import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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
        <h2>Find jobs at Torre</h2>
        {result
          ? result.map((item) => {
              return (
                <>
                  <div key={item.id}>
                    <p>{item.objective}</p>
                    <Link to={`Jobs/${item.id}`}>Ver Detalles</Link>
                  </div>
                </>
              );
            })
          : null}
      </main>
    </>
  );
};

export default Jobs;
