import React from "react";
import "./App.css";
import styled from "styled-components";

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

const StyledBtn = styled.button`
  border: none;
  background-color: #fb3f78;
  padding: 10px 20px;
  color: snow;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    background-color: cornflowerblue;
  }

  &:last-child {
    background-color: cyan;
  }
`;

const Link = styled.a`
  color: #275293;
  font-size: 2rem;
  font-weight: bold;
  background-color: transparent;
  padding: 0;
`;

const SuperBtn = styled(StyledBtn)`
  border-radius: 5px;
  background-color: #e0e04f;
  color: black;
`;

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
`;

export const Menu = styled.nav`
  ul {
    list-style: none;
    //margin: 0;
    padding: 0;
    display: flex;
    li > a {
      color: green;
    }

    li + li {
      margin-left: 20px;
    }
  }
`;
