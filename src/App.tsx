import React from "react";
import "./App.css";
import styled from "styled-components";
import { StyledBtn, SuperBtn } from "./components/Button.styled";
import { Link } from "./components/link.styled";
import { Menu } from "./components/Menu";
import { StyledBtnNew } from "./components/StyledBtnNew";
import { myTheme } from "./components/styles/Theme.styled";

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
        <StyledBtnNew color={"green"} fontSize={"20px"}>
          Hello
        </StyledBtnNew>
        <StyledBtnNew color={"red"}>Hello</StyledBtnNew>
        <StyledBtnNew fontSize={"30px"}>Hello</StyledBtnNew>
        <StyledBtnNew color={myTheme.colors.primary} primary>
          Hello
        </StyledBtnNew>
        <StyledBtnNew color={myTheme.colors.secondary} outlined>
          Hello
        </StyledBtnNew>
        {/*<StyledBtnNew btnType={"primary"}>Hello</StyledBtnNew>*/}
        {/*<StyledBtnNew btnType={"outlined"}>Hello</StyledBtnNew>*/}
        {/*  kak variant eshe dat atribut cherez typ*/}
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

  @media ${myTheme.media.tablet} {
    flex-direction: column;
  }
`;
