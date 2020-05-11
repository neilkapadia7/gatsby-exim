import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Mission from "../components/mission"
import ServiceCard from "../components/ServiceCard"

const products = () => {
  return (
    <Layout>
      <SEO title="Products" />
      <div id="sec1-home">
        <div className="App">
          <h1 className="title">Our Products</h1>
          <center>
            <p className="page-description-para">
              We are idea-driven, working with a strong focus on design and user
              experience. Our projects should engage your audience, we want to
              create wonderful digital things that people love to be part of and
              use.
            </p>
          </center>
        </div>
      </div>

      <div>
        <Mission />
      </div>
      <div className="sec3-home">
        <div className="App">
          <center>
            <h1 className="title2">Our Services</h1>
          </center>
          <ServiceCard />
        </div>
      </div>
    </Layout>
  )
}

export default products
