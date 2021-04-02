import React, { useState, useEffect } from "react";
import { Dimmer, Loader } from "semantic-ui-react";
import axios from "axios";

import Heading from "./Heading";
import MainBody from "./MainBody";
import Tasks from "./Tasks";

function Home() {
  const [header, setHeader] = useState(null);
  const [subHeader, setSubHeader] = useState(null);
  const [body, setBody] = useState(null);
  const [status, setStatus] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/config/`)
      .then(({ data }) => {
        const { title, subTitle, description, status, pageTitle } = data;

        setHeader(title ? title : "Профилактика");
        setSubHeader(
          subTitle ? subTitle : "Процеси планирани за текущата профилактика"
        );
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
          {tasks ? <Tasks title={subHeader} tasks={tasks} /> : null}
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
