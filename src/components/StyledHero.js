import React from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

const StyledHero = ({ img, className, children, home }) => {
  return (
    <BackgroundImage className={className} fluid={img} home={home}>
      {children}
    </BackgroundImage>
  );
};

export default styled(StyledHero)`
  height: ${(props) => (props.home ? "175vh;" : "50vh;")};
  background: ${(props) =>
    props.home
      ? "linear-gradient(to bottom,rgba(158, 0, 0, 0.67) 0%, rgba(27, 13, 13, 0.67) 25%, rgba(193, 0, 0, 1) 60%, rgba(201, 0, 0, 1) 100%)"
      : "none"};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;
