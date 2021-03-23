import React from "react";
import { Message, Icon } from "semantic-ui-react";

function body() {
  let msg = (
    <>
      В момента се извършва ъпдейт на цялата инфраструктурата на АМХост!
      <br />
      Профилактиката ще започне в 10:00 часа на 26.03.2021
      <br />
      Очаква се да се направят не малко промени по инфраструктурата и
      <br />
      най-ранния предвиден час за приключване с целия ъпдейт е 16:30
      <br />И то в случай, че всичко мине както трябва!
    </>
  );

  return (
    <>
      <Message negative icon size="big">
        <Icon.Group size="big">
          <Icon loading size="huge" name="circle notch" />
          <Icon name="cogs" loading />
        </Icon.Group>
        <Message.Content>{msg}</Message.Content>
      </Message>
    </>
  );
}

export default body;
