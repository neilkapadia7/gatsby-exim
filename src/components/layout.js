import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>

      <footer>
        © {new Date().getFullYear()} Exim AirCare, Developed and Maintained by
        {` `}
        <a
          href="https://www.neyatechdevelopers.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Neya<span style={{ color: "#FF214F" }}>Tech</span> Developers
        </a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
