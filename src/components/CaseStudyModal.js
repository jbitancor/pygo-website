import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Modal from "react-modal";
import { Link } from "gatsby";
// formik
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// components
import TextError from "./TextError";
import TextSuccess from "./TextSuccess";
import "../styles/globals.scss";
// icons
import { BsCloudDownload } from "react-icons/bs";
// pdf
import cs1 from "../../static/PYGO-casestudy1.pdf";

// ----- FORMIK -----
const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  honeypot: Yup.string(),
});
// ----- FORMIK -----

// ----- MODAL -----
const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "4rem",
  },
  overlay: {
    zIndex: "1000",
    backgroundColor: "rgba(128,128,128,0.8)",
  },
};

Modal.setAppElement("#___gatsby");
// ----- MODAL -----

const StyledModal = ({ title }) => {
  const [isSent, setIsSent] = useState(false);

  const onSubmit = (values) => {
    if (values.honeypot) {
      console.log("Filthy bot!");
    } else {
      axios
        .post(
          "https://0vp7fnh852.execute-api.us-east-1.amazonaws.com/test/contactform",
          {
            name: `${values.name}`,
            emailAddress: `${values.email}`,
            caseStudy: `${values.caseStudy}`,
          }
        )
        .then(
          (response) => {
            if (response.status === 200) {
              const link = document.createElement("a");
              link.href = `${cs1}`;
              link.setAttribute("download", "PYGO-casestudy1.pdf");
              document.body.appendChild(link);
              link.click();
              setIsSent(true);
            }
          },
          (error) => {
            console.log("Negative" + error);
          }
        );
    }
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div>
      <button onClick={openModal}>FULL PDF</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyle}>
        <StyledModalWrapper>
          <h1>Case Study Download</h1>
          <p>
            <i>{title}</i>
          </p>
          <Formik
            initialValues={{
              name: "",
              email: "",
              caseStudy: `${title}`,
              honeypot: "",
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            <Form style={{ width: "100%" }}>
              <div className='form-control'>
                <Field type='text' id='name' name='name' placeholder='Name' />
                <ErrorMessage name='name' component={TextError} />
              </div>
              <div className='form-control'>
                <Field
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Email'
                />
                <ErrorMessage name='email' component={TextError} />
              </div>
              {isSent && (
                <TextSuccess>
                  Thank you! The PDF will download shortly. Click{" "}
                  <a href={cs1}>here</a> if it does not.
                </TextSuccess>
              )}
              <button type='submit'>
                <p>Download</p> <BsCloudDownload />
              </button>
            </Form>
          </Formik>
          <p>
            Questions?{" "}
            <Link to='/contact' onClick={closeModal}>
              Contact Us
            </Link>{" "}
          </p>
        </StyledModalWrapper>
      </Modal>
    </div>
  );
};

const StyledModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  * {
    margin: 0.5rem 0;
  }

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  /* desktop */
  @media (min-width: 766px) {
    margin: 0px auto;
    width: 60%;
    height: 50vh;
  }
  /* phone */
  @media (max-width: 765px) {
    h1 {
      font-size: 1.7rem;
    }
    i {
      font-size: 1rem;
    }
    * {
      margin: 0.2rem 0;
      font-size: 0.7rem;
    }
    button {
      * {
        font-size: 1rem;
        margin: 0;
      }
    }
    width: 100%;
    margin: 0 auto;
    height: 100%;
  }
`;

export default StyledModal;
