import React from "react";
import styled from "styled-components";

const TextSuccess = ({ children }) => {
  return <TextSuccessWrapper>{children}</TextSuccessWrapper>;
};

const TextSuccessWrapper = styled.div`
  color: green;
  font-family: open-sans, sans-serif;
  font-size: 0.8rem;
  padding-left: 1rem;
  padding-top: 5px;
  margin-bottom: 1rem;
`;

export default TextSuccess;
