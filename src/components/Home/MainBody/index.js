import React from "react";
import { Message, Icon } from "semantic-ui-react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 25%;
  @media only screen and (max-width: 600px) {
    margin: 0 5%;
  }
`;

function Body({ body, status }) {
  return (
    <Container>
      <Message
        negative={status === "PROBLEM"}
        warning={status === "TODO"}
        positive={status === "DOING"}
        success={status === "DONE"}>
        <Icon.Group size="big">
          <Icon loading size="huge" name="circle notch" />
          <Icon name="cogs" loading />
        </Icon.Group>
        <Message.Content
          dangerouslySetInnerHTML={{ __html: body }}></Message.Content>
      </Message>
    </Container>
  );
}

export default Body;
