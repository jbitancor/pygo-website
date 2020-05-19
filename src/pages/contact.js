import React from "react";
// components
import Layout from "../components/Layout";
import Introduction from "../components/Introduction";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const getImage = graphql`
  {
    atc: file(relativePath: { eq: "advanced-technology-centre.webp" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const ContactPage = () => {
  const data = useStaticQuery(getImage);
  console.log(data);
  return (
    <ContactWrapper>
      <Layout>
        <div className='contact-section'>
          <div className='contact-us'>
            <Introduction title='Contact Us' />
            <div className='details'>
              <p>Suite 131</p>
              <p>Advanced Technology Centre</p>
              <p>9650, 20 Ave NW, Edmonton</p>
              <p>AB, Canada, T6N 1G1</p>
              <p>solutions@pygo.io</p>
            </div>
            <label htmlFor='Name'>Name</label>
            <input type='text' />
            <label htmlFor='Email'>Email</label>
            <input type='text' />
            <label htmlFor='Message'>Message</label>
            <input type='text' />
            <button>SEND</button>
          </div>
        </div>
      </Layout>
    </ContactWrapper>
  );
};

const ContactWrapper = styled.div`
  .contact-section {
    margin: 15vh 15vw;
    display: flex;
    flex-direction: column;

    .contact-us {
      padding: 2rem;
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      input {
        width: 100%;
        border: 1px grey solid;
        font-size: 100%;
        padding: 0.5rem 0rem;
        margin-bottom: 1rem;
      }

      textarea {
        width: 50%;
      }
    }
  }

  .details {
    margin: 1rem 0rem;
  }
`;

export default ContactPage;
