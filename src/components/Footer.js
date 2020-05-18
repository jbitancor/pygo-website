import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <div></div>
      <p>Copyright 2020 PYGO Incorporated. All rights reserved</p>
      <div></div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: #2d3643;
  color: white;

  p {
    font-size: 0.6rem;
    margin: 1rem;
    text-align: center;
  }
`;

export default Footer;
