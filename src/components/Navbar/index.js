import React from "react";
import styled from "styled-components";
import { Menu } from "semantic-ui-react";

const Cursor = styled.div`
  cursor: pointer;
`;

function navbar() {
  return (
    <Menu borderless>
      <Cursor>
        <Menu.Item name="home">
          <img src="/favicon.ico" alt="AMHost Logo" />
        </Menu.Item>
      </Cursor>
    </Menu>
  );
}

export default navbar;
