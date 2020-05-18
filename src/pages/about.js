import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
// styles
import "../styles/globals.scss"
import aboutStyles from "../styles/About.module.scss"
// components
import Introduction from "../components/Introduction"
import Container from "../components/Container"
// images
import team1 from "../images/team-1.jpg"
import team2 from "../images/team-2.jpg"
import team3 from "../images/team-3.jpg"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <div className={aboutStyles.bgAbout}>
          <Introduction
            title="About Us"
            subtitle="Meet the team that enables connectivity, intelligence, and machine learning
              capabilities to field devices."
          />
        </div>

        <div className={aboutStyles.meetTheTeam}>
          <img src={team1} alt="" />
          <img src={team2} alt="" />
          <img src={team3} alt="" />
        </div>
        <Container>
          <p className={aboutStyles.teamSummary}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Container>
      </Layout>
    </div>
  )
}

export default AboutPage
