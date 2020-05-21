import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
// styles
import "../styles/globals.scss";
import indexStyles from "../styles/Index.module.scss";
// components
import Layout from "../components/Layout";
import Introduction from "../components/Introduction";
import StyledHero from "../components/StyledHero";
// intro logos
import OAG from "../images/oil-and-gas.png";
import MM from "../images/mining-metal.png";
import PMC from "../images/pipeline-midstream-chemical.png";
import RE from "../images/renewable-energy.png";
import MWW from "../images/manufacturing-waste-water.png";
import PFP from "../images/pharmaceutical-food-process.png";

export const query = graphql`
  query {
    homeBg: file(relativePath: { eq: "factory-bg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    Factory: file(relativePath: { eq: "factory.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    uofa: file(relativePath: { eq: "bw-uofa.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    annau: file(relativePath: { eq: "bw-annau.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aws: file(relativePath: { eq: "bw-aws.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    azure: file(relativePath: { eq: "bw-azure.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    atc: file(relativePath: { eq: "bw-atc.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default (props) => {
  return (
    <div>
      <Layout>
        <StyledHero home='true' img={props.data.homeBg.childImageSharp.fluid}>
          <Introduction
            title='Empowering Legacy Plant Floor, Equipment, and Processes.'
            subtitle='Enable connectivity, intelligence, and machine learning
              capabilities to every field device.'
            color='white'
          />
          <div className={indexStyles.gridContainer}>
            <div className={indexStyles.gridItem}>
              <h2>Oil and Gas</h2>
              <img src={OAG} alt='' />
            </div>
            <div className={indexStyles.gridItem}>
              <h2>Mining {"\n"} Metal</h2>
              <img src={MM} alt='' />
            </div>
            <div className={indexStyles.gridItem}>
              <h2>Pipeline Midstream Chemical</h2>
              <img style={{ marginBottom: "10px" }} src={PMC} alt='' />
            </div>
            <div className={indexStyles.gridItem}>
              <h2>Renewable Energy</h2>
              <img src={RE} alt='' />
            </div>
            <div className={indexStyles.gridItem}>
              <h2>Manufacturing Waste/Water</h2>
              <img src={MWW} alt='' />
            </div>
            <div className={indexStyles.gridItem}>
              <h2>Pharmaceutical Food Process</h2>
              <img src={PFP} alt='' />
            </div>
          </div>
        </StyledHero>
        <div className={indexStyles.whatWeDoSection}>
          <div className={` ${indexStyles.whatWeDo}`}>
            <h1 style={{ color: "black" }}>What We Do</h1>
            <p>
              PYGO is a leading technology provider enabling{" "}
              <strong>
                <i>Industrial IoT</i>{" "}
              </strong>{" "}
              and{" "}
              <strong>
                <i>Edge Intelligence</i>
              </strong>{" "}
              for safe, efficient and reliable industrial operations.
            </p>
          </div>
          <Img
            className={indexStyles.factory}
            fluid={props.data.Factory.childImageSharp.fluid}
          />
        </div>
        <div className={indexStyles.sponsors}>
          <div className={indexStyles.sponsor}>
            <Img
              style={{ width: "100%" }}
              fluid={props.data.uofa.childImageSharp.fluid}
            />
          </div>
          <div className={indexStyles.sponsor}>
            <Img
              style={{ width: "100%" }}
              fluid={props.data.atc.childImageSharp.fluid}
            />
          </div>
          <div className={indexStyles.sponsor}>
            <Img
              style={{ width: "100%" }}
              fluid={props.data.aws.childImageSharp.fluid}
            />
          </div>
          <div className={indexStyles.sponsor}>
            <Img
              style={{ width: "100%" }}
              fluid={props.data.azure.childImageSharp.fluid}
            />
          </div>
          <div className={indexStyles.sponsor}>
            <Img
              style={{ width: "100%" }}
              fluid={props.data.annau.childImageSharp.fluid}
            />
          </div>
        </div>
        <div className={indexStyles.contactSection}>
          <div className={indexStyles.contactBox}>
            <Introduction
              title='Questions?'
              subtitle='If you have any inquiries, questions or suggestions, please
              contact us'
              color='white'
            />
            <button>
              <Link to='/contact'>Contact Us</Link>
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};
