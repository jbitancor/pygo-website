import React from "react";
import { graphql } from "gatsby";
import "../styles/globals.scss";
import styled from "styled-components";
// components
import StyledHero from "../components/StyledHero";
import Layout from "../components/Layout";
import CaseStudy from "../components/CaseStudy";
import Introduction from "../components/Introduction";
// images
import preview1 from "../images/case-study1.jpg";

export const query = graphql`
  query {
    caseStudiesBg: file(relativePath: { eq: "factory-2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const IndustriesPage = (props) => {
  return (
    <CaseStuddyWrapper>
      <Layout>
        <StyledHero
          className='normal-gradient'
          img={props.data.caseStudiesBg.childImageSharp.fluid}>
          <Introduction title='Case Studies' color='white' />
        </StyledHero>
        <div>
          <Introduction title='Case Studies' color='white' />
        </div>
        <CaseStudy
          title='Centimeter-Level 3D Positioning Using GNSS RTK'
          subtitle='Applications in monitoring Mine Tailings Ponds, Dam Safety'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, consequuntur. Voluptates ut, incidunt, accusantium adipisci sed quod harum sint ab obcaecati illo quidem explicabo autem quae molestiae officiis neque excepturi recusandae dolor molestias beatae magnam eum officia doloribus porro. Dolorum consequuntur doloribus veniam ex hic autem accusantium ratione ea totam.'
          image={preview1}
        />
      </Layout>
    </CaseStuddyWrapper>
  );
};

const CaseStuddyWrapper = styled.section`
  .normal-gradient {
    background: linear-gradient(
      to bottom,
      rgba(158, 0, 0, 0.67) 0%,
      rgba(27, 13, 13, 0.67) 25%,
      rgba(201, 0, 0, 0.65) 100%
    ) !important;
  }
`;

export default IndustriesPage;
