import React, { useState, useEffect } from "react";
import { Dimmer, Loader } from "semantic-ui-react";
import axios from "axios";

import Heading from "./Heading";
import MainBody from "./MainBody";

function Home() {
  const [header, setHeader] = useState(null);
  const [body, setBody] = useState(null);
  const [status, setStatus] = useState(null);
  //const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/config/`).then(({ data }) => {
      const { title, description,status } = data;

      setHeader(title ? title : "Профилактика");
      setBody(
        description ? description : "В момента се извършва профилактика!"
      );
      setStatus(status?status:"TODO");
    });

    //axios.get(`${process.env.REACT_API_URL}/api/task/`).then(({ data }) => {
    //  setTasks(data);
    //});
  }, []);

  return (
    <div>
      {header && body ? (
        <>
          <Heading header={header} />
          <MainBody body={body} status={status} />
        </>
      ) : (
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      )}
    </div>
  );
}

export default Home;
