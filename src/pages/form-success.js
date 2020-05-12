import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const FormSuccess = () => {
  return (
    <Layout>
      <SEO title="Success" />
      <div id="sec1-home">
        <div className="App">
          <h1 className="title">
            Thank You for submiting your query. We'll get back to you soon
          </h1>
        </div>
      </div>
    </Layout>
  )
}

export default FormSuccess
