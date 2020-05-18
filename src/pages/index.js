import React from "react";
import Layout from "../components/Layout";
// styles
import "../styles/globals.scss";
import indexStyles from "../styles/Index.module.scss";
// components
import Introduction from "../components/Introduction";
// intro logos
import OAG from "../images/oil-and-gas.png";
import MM from "../images/mining-metal.png";
import PMC from "../images/pipeline-midstream-chemical.png";
import RE from "../images/renewable-energy.png";
import MWW from "../images/manufacturing-waste-water.png";
import PFP from "../images/pharmaceutical-food-process.png";
// factory image
import Factory from "../images/factory.jpg";
// sponsor logos
import uofa from "../images/bw-uofa.jpg";
import atc from "../images/bw-atc.jpg";
import aws from "../images/bw-aws.jpg";
import azure from "../images/bw-azure.jpg";
import annau from "../images/bw-annau.jpg";

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <div className={indexStyles.heroContainer}>
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
        </div>
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
          <img className={indexStyles.factory} src={Factory} alt='' />
        </div>
        <div className={indexStyles.sponsors}>
          <div className={indexStyles.sponsor}>
            <img src={uofa} alt='UofA Logo' />
          </div>
          <div className={indexStyles.sponsor}>
            <img src={annau} alt='' />
          </div>
          <div className={indexStyles.sponsor}>
            <img src={aws} alt='' />
          </div>
          <div className={indexStyles.sponsor}>
            <img src={azure} alt='' />
          </div>
          <div className={indexStyles.sponsor}>
            <img src={atc} alt='' />
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
            <button>Contact Us</button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default IndexPage;
