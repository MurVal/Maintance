import React from "react";
import { List } from "semantic-ui-react";
import styled from "styled-components";

import Task from "./Task";

const Container = styled.div`
  padding: 20px;
  margin: 50px 25%;
  @media only screen and (max-width: 600px) {
    margin: 0 5%;
  }
`;

const Title = styled.h1`
  padding-bottom: 50px;
`;

function Tasks({ tasks, title }) {
  return (
    <Container>
      <Title>{title}</Title>
      <List divided relaxed>
        {tasks.map((task) => {
          return (
            <List.Item>
              <Task task={task} />
            </List.Item>
          );
        })}
      </List>
    </Container>
  );
}

export default Tasks;
