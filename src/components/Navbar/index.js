import React from "react";
import styled from "styled-components";
import { Menu } from "semantic-ui-react";

const Text = styled.p`
  color: #f7ffca;
  font-size: 2rem;
  -webkit-text-stroke: 0.4px black;
`;

const Cursor = styled.div`
  cursor: pointer;
`;

function navbar() {
  return (
    <Menu borderless>
      <Cursor>
        <Menu.Item name="home">
          <img src="/favicon.ico" alt="AMHost Logo" />
          <Text>AMHOST</Text>
        </Menu.Item>
      </Cursor>
    </Menu>
  );
}

export default navbar;
