import React from "react";
import styled from "styled-components";

const Introduction = ({ title, subtitle, color }) => {
  return (
    <IntroductionWrapper color={color}>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </IntroductionWrapper>
  );
};

const IntroductionWrapper = styled.div`
  text-align: center;
  color: ${(props) => (props.color ? props.color : "black")};

  h1 {
    font-weight: 100;
    font-size: 3.5rem;
    font-family: liberation-serif, serif;
  }

  h3 {
    font-family: open-sans, sans-serif;
    font-weight: 100;
  }

  @media (max-width: 765px) {
    h1 {
      font-size: 2rem;
    }
    h3 {
      width: 50%;
      transform: translateX(50%);
      font-size: 1rem;
    }
  }
`;

export default Introduction;
