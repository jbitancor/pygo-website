import React from "react";
import styled from "styled-components";
import casestudy1 from "../../static/PYGO-casestudy1.pdf";
import StyledModal from "../components/CaseStudyModal";

const CaseStudy = ({ title, subtitle, description, image }) => {
  return (
    <CaseStudyWrapper>
      <div className="cs-title-desc">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <p>{description}</p>
        <StyledModal title={title} />
      </div>
      <div className="cs-img-preview">
        <img src={image} alt="" />
      </div>
    </CaseStudyWrapper>
  );
};

const CaseStudyWrapper = styled.div`
  padding: 2rem;

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    margin: 0 auto;
  }

  .cs-title-desc {
    padding: 2rem;

    * {
      margin: 15px 0;
    }

    @media (max-width: 450px) {
      padding: 5px;
      * {
        margin: 15px 0;
      }
    }
  }
  .cs-img-preview {
    text-align: center;

    @media (max-width: 660px) {
      img {
        width: 500px;
      }
    }
    @media (max-width: 550px) {
      img {
        width: 400px;
      }
    }
    @media (max-width: 450px) {
      img {
        width: 325px;
      }
    }
  }
`;

export default CaseStudy;
