import React, { useState, useEffect } from "react";
import { Dimmer, Loader } from "semantic-ui-react";
import axios from "axios";

import Heading from "./Heading";
import MainBody from "./MainBody";

function Home() {
  const [header, setHeader] = useState(null);
  const [body, setBody] = useState(null);

  useEffect(() => {
    axios.get(process.env.REACT_API_URL).then(({ data }) => {
      const { title, description } = data;
      setHeader(title ? title : "Профилактика");
      setBody(
        description ? description : "В момента се извършва профилактика!"
      );
    });
  }, []);

  return (
    <div>
      {header && body ? (
        <>
          <Heading header={header} />
          <MainBody body={body} />
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
