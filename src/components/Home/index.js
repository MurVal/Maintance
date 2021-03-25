import React, { useState, useEffect } from "react";
import { Dimmer, Loader } from "semantic-ui-react";
import axios from "axios";

import Heading from "./Heading";
import MainBody from "./MainBody";

function Home() {
  const [header, setHeader] = useState(null);
  const [body, setBody] = useState(null);
  const [status, setStatus] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/config/`)
      .then(({ data }) => {
        const { title, description, status, pageTitle } = data;

        setHeader(title ? title : "Профилактика");
        setStatus(status ? status : "TODO");
        setBody(
          description ? description : "В момента се извършва профилактика!"
        );
        document.title = `AMHost - ${pageTitle ? pageTitle : "Профилактика"}`;
      });

    axios.get(`${process.env.REACT_APP_API_URL}/api/task/`).then(({ data }) => {
      setTasks(data);
    });
  }, []);

  return (
    <div>
      {header && body ? (
        <>
          <Heading header={header} />
          <MainBody body={body} status={status} />
          <ul>
            {tasks.map((task) => {
              return (
                <li>
                  <h1>{task.name}</h1>
                  <p>{task.description}</p>
                </li>
              );
            })}
          </ul>
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
