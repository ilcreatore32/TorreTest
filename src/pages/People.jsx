import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

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
        <h2>Find people at Torre</h2>
        {result
          ? result.map((item) => {
              return (
                <>
                  <div key={item.ggId}>
                    <p>{item.name}</p>
                    <Link to={`User/${item.username}`}>Ver Detalles</Link>
                  </div>
                </>
              );
            })
          : null}
      </main>
    </>
  );
};

export default People;
