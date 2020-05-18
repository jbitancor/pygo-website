import React from "react"
import styled from "styled-components"

const CaseStudy = ({ title, subtitle, description, image }) => {
  return (
    <CaseStudyWrapper>
      <div className="cs-title-desc">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <p>{description}</p>
        <button>Download PDF</button>
      </div>
      <div className="cs-img-preview">
        <img src={image} alt="" />
      </div>
    </CaseStudyWrapper>
  )
}

const CaseStudyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5vw;
  padding-right: 5vw;
  margin: 10vh auto;

  .cs-title-desc {
    flex-grow: 1;
    width: 40vw;
    padding: 1rem;

    h1 {
      color: black;
      line-height: 45px;
      margin-bottom: 1rem;
      font-weight: 100;
      font-size: 2.5rem;
    }
    h3 {
      color: black;
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
    p {
      line-height: 35px;
      margin-bottom: 2rem;
    }
  }
  .cs-img-preview {
    flex-grow: 1;
    padding: 1rem;
  }
`

export default CaseStudy
