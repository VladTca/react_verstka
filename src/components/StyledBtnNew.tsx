import styled, { css } from "styled-components";

type StyledBtnPropsType = {
  color?: string;
  fontSize?: string;
  primary?: boolean;
  outlined?: boolean;
  // btnType: "primary" | "outlined";
};
export const StyledBtnNew = styled.button<StyledBtnPropsType>`
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.color || "#fb3f78"};
  padding: 10px 20px;
  color: snow;
  font-size: ${(props) => props.fontSize || "2rem"};
  font-weight: bold;

  &:hover {
    background-color: cornflowerblue;
  }

  ${(props) =>
    props.outlined &&
    // ili esli cherez typ delali to mogno props.btnType==="outlined" &&
    css<StyledBtnPropsType>`
      border: 2px solid ${(props) => props.color || "#fb3f78"};
      color: ${(props) => props.color || "#fb3f78"};
      background-color: transparent;

      &:hover {
        border-color: #4053cc;
        color: #4053cc;
        background-color: transparent;
      }
    `};

  ${(props) =>
    props.primary &&
    css<StyledBtnPropsType>`
      color: snow;
      background-color: ${(props) => props.color || "#fb3f78"};
    `};
`;
