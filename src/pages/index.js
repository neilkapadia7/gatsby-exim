import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Mission from "../components/mission"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="sec1-home">
      <div className="App">
        <h1 className="site-title">
          EXIM <br />
          AIR CARE
        </h1>
        <p className="site-description">
          Welcome to Exim AirCare, Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua
        </p>
      </div>
    </div>
    <div id="sec2-home">
      <div className="App"></div>
    </div>
    <div id="sec3-home">
      <div className="App"></div>
    </div>
    <Mission />
    <div id="sec4-home">
      <div className="App"></div>
    </div>
  </Layout>
)

export default IndexPage
