import React from "react";

import { Header } from "semantic-ui-react";

function Heading({ header }) {
  return (
    <>
      <Header as="h1">{header}</Header>
    </>
  );
}

export default Heading;
