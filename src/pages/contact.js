import React from "react"
// components
import Layout from "../components/Layout"
import Introduction from "../components/Introduction"
// styles
import contactStyles from "../styles/Contact.module.scss"
// images
import circuit from "../images/circuit.jpg"

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <div className={contactStyles.contactSection}>
          <img src={circuit} alt="" />
          <div className={contactStyles.contactUs}>
            <Introduction title="Contact Us" />
            <div className={contactStyles.details}>
              <p>Suite 131</p>
              <p>Advanced Technology Centre</p>
              <p>9650, 20 Ave NW, Edmonton</p>
              <p>AB, Canada, T6N 1G1</p>
              <p>solutions@pygo.io</p>
            </div>
            <label htmlFor="Name">Name</label>
            <input type="text" />
            <label htmlFor="Email">Email</label>
            <input type="text" />
            <label htmlFor="Message">Message</label>
            <input type="text" />
            <button>SEND</button>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default ContactPage
