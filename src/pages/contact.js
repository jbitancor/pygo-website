import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// components
import Layout from "../components/Layout";
import Introduction from "../components/Introduction";
import TextError from "../components/TextError";
// import Img from "gatsby-image";

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

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  message: Yup.string().required("Required"),
});

const onSubmit = () => {
  console.log("HLELO");
};

const ContactPage = () => {
  const data = useStaticQuery(getImage);

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
            <Formik
              initialValues={{
                name: "",
                email: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={onSubmit}>
              <Form>
                <div className='form-control'>
                  <Field type='text' id='name' name='name' placeholder='Name' />
                  <ErrorMessage name='name' component={TextError} />
                </div>
                <div className='form-control'>
                  <Field
                    type='text'
                    id='email'
                    name='email'
                    placeholder='Email'
                  />
                  <ErrorMessage name='email' component={TextError} />
                </div>
                <div className='form-control'>
                  <Field
                    as='textarea'
                    type='text'
                    id='message'
                    name='message'
                    placeholder='Message'
                  />
                  <ErrorMessage name='message' component={TextError} />
                </div>
                <button type='submit'>SEND</button>
              </Form>
            </Formik>
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
    }
  }

  .details {
    margin: 1rem 0rem;
  }

  form {
    width: 100%;
  }

  .form-control {
    width: 100%;
    margin-bottom: 1rem;

    input,
    textarea {
      width: 100%;
      border: 0;
      padding: 1rem;
      font-family: open-sans, sans-serif;
      box-shadow: grey 0px 1px 3px;
      transition: box-shadow 0.2s;
    }

    input:focus,
    textarea:focus {
      outline: none;
      box-shadow: black 0px 3px 3px;
      transition: box-shadow 0.2s;
    }
    textarea::-webkit-resizer {
      display: none;
    }
    @keyframes boxShadow {
      from {
        box-shadow: black 0px 0px 0px;
      }
      to {
        box-shadow: black 0px 0px 5px;
      }
    }
  }
`;

export default ContactPage;
