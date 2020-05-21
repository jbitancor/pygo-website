import React from "react";
import styled from "styled-components";

const TextError = (props) => {
  return <TextErrorWrapper>{props.children}</TextErrorWrapper>;
};

const TextErrorWrapper = styled.div`
  color: red;
  font-family: open-sans, sans-serif;
  font-size: 0.8rem;
  padding-left: 1rem;
  padding-top: 5px;
`;

export default TextError;
