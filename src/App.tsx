import React from "react";
import "./App.css";
import styled from "styled-components";
import { StyledBtn, SuperBtn } from "./components/Button.styled";
import { Link } from "./components/link.styled";
import { Menu } from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Menu>
        <ul>
          <li>
            <a href="">menu item 1</a>
          </li>
          <li>
            <a href="">menu item 2</a>
          </li>
          <li>
            <a href="">menu item 3</a>
          </li>
        </ul>
      </Menu>
      <Box>
        <StyledBtn as={Link} href={"#"}>
          LinkComponent
        </StyledBtn>
        <StyledBtn as="a" href={"#"}>
          Link
        </StyledBtn>
        <StyledBtn>Hello</StyledBtn>
        <SuperBtn>Super Button</SuperBtn>
      </Box>
    </div>
  );
}

export default App;

const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
