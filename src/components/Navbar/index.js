import React from "react";
import styled from "styled-components";
import { Menu } from "semantic-ui-react";

const Cursor = styled.div`
  cursor: pointer;
`;

const Image = styled.img`
  width: 15% !important;

  @media only screen and (max-width: 600px) {
    width: 40% !important;
  }
`;

function navbar() {
  return (
    <Menu borderless>
      <Cursor>
        <Menu.Item name="home">
          <Image src="/logo.png" alt="AMHost Logo" />
        </Menu.Item>
      </Cursor>
    </Menu>
  );
}

export default navbar;
