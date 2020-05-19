import React from "react";
import Layout from "../components/Layout";
// gatsby image
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
// styles
import "../styles/globals.scss";
import styled from "styled-components";
// components
import Introduction from "../components/Introduction";
// images

const getImages = graphql`
  {
    team1: file(relativePath: { eq: "team-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    team2: file(relativePath: { eq: "team-2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const AboutPage = () => {
  const imageData = useStaticQuery(getImages);
  return (
    <AboutWrapper>
      <Layout>
        <div className='bg-about'>
          <Introduction
            title='About Us'
            subtitle='Meet the team that enables connectivity, intelligence, and machine learning
              capabilities to field devices.'
          />
        </div>

        <div className='meet-the-team'>
          <div className='image-container'>
            <Img fluid={imageData.team1.childImageSharp.fluid}></Img>
          </div>
          <div className='image-container'>
            <Img fluid={imageData.team2.childImageSharp.fluid}></Img>
          </div>
        </div>
        <p className='team-summary'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </Layout>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  .bg-about {
    background-size: cover;
    margin-top: 5vh;
    margin-bottom: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .intro {
    width: 50%;
  }

  .meet-the-team {
    margin: 10vh auto;
    padding: 0 15px;
    display: flex;
    justify-content: space-around;

    @media (max-width: 500px) {
      flex-direction: column;
      align-items: center;
    }

    .image-container {
      width: 250px;
      height: auto;
      margin: 1rem;
    }
  }

  .team-summary {
    margin: 1rem auto;
    max-width: 765px;
    font-size: 1.3rem;
    font-family: open-sans, sans-serif;
    margin-bottom: 5rem;

    @media (max-width: 765px) {
      width: 400px;
    }
    @media (max-width: 400px) {
      width: 80%;
      padding-left: 10px;
      padding-right: 10px;
    }
  }
`;

export default AboutPage;
