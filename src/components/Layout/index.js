import React from "react";
import { Container } from "semantic-ui-react";
import Navbar from "../Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container textAlign="center" fluid>
        {children}
      </Container>
    </>
  );
}

export default Layout;
