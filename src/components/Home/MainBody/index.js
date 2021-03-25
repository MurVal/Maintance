import React from "react";
import { Message, Icon } from "semantic-ui-react";

function Body({ body,status }) {
  return (
    <>
      <Message negative={status==="TODO"} warning={status==="PROBLEM"} positive={status==="DONE"} icon size="big">
        <Icon.Group size="big">
          <Icon loading size="huge" name="circle notch" />
          <Icon name="cogs" loading />
        </Icon.Group>
        <Message.Content
          dangerouslySetInnerHTML={{ __html: body }}></Message.Content>
      </Message>
    </>
  );
}

export default Body;
