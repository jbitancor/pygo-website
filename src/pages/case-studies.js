import React from "react";
import Layout from "../components/Layout";
import "../styles/globals.scss";
import csStyles from "../styles/CaseStudies.module.scss";
// components
import CaseStudy from "../components/CaseStudy";
import Introduction from "../components/Introduction";
// images
import preview1 from "../images/case-study1.jpg";

const IndustriesPage = () => {
  return (
    <div>
      <Layout>
        <div className={csStyles.bgCaseStudies}>
          <Introduction title='Case Studies' color='white' />
        </div>
        <CaseStudy
          title='Centimeter-Level 3D Positioning Using GNSS RTK'
          subtitle='Applications in monitoring Mine Tailings Ponds, Dam Safety'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, consequuntur. Voluptates ut, incidunt, accusantium adipisci sed quod harum sint ab obcaecati illo quidem explicabo autem quae molestiae officiis neque excepturi recusandae dolor molestias beatae magnam eum officia doloribus porro. Dolorum consequuntur doloribus veniam ex hic autem accusantium ratione ea totam.'
          image={preview1}
        />
      </Layout>
    </div>
  );
};

export default IndustriesPage;
