import React, { useState } from "react";
import {Link} from 'gatsby';
import styled from "styled-components";
import Modal from "react-modal";
import "../styles/globals.scss";
// icons
import { BsCloudDownload } from "react-icons/bs";

const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
  },
  overlay: {
    backgroundColor: "rgba(128,128,128,0.8)",
  },
};

Modal.setAppElement("#___gatsby");

const StyledModal = ({ title }) => {
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
          <div className='form-control'>
            <input type='text' name='name' placeholder='Name' />
          </div>
          <div className='form-control'>
            <input type='email' name='email' placeholder='Email' />
          </div>
          <button>
            <p>Download</p> <BsCloudDownload />
          </button>
          <p>Questions? <Link to="/contact" onClick={closeModal}>Contact Us</Link> </p>
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

  /* desktop */
  @media (min-width: 766px) {
    margin: 80px auto;
    width: 60%;
    height: 50vh;
  }
  /* phone */
  @media (max-width: 765px) {
    h1 {
      font-size: 1.5rem;
    }
    * {
      margin: 0.2rem 0;
      font-size: 0.6rem;
    }
    button {
      * {
        margin: 0;
      }
    }
    width: 100%;
    margin: 0 auto;
    height: 100%;
  }
`;

export default StyledModal;
