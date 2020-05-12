import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div id="sec1-home">
      <div className="App">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <div style={{ marginTop: "50px" }}>
          <Link href="/" className="button-blue-small">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
