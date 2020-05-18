import React from "react"
import styled from "styled-components"

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>
}

const ContainerWrapper = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 70vw;

  /* @media (min-width: 1200px) {
    max-width: 1140px;
  } */
  /* @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 576px) {
    max-width: 540px;
  } */
`

export default Container
