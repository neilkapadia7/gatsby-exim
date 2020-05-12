import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const FormSuccess = () => {
  return (
    <Layout>
      <SEO title="Success" />
      <div id="sec1-home">
        <div className="App">
          <h1 className="title top-title2">
            Thank You for submiting your query. We'll get back to you soon
          </h1>
          <center>
            <div style={{ marginTop: "50px" }}>
              <Link href="/contact" className="button-blue-small">
                Back
              </Link>
            </div>
          </center>
        </div>
      </div>
    </Layout>
  )
}

export default FormSuccess
