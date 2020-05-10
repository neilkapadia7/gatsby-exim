import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div id="sec1-home">
        <div className="App">
          <h1 className="title">Drop us a line</h1>
          <center>
            <p className="page-description-para">
              {/* We would love to hear about start your new Project? */}
              We are here for you! How can we help?
            </p>
          </center>

          <form netlify name="contact" method="POST" data-netlify="true">
            <div className="input-field">
              <label>
                Name
                <input type="text" placeholder="Enter your name" required />
              </label>
            </div>
            <div className="input-field">
              <label>
                Email
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
              </label>
            </div>
            <div className="input-field">
              <label>
                Phone Number
                <input
                  type="number"
                  placeholder="Enter your phone number"
                  required
                />
              </label>
            </div>
            <div className="input-field">
              <label>
                Message
                <textarea placeholder="Enter your message" required></textarea>
              </label>
            </div>
            <div className="input-submit">
              <input
                type="submit"
                className="button-blue submit"
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
