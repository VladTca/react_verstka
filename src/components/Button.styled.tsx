import styled from "styled-components";
import { MyAnimation } from "./styles/animations/Animations";

export const StyledBtn = styled.button`
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
    background-color: cadetblue;
  }
`;
export const SuperBtn = styled(StyledBtn)`
  border-radius: 5px;
  background-color: #e0e04f;
  color: black;
  &:hover {
    animation: ${MyAnimation} 2s ease-in-out infinite;
  }
`;
